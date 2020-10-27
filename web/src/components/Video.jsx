import React from 'react'

const Video = ({ src }) => {
  return (
    <section className='video-container'>
      <video playsInline autoPlay muted loop onLoadedData={(e) => e.target.play()}>
        <source src={src} type='video/mp4' />
      </video>
    </section >
  )
}

export default Video

