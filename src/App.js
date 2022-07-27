import React, {useState, useRef} from 'react'

import './style/app.scss'
import Nav from './components/Nav'
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'

//import AutoPlay Handler
import AutoPlay from './AutoPlay'

import data from './util';

const App = () => {

    //Ref 

    const audioRef = useRef(null)

  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])

  const [isPlaying, setIsPlaying] = useState(false)

  

  //functions

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate the percentage
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent/roundedDuration) * 100)

    //songInfo state
    setSongInfo({...songInfo, 
      currentTime: current, 
      duration, 
      animationPercentage: animation})
  }


    //State - Time and info 
    const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
      animationPercentage: 0,
    })


    const [libraryStatus, setLibraryStatus ] = useState(false)

    const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id 
  === currentSong.id)

  
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      
    if(isPlaying) audioRef.current.play()
    }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`} >
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />

      <Player setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
       audioRef={audioRef}
       setSongInfo={setSongInfo}
       songInfo={songInfo}
       songs={songs}
       setSongs={setSongs}
       setCurrentSong={setCurrentSong}
       />

      <Library songs={songs} 
      setCurrentSong={setCurrentSong}
      audioRef={audioRef}
      isPlaying={isPlaying}
      setSongs={setSongs}
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}
      />

      <audio onTimeUpdate={timeUpdateHandler}
      onLoadedMetadata={timeUpdateHandler} 
      ref={audioRef} src={currentSong.audio} 
      onEnded={songEndHandler} />


    </div>
  )
}

export default App
