import React from 'react'
import founder from './../images/founder.jpg';
import './founder.css';

function Inquires() {
  return (
    <div>

      <div className='image-founder-text'>
          <div className='founder-image' >
            <img src={founder} />
          </div>
          <div className='founder-text'>
            <p>
              <span className='found-name'>Arya Manjhani</span> & <span className='found-name'>Deepali Patel </span> 
              hail from Madhya Pradesh. Arya is from Jabalpur and Deepali comes from Khajuraho. Both travelled to Indore for their course in Fashion design, where during their internship days at a textile industry they understood the importance of organic cotton and sustainability. They instantly had a common spark to move forward with the idea of creating sustainable replacements for plastic polyster soft toys . They interacted with industry professionals and researched the fabric and its whereabouts. 
            </p>

            <p><i><b>Bhakur was yet not born, but was in its latent stages, as a beautiful  concept in the minds of Arya and Deepali. </b></i></p>

            <p><i>Their efforts towards finding a sustainable solution to this problem finally gave birth to Bhakur, with their first product "Cacti".</i></p>

            <p><i>Haathi ka baccha, Giffy the Girrafe, Taara, Pingu the Penguin, Unicorn, and Ringo Ring Stacker are some of the OGs that Deepali & Arya created at Bhakur.</i> </p>

            <p><i>Since then, Bhakur has produced several different plushies catering for its diverse customer base. With their continued efforts, the founders through their small business ecosystem, empowers our social well-being with Mother Earth.</i></p>
          
          </div>

      </div>
    </div>
  )
}

export default Inquires