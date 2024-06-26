import React from 'react'
import './Header.css'
import { TiTick } from "react-icons/ti";
import image from '../assets/maintenance.jpg'
import '../font/Chillax.css'

const Header = () => {
  return (
    <div className='main'>
    <div className='main1'>
        <h1 className='Heading'>Website Maintenance  Services With 100% Website Care and Support</h1>
        <p className='heading2'>Let our Experts take care of your website so that you can  focus on your business.</p>
        <div className='facility'>
            <div>
                <p className='HeadPara'><TiTick className='TiTick'/> Fast Website Loading</p>
                <p className='HeadPara'><TiTick className='TiTick'/> Content Edits Support </p>
                <p className='HeadPara'><TiTick className='TiTick'/> Monthly Preventive <br/> &nbsp;&nbsp;&nbsp;&nbsp; Activities</p>
            </div>
            <div>
                <p className='HeadPara'><TiTick className='TiTick'/> Unlimited Tech Support</p>
                <p className='HeadPara'><TiTick className='TiTick'/> 24×7 Website Monitoring</p>
                <p className='HeadPara'><TiTick className='TiTick'/> Security Optimization</p>
            </div>
            
        </div>
        
        <div className='Button'>
            <div>
                <button className='quote'>Get a Quote</button>
            </div>
            <div>
                <button className='explore'>Explore Packages</button>
            </div>
        </div>
    </div>
    <div className='img'>
        <img className='img1'src={image} alt="" />
    </div>
    </div>
  )
}

export default Header