import React , {useState , useEffect} from 'react';
import './style.css';
import axios from 'axios';
const PortFolio = () =>{

    const [images , setImages] = useState([])
    // hit component didMount tatkhdm ha mea based class
    useEffect( () => {
      axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    }, [] )

    const pfImages = images.map( (imageItem) =>{
      return(
        <div key={imageItem.id}>
          <img src={imageItem.image} alt="" />
          <p class="overlay">
              <span>
                  Show Image
              </span>
          </p>
    </div>
      )
    } )


    return (
      <div class="portfolio" id='portfolio'>
            <h2 class="portfolio-title"><span>My</span> Portfolio</h2>
            <ul class="portfolio-list">
                <li class="portfolio-item active">All</li>
                <li class="portfolio-item">HTML</li>
                <li class="portfolio-item">Photoshop</li>
                <li class="portfolio-item">Wordpress</li>
                <li class="portfolio-item">Mobile</li>
            </ul>
            
            <div class="box">
                
                {pfImages}
            </div>
            
        </div>
    );
}


export default PortFolio;
