import LibrarySong from './LibrarySong';
import Song from './Song';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) =>{
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} song={song} songs={songs} setCurrentSong={setCurrentSong} />)}
            </div>
        </div>
    )
}

export default Library;