import React, { useState } from 'react'
import './Page5.css'
import { TiTick } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";

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
        <p className='headingp5'>Website Maintenance Packages</p>
        <div className='container5'>
            <div className='box5'>
                <p className='P5'>Bronze
                <div className='quotebtnp5'><button className='quotep5'>Get Quote</button></div>
                </p>
                <p className='price'>250 USD/15000 INR</p>
                <p className='duration'>Yearly</p>
                <p className='timing'>2 Hours Monthly</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Monthly backup Offline</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Monthly Scanning</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Disaster Recovery</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain & Hosting Support</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> SSL Certificate Monitoring</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain Expiration Alert</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Google Analytics Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Search Console Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Webmail Supports</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> WP Core & plugins update</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> New Page Creation</p>
            </div>
            <div className='box5'>
                <p className='P5'>Silver
                <div className='quotebtnp5'><button className='quotep5'>Get Quote</button></div>
                </p>
                <p className='price'>350 USD/22000 INR</p>
                <p className='duration'>Yearly</p>
                <p className='timing'>5 Hours Monthly</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Two off-site backup Monthly</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Monthly Scanning</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Broken link check & fix</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Disaster Recovery</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain & Hosting Support</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> SSL Certificate Monitoring</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain Expiration Alert</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Basic website updates</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Google Analytics Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Search Console Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Webmail Supports</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> WP Core & plugins update</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> New Page Creation</p>
                </div>
            <div className='box5'>
                <p className='P5'>Gold
                <div className='quotebtnp5'><button className='quotep5'>Get Quote</button></div>
                </p>
                <p className='price'>500 USD/40000 INR</p>
                <p className='duration'>Yearly</p>
                <p className='timing'>7 Hours Monthly</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Monthly Offline Backup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Monthly Security Scanning</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Broken link check & fix</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Disaster Recovery</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain & Hosting Support</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> SSL Certificate Monitoring</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain Expiration Alert</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Basic website updates</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Google Analytics Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Search Console Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Webmail Supports</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> WP Core & plugins update</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> New Page Creation</p>
                </div>
            <div className='box5'>
                <div className='P5'>Platinum
                <div className='quotebtnp5'><button className='quotep5'>Get Quote</button></div>
                </div>
                <p className='price'>700 USD/55000 INR</p>
                <p className='duration'>Yearly</p>
                <p className='timing'>15 Hours Monthly</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Monthly Backup Offline</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Website Performance Monitoring</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Disaster Recovery</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain & Hosting Support</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Broken link check & fix</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> SSL Certificate Monitoring</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Domain Expiration Alert</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Basic website updates</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Webmail Supports</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Google Analytics Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Search Console Setup</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> WP Core & plugins update</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> Malware scanning</p>
                <p className='checklist5'><FaCheckCircle color='#3b7fbf' size={14}/> New Page Creation</p>
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
                    <td>CDN Implentation</td>
                    <td>Addon</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Staging Environment</td>
                    <td>Addon</td>
                    <td>Addon</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Customization Support</td>
                    <td>Addon</td>
                    <td>Addon</td>
                    <td>Basic</td>
                    <td>Basic</td>
                  </tr>
                  <tr>
                    <td>Onboarding Setup & Integrations</td>
                  </tr>
                  <tr>
                    <td>Customer Onboarding</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Auto Backup Configuration</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>First Website Full Backup</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Google Analytics Setup</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Search Console Setup</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Domain & SSL Monitoring Setup</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Staging Environment Creation</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Website Uptime Monitoring Setup</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>Onboarding Speed Optimization</tr>
                  <tr>
                    <td>Image Optimization</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Database Optimization</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Code Optimization</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Caching Implementation</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>CDN Implementation</td>
                    <td>Addon</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>Onboarding Security Optimization</tr>
                  <tr>
                    <td>Anti-Hack Systems Implementation</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Bot Protection</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Spam Protection</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Virus & Malware Scanning</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>Monthly Preventive Checklist</tr>
                  <tr>
                    <td>WP Core & Plugins Update</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Monthly Theme Upgrade</td>
                    <td>Addon</td>
                    <td>Addon</td>
                    <td>Addon</td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Website Full Backup</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Website Speed Check & Optimize</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Database Optimization</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Clean Log & Spam Comments</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Enquiry Form Process Check</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Broken Link Check & Fix</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Website Security Check & Enhance</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Advance Malware Scanning</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>SSL Certificate Expiry Check</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>Online Support System</tr>
                  <tr>
                    <td>Support Request via Client Portal, Mobile App</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Communication via Google Meet/Zoom</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>24/7 Support Ticket Coverage</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>5+ Detailed Monthly Reports</tr>
                  <tr>
                    <td>Activity Report</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Support Request Report</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Website Traffic Report</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>WordPress Web Care Report</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Website Uptime Report</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Website Difficulties with Expert Suggestion</td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                    <td><TiTick/></td>
                  </tr>
                  <tr>
                    <td>Performance Report</td>
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

{/* 
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
        
        </div> */}
    </div>
  )
}

export default Page5
