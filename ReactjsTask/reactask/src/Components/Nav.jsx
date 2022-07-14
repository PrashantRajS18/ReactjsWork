import logo from  '../imgs/logo.png'
import search from '../imgs/magnifying-glass.png'
import user from '../imgs/user.svg';
import crown from '../imgs/crown.png'
import down from '../imgs/downarrow.png'
const Nav = ()=>{
    return(
        <><header className='container'>
            <nav className="navbar Mont">
            <div className='flex2 '>
            <div  >
            <div  className='burger'></div>
            <div  className='burger'></div>
            <div  className='burger'></div>
            </div>
                <a href='/' ><img src={logo} alt="logo img"/></a>
            </div>
            <ul>
                <li className='hide' ><a href='/' ><img src={search} alt = "search" /> Search</a></li>
                <li  ><a href='/' ><img src={crown} alt = "search" /> Subscribe</a></li>
                <li className='hide'><a href='/' > <img src={user} alt = "search" /> Sign in</a></li>
            </ul>
            
            </nav>
            <subnav className="subnav Mont">
            <ul>
                <li><a href='/' >Private Equity</a></li>
                <li><a href='/' >Venture Capital</a></li>
                <li><a href='/' >M&A</a></li>
                <li><a href='/' >Industry <img src = {down} alt = "arrow" /></a></li>
                <li><a href='/' >Stressed Assests</a></li>
                <li><a href='/' >Limited Partner</a></li>
                <li><a href='/' >founder</a></li>
            </ul>
            <ul>
              <li className='li'><a href='/' >Customize <img src = {down} alt = "arrow" /></a></li>
            </ul>
            </subnav>
            </header>
        </>
    )
}
 function Footer() {
  return (
    <>
        <div className='Footer'>
        <div className=' row'>
        <div className='col-2'></div>
        <div className='col-8'>
        <img src='../imgs/footlogo.png' alt='footer logo' width="auto" className='' />
         <ul className='footul'>
            <li>
                <a href='/'><img src='../imgs/facebook.png' alt ="facebook" /></a>
            </li>
            <li>
                <a href='/'><img src='../imgs/twitter.png' alt ="twitter" /></a>
            </li>
            <li>
                <a href='/'><img src='../imgs/linkedin.png' alt ="linkedin" /></a>
            </li>
         </ul>
         </div>
         <div className='col-2'></div>
         </div>
         <div className='row'>
         <div className='col-2'></div>
         <div className='col-8'>
         <ul className='footul2 flex2 MontMed' >
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>About Us</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Advertise with us</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Contact us</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Copyright</a>
            </li>
          
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Privacy Policy</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Terms of use</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Contact us</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Company Listing</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFFB2"}}>Tag Listing</a>
            </li>
         </ul>
         </div>
         <div className='col-2'></div>
         </div>
         <div className='row'>
         <div className='col-2'></div>
         <div className='col-8'>
         <ul className='footul3 flex2 Montbold' >
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>Our Products :</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>VCCircle</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>TechCircle </a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>Events</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>Training</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>VCCEdge</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>SalesEdge</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>PartnerEdge</a>
            </li>
            <li>
                <a href='/' style={{color:"#FFFFFF"}}>Edge Insights</a>
            </li>
            
         </ul>
         </div>
         <div className='col-2'></div>
         </div>
         <div className='Montlight ' style={{color:"#FFFFFFB2"}}>
            <p >Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures Pvt. Ltd.</p>
         </div>
        </div>
        
        
    </>
  )
}


export  {Nav , Footer}