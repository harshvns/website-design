import React from 'react'
import './Page3.css'
import { TiTick } from "react-icons/ti";
import Performance from '../assets/performance.png'
import Fixes from '../assets/fixesEnhancement.png'
import Content from '../assets/contentBackup.png'
import Funtionality from '../assets/functionality.png'
import Tech from '../assets/supportTech.png'
import Hack from '../assets/hackAndVirusProof.jpeg'
import Mobile from '../assets/mobile.png'
import Increase from '../assets/increaseConversion.png'
import Clarity from '../assets/clarity.png'
// import {Container} from 'react-boorstrap'

const Page3 = () => {
  return (
    <div className='Page3'>
        <p className='headingP31'>The Nine Pillars of Our</p>
        <p className='headingP3'>Web Maintenance Services</p>
        <div className='container'>
            <div className='box4'>
                <img className='boximg' width={100} height={100} src={Performance} alt="" />
                <p className='box-heading'>Performance Checkup</p>
                <p>Our intensive maintenance checklist ensures your website performance at its best. All the performance monitoring activities are scheduled through our automated CRM system. Through our CRM system, you will get a detailed reports on a monthly basis.</p>
            </div>
            <div className='box4'>
                <img className='boximg' width={100} height={100} src={Fixes} alt="" />
            <p className='box-heading'>Fixes and Enhancement</p>
            <p>To make your website bug free, we do regular bug fixes , website health checkups, and improvements. Our dedicated team takes care of any issue that arises through third-party plugins or by the core itself. Your issue would be resolved at the highest priority.</p>

            </div>
            <div className='box4'>
                <img className='boximg' width={100} height={100} src={Content} alt="" />
            <p className='box-heading'>Content and Backup</p>
            <p>The advantage of our maintenance program is that you can add, edit and update content as and when needed. We take a full website backup prior to any major update. If it is needed, the backup can be on-demand by the client. This will transition your website from a poor user experience to much smoother and better user experience.</p>

            </div>
            <div className='box4'>
                <img className='boximg' width={100} height={100}  src={Funtionality} alt="" />
                <p className='box-heading'>Functionality Check</p>
                <p>We check whether all forms are working properly and whether inquiry emails are getting received. We also check for any broken links on the website and rectify it. Broken links are a bad sign for SEO, hence it helps to keep your SEO health score high.</p>
            </div>
            <div className='box4'>
                <img className='boximg' width={100} height={100}  src={Tech} alt="" />
                <p className='box-heading'>Tech Support</p>
                <p>Our technical support team will constantly update you via our auto ticket management system. Also, our support team connects through calls or email as required. Through all the mediums, we ensure that the majority of tickets get resolved in 24-48 hours.</p>
            </div>
            <div className='box4'>
                <img className='boximg' width={100} height={100}  src={Hack} alt="" />
                <p className='box-heading'>Hack & Virus Proof</p>
                <p>Our Security implementations prevent and protect from hacking, malware, and viruses. In any disgraced situation of hack or malware, our team takes it on most priority to resolve the issue. And we'll keep in sync with you unless it is 100% hack free.</p>
            </div>
            <div className='box4'>
                <img className='boximg' width={100} height={100}  src={Mobile} alt="" />
                <p className='box-heading'>Mobile & Browser Optimization</p>
                <p>We guarantee that you won't be penalized for not having a fully responsive website. If a section is not responsive, we address it so that it is.</p>
            </div>
            <div className='box4'>
                <img className='boximg' width={100} height={100}  src={Increase} alt="" />
                <p className='box-heading'>Increase Conversion Rate</p>
                <p>Our expertly-engineered Web Case service will boost your conversion rate by ensuring that everything works smoothly and efficiently.</p>
            </div>
            {/* <div className='box4'>
                <img className='boximg' width={100} height={100}  src={Clarity} alt="" />
                <p className='box-heading'>Clarity of Deliverability</p>
                <p>We make sure that you are getting what you pay for and that you are satisfied with the service we provide. We also make sure that you are kept up to date on the work we are doing on your site.</p>
            </div> */}
        </div>
        <div className='BoxButton'>
        <button className='boxButton'>MAINTAIN MY WEBSITE TODAY</button>
        </div>

    </div>
  )
}

export default Page3