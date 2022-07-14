import React from 'react'
import Cards from '../Components/Cards.';
import Premium from './Premium';
import Cardimg1 from '../imgs/cardimg1.png';
import Cardimg2 from '../imgs/paytm.png';
import Cardimg3 from '../imgs/cardimg3.png';
import Cardimg4 from '../imgs/cardimg4.png';
function CardFlex() {
  return (
    <>
    <div className='container Cardflex'>

   
    <div className=' row'>
    <div className='col-3 postion'>
    <Cards 
         src = {Cardimg1}
         title = "ECONOMY"
         body = "Indian shares snap 5-day rally on weak global cues, post weekly gain"
        />
        <Premium />
      
    </div>
    <div className='col-3 postion'>
    <Cards 
         src = {Cardimg2}
         title = "FINANCE"
         body = "Paytm to shut Canada B2C app amid eroding market capitalisation"
        />
         <Premium />
    </div>
    <div className='col-3'>
    <Cards 
         src = {Cardimg3}
         title = "CONSUMER"
         body = "Exclusive: PE-backed sauce maker Wingreens acquires Lok Capital-backed cereal maker"
        />
    </div>
    <div className='col-3 postion'>
    <Cards 
         src = {Cardimg4}
         title = "ECONOMY"
         body = "GLOBAL MARKETS-European shares in the red after hawkish Fed comments"
        />
         <Premium />
    </div>
    
       
        </div>
        </div>
    </>
  )
}

export default CardFlex