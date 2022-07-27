import React from 'react'

const AutoPlay = ({isPlaying, audioRef}) => {

    if(isPlaying) {
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined ){
          playPromise.then((audio) => {
            audioRef.current.play()
          })
        }
      }
}

export default AutoPlay
