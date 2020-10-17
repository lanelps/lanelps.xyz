import React from 'react'

const Video = ({ src }) => {
  return (
    <section className='video-container'>
      <video autoPlay loop>
        <source src={src} type='video/mp4' />
      </video>
    </section>
  )
}

export default Video

