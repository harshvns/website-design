import React, { useState } from 'react'
import './Page5.css'
import { RxCrossCircled } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
const Page5 = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

  return (
    <div className='Page5'>
        <p className='headingp5'>Select one from our Specialized</p>
        <p className='headingp5'>Website Maintenance Packages</p>
        <div className='container5'>
            <div className='box5'>
                <p className='P5'>WP-Essential</p>
                <p>Essential Support for Your Wordpress Website</p>
                <button className='quotep5'>Get Quote</button>
                <p className='checklist5'><TiTick />&nbsp; 5 Monthly Website Edits</p>
                <p className='checklist5'><TiTick />&nbsp;Unlimited Standard Support</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Mothly Web Page Design</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Off-Site Backup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Security Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Basic Performance Tune</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Booster Bundle</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Performance Report</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Website Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Downtime/Restoration Support</p>
                <p className='checklist5'><TiTick />&nbsp;Domain & Hosting Support</p>
                <p className='checklist5'><TiTick />&nbsp;SSL Certificate Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Domain Expiration Alert</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Third-Party Comm. Support</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;CDN Implementation</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Staging Environment</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Customization Support</p>
                <p className='checklist5'><TiTick />&nbsp;Google Analytics Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Search Console Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Preventive Checklist</p>
                <p className='checklist5'><TiTick />&nbsp;WP Core & Plugins Update</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Mothly Theme Upgrade</p>
                <p className='checklist5'><TiTick />&nbsp;Broken Link Check & Fix</p>
                <p className='checklist5'><TiTick />&nbsp;Advance Malware Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Online Support System</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Support Ticket Coverage</p>
                <p className='checklist5'><TiTick />&nbsp;5+ Detailed Monthly Reports</p>
                <button className='quotep5'>Get Quote</button>
            </div>
            <div className='box5'>
                <p className='P5'>WP-Optimum</p>
                <p>Optimum Support for Your Wordpress Website</p>
                <button className='quotep5'>Get Quote</button>
                <p className='checklist5'><TiTick />&nbsp;5 Monthly Website Edits</p>
                <p className='checklist5'><TiTick />&nbsp;Unlimited Standard Support</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Mothly Web Page Design</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Off-Site Backup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Security Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Basic Performance Tune</p>
                <p className='checklist5'><TiTick />&nbsp;Booster Bundle</p>
                <p className='checklist5'><TiTick />&nbsp;Performance Report</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Website Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Downtime/Restoration Support</p>
                <p className='checklist5'><TiTick />&nbsp;Domain & Hosting Support</p>
                <p className='checklist5'><TiTick />&nbsp;SSL Certificate Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Domain Expiration Alert</p>
                <p className='checklist5'><TiTick />&nbsp;Third-Party Comm. Support</p>
                <p className='checklist5'><TiTick />&nbsp;CDN Implementation</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Staging Environment</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Customization Support</p>
                <p className='checklist5'><TiTick />&nbsp;Google Analytics Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Search Console Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Preventive Checklist</p>
                <p className='checklist5'><TiTick />&nbsp;WP Core & Plugins Update</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Mothly Theme Upgrade</p>
                <p className='checklist5'><TiTick />&nbsp;Broken Link Check & Fix</p>
                <p className='checklist5'><TiTick />&nbsp;Advance Malware Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Online Support System</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Support Ticket Coverage</p>
                <p className='checklist5'><TiTick />&nbsp;5+ Detailed Monthly Reports</p>
                <button className='quotep5'>Get Quote</button>
            </div>
            <div className='box5'>
                <p className='P5'>WP-Intense</p>
                <p>Intense Support for your Wordpress Website</p>
                <button className='quotep5'>Get Quote</button>
                <p className='checklist5'><TiTick />&nbsp;5 Monthly Website Edits</p>
                <p className='checklist5'><TiTick />&nbsp;Unlimited Standard Support</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Mothly Web Page Design</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Off-Site Backup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Security Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Basic Performance Tune</p>
                <p className='checklist5'><TiTick />&nbsp;Booster Bundle</p>
                <p className='checklist5'><TiTick />&nbsp;Performance Report</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Website Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Downtime/Restoration Support</p>
                <p className='checklist5'><TiTick />&nbsp;Domain & Hosting Support</p>
                <p className='checklist5'><TiTick />&nbsp;SSL Certificate Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Domain Expiration Alert</p>
                <p className='checklist5'><TiTick />&nbsp;Third-Party Comm. Support</p>
                <p className='checklist5'><TiTick />&nbsp;CDN Implementation</p>
                <p className='checklist5'><TiTick />&nbsp;Staging Environment</p>
                <p className='checklist5'><TiTick />&nbsp;Customization Support</p>
                <p className='checklist5'><TiTick />&nbsp;Google Analytics Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Search Console Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Preventive Checklist</p>
                <p className='checklist5'><TiTick />&nbsp;WP Core & Plugins Update</p>
                <p className='checklist5'><RxCrossCircled />&nbsp;Mothly Theme Upgrade</p>
                <p className='checklist5'><TiTick />&nbsp;Broken Link Check & Fix</p>
                <p className='checklist5'><TiTick />&nbsp;Advance Malware Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Online Support System</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Support Ticket Coverage</p>
                <p className='checklist5'><TiTick />&nbsp;5+ Detailed Monthly Reports</p>
                <button className='quotep5'>Get Quote</button>
            </div>
            <div className='box5'>
                <p className='P5'>WP-Managed</p>
                <p>Managed Support for Your Wordpress Website</p>
                <button className='quotep5'>Get Quote</button>
                <p className='checklist5'><TiTick />&nbsp;5 Monthly Website Edits</p>
                <p className='checklist5'><TiTick />&nbsp;Unlimited Standard Support</p>
                <p className='checklist5'><TiTick />&nbsp;Mothly Web Page Design</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Off-Site Backup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Security Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Basic Performance Tune</p>
                <p className='checklist5'><TiTick />&nbsp;Booster Bundle</p>
                <p className='checklist5'><TiTick />&nbsp;Performance Report</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Website Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Downtime/Restoration Support</p>
                <p className='checklist5'><TiTick />&nbsp;Domain & Hosting Support</p>
                <p className='checklist5'><TiTick />&nbsp;SSL Certificate Monitoring</p>
                <p className='checklist5'><TiTick />&nbsp;Domain Expiration Alert</p>
                <p className='checklist5'><TiTick />&nbsp;Third-Party Comm. Support</p>
                <p className='checklist5'><TiTick />&nbsp;CDN Implementation</p>
                <p className='checklist5'><TiTick />&nbsp;Staging Environment</p>
                <p className='checklist5'><TiTick />&nbsp;Customization Support</p>
                <p className='checklist5'><TiTick />&nbsp;Google Analytics Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Search Console Setup</p>
                <p className='checklist5'><TiTick />&nbsp;Monthly Preventive Checklist</p>
                <p className='checklist5'><TiTick />&nbsp;WP Core & Plugins Update</p>
                <p className='checklist5'><TiTick />&nbsp;Mothly Theme Upgrade</p>
                <p className='checklist5'><TiTick />&nbsp;Broken Link Check & Fix</p>
                <p className='checklist5'><TiTick />&nbsp;Advance Malware Scanning</p>
                <p className='checklist5'><TiTick />&nbsp;Online Support System</p>
                <p className='checklist5'><TiTick />&nbsp;24/7 Support Ticket Coverage</p>
                <p className='checklist5'><TiTick />&nbsp;5+ Detailed Monthly Reports</p>
                <button className='quotep5'>Get Quote</button>
            </div>
            
        </div >

            
        <div className="P5btn">
        <button className="P5button" onClick={openModal}>SEE FULL COMPARISON</button>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Main Features</th>
                    <th>WP-Essential</th>
                    <th>WP-Optimum</th>
                    <th>WP-Intense</th>
                    <th>WP-Managed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly Website Edits</td>
                    <td>5</td>
                    <td>10</td>
                    <td>15</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Standard Support</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Monthly Web Page Design</td>
                    <td>Addon</td>
                    <td>Addon</td>
                    <td>Addon</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Off-Site Backup</td>
                    <td>Monthly</td>
                    <td>Weekly</td>
                    <td>Daily</td>
                    <td>Daily</td>
                  </tr>
                  <tr>
                    <td>Security Scanning</td>
                    <td>Monthly</td>
                    <td>Weekly</td>
                    <td>Daily</td>
                    <td>Daily</td>
                  </tr>
                  <tr>
                    <td>Performance Tune</td>
                    <td>Basic</td>
                    <td>Advanced</td>
                    <td>Advanced</td>
                    <td>Advanced</td>
                  </tr>
                  <tr>
                    <td>Booster Bundle</td>
                    <td>Addon</td>
                    <td>Advanced</td>
                    <td>Advanced</td>
                    <td>Advanced</td>
                  </tr>
                  <tr>
                    <td>Performance Report</td>
                    <td>Addon</td>
                    <td>Monthly</td>
                    <td>Monthly</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td>24/7 Website Monitoring</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Downtime/Restoration  Support</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Domain & Hosting Support</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                  <td>SSL Certificate Monitoring</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>

                  </tr>
                  <tr>
                    <td>Domain Expiration Alert</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Third-Party Comm. Support</td>
                    <td>Addon</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Addon</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}


        <div className='P5BTN'>
        <div className='formP5'>
        <div>
        <input className='fill' type="text" placeholder='Name' />
        </div>
        <div>
        <input className='fill' type="text" placeholder='Email'/>
        </div>
        <div>
        <input className='fill' type="text" placeholder='Mobile No.'/>
        </div>
        <div>
        <input className='fill' type="text" placeholder='Website'/>
        </div>
        <div>
        <button className='started'>SUBMIT</button>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Page5
