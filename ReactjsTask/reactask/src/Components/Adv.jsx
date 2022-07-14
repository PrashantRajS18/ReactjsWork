import React from 'react'
import social1 from '../imgs/social1.png';
import social2 from '../imgs/social2.png';
import Adv3  from '../imgs/adv3.png';
function Adv(props) {
  return (
    <>
        <div className='adv1 container hide'>
        <p className='adtxt Mont'>Advertisement</p>
        <div style={{textAlign:"center"}}>
        <img src={props.src} className ="adimg1" width={props.width} alt = "add 1" />
        </div>
            
        </div>
    </>
  )
}
 function Social() {
  return (
    <>
      <div className='row container' style={{padding:"15px"}}>
        <div className='col-4 mt-50'>
        <div className='socialpos'>
          <img  src={social1} width ="100%"  className='ad'  alt="socialimg" />
          <div  className='socialpos2'>
          <a href='/' className='Montbold' style={{color:"#888888"}}>VCCircle.com</a>
            <p style={{color:"#484848" , fontSize:"12px"}}> World Bank arm IFC to double down its investments into funds in 2022</p>
          </div>
          </div>
         
          
        </div>
        <div className='col-1 mt-50'>
        <hr className='vrt2'></hr>
        </div>
        <div className='col-3 mt-40 mb-20'>
        <h1>
        Infographic
        </h1>
        <img className='mt-20'  src={social2} width ="100%" height="300" alt="socialimg" />
        </div>
        <div className='col-1 mt-50'>
        <hr className='vrt2'></hr>
        </div>
        <div className='col-3'>
        
        <div className='adv3'>
        <p className='adtxt Mont'>Advertisement</p>
        <div style={{textAlign:"center"}}>
        <img src={Adv3} className ="adimg4" width="90%"   alt = "add 1" />
        </div>
            
        </div>
        </div>
        
      </div>
      <div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
      
    </>
  )

}

export  {Adv ,Social}