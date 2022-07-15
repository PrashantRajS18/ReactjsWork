import './App.css';
import './font.css';
import './grid.css';
import {Nav , Footer} from './Components/Nav';
import {Adv , Social} from './Components/Adv';
import Section1 from './Components/Section1';
import CardFlex from './Components/CardFlex';
import Editor from './Components/Editor';
// import Editorimg1 from '../imgs/editorimg1.png'
import Adv1 from './imgs/adv1.png';
import Adv2  from  './imgs/adv2.png';
// import Cards from './Components/Cards.';
import Mostpop from './Components/Mostpop';
import Vcc from './Components/Vcc';
import InptSection from './Components/InptSection';
import Stories from './Components/Stories';
import {Slider1  } from './Components/Slider1';
import VccSlide from './Components/VccSlide';
import Upcome from './Components/Upcome';
import {Carouseldata , Carouseldata2 ,Carouseldata3,Carouseldata4,Carouseldata5,Carouseldata6} from './Carousel1data'
function App() {
  return (
   <>
<Nav />
<hr className='hr' style={{marginTop:"10px"}}></hr>
<Adv className ="adv1 container hide" src ={Adv1} width = "90%"/>
<Section1/>
<CardFlex />
<Adv  src ={Adv2} width = "80%" />
<Editor 
  title = "Editor's Pick"
/>
<Social />
<Slider1 
  maintitle = "Limited Partner"
  c2 = {Carouseldata6}
/>
<Adv  src ={Adv2} width = "80%" />
<VccSlide />
<Upcome 
maintitle = "Upcoming Events"
/>
<div className='container'>
  <hr className='hr mt-50' ></hr>
  </div>
<Adv  src ={Adv2} width = "80%" />
<div className='container'>
 <hr className='hr mt-50' ></hr>
 </div>
<Slider1 
  maintitle = "Founders"
  c2 = {Carouseldata5}
/>
<Mostpop />
<Adv  src ={Adv2} width = "80%" />
<Vcc />
<Slider1 
  maintitle = "TMT"
  c2 = {Carouseldata4}
/>
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<InptSection />
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<Slider1 
  maintitle = "TechCircle"
  c2 = {Carouseldata3}
/>
<Adv  src ={Adv2} width = "80%" />
<Slider1 
  maintitle = "Mergers & Acquisitions"
c2 = {Carouseldata2}
/>
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<Slider1 
  maintitle = "Financials"
  c2 = {Carouseldata}
/>
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<Stories />

<Footer />
   </>
  );
}


export default App;
