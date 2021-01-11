const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) =>{
    const songSelectHandler = async () =>{
        await setCurrentSong(song);
        //Add active state
        const newSongs = songs.map((s) => {
            if (song.id === s.id){
                return{
                    ...s,
                    active:true,
                };
            } else{
                return{
                    ...s,
                    active:false,
                };
            }
        })
        setSongs(newSongs);
        if(isPlaying) audioRef.current.play();
    }
    return(
        <div onClick={songSelectHandler} alt={song.name} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;