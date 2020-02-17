import React from 'react'
import '../styles/PlantImage.scss'
import plantPic from '../img/os_plant.png'
import pipePic from '../img/pipe.png'

function PlantImage() {

  return (
    <div className='plipeContainer'>
      <img src={plantPic} alt='Super Mario pirhana plant' className='plant wobble-hor-bottom'/>
      <img src={pipePic} alt='Super Mario pipe' className='pipe'/>
    </div>
  );
}

export default PlantImage
