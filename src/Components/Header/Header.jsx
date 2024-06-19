import React from 'react'
import './Header.css'
import { TiTick } from "react-icons/ti";
import image from '../assets/maintenance.jpg'

const Header = () => {
  return (
    <div className='main'>
    <div className='main1'>
        <h2 className='Heading'>Website Maintenance <br/>Services With 100% <br/>Website Care and <br/>Support</h2>
        <p className='heading2'>Let our Experts take care of your website so that you can <br/> focus on your business.</p>
        <div className='facility'>
            <div>
                <p><TiTick /> Fast Website Loading</p>
                <p><TiTick /> Content Edits Support </p>
                <p><TiTick /> Monthly Preventive <br/> &nbsp;&nbsp;&nbsp;&nbsp; Activities</p>
            </div>
            <div>
                <p><TiTick /> Unlimited Tech Support</p>
                <p><TiTick /> 24×7 Website Monitoring</p>
                <p><TiTick /> Security Optimization</p>
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