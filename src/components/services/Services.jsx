import React from 'react'
import './services.css'
import DOOR from '../../assets/door.jpg'
import INTERCOMES from '../../assets/intercomes.jpg'
import BULGARY from '../../assets/bulgary.webp.jpg'
import CCTV from '../../assets/cctv3.jpg'

function Services() {
  return (
    <section id='services'>
      <div className='service_container'>
      <h3>Our Services</h3>
          <p>Learn about the state of the physical security market to determine the best solution to manage and protect your facilities</p>
          <div class="row">
          <div class="column">
            <figure><img src={DOOR} alt="Door Access Systems" className='servicei'/><figcaption className='image-topic'>Door Access Systems</figcaption></figure>
          </div>
          <div class="column">
          <figure><img src={INTERCOMES} alt="Door Access Systems"className='servicei'/><figcaption className='image-topic'>Intercomes</figcaption></figure>
          </div>
          <div class="column">
          <figure><img src={BULGARY} alt="Door Access Systems"className='servicei'/><figcaption className='image-topic'>Bulgary Alarm Systems</figcaption></figure>
          </div>
          <div class="column">
          <figure><img src={CCTV} alt="Door Access Systems"className='servicei'/><figcaption className='image-topic'>CCTV Cameras</figcaption></figure>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Services