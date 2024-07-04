import React, { useState } from 'react'
import './Page2.css'
import cost from '../assets/cost-icon.jpg'
import growth from '../assets/growth-icon.jpg'
import how from '../assets/how-icon.jpg'
import what from '../assets/what-icon.jpg'
import service from '../assets/services-icon.jpg'

const Page2 = () => {

  const [visibleDiv,setVisibleDiv] = useState('div1');
  const [clickedButton,setClickedButton] = useState('button1');
  const handleClick = (divId,buttonId)=>{
    setVisibleDiv(divId)
    setClickedButton(buttonId)
  }

  return (
    <>
    <div className='p2'>
      {/* <div className='heading1'>For All Your Web Maintenance Needs</div> */}
      <p className='heading'>We Are The Company You Can Trust On</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tempore obcaecati, voluptatem eius veritatis enim cumque. Iusto asperiores ad similique natus ratione ab porro itaque perferendis? Illum suscipit at magnam temporibus praesentium, ex autem harum quas? Nulla at esse beatae excepturi, alias illo optio amet sunt fuga eaque, quam quos. Delectus quis in, facilis unde aperiam corrupti iste? Quia, dolorem vero vitae minima iste, quod optio magni a omnis earum laborum corporis nulla quis non quisquam reiciendis eaque sapiente suscipit nam ab ea ipsa, veniam porro quidem! Nisi impedit eos cum est illum? Expedita, optio quia. Veritatis possimus ex tempore mollitia nisi voluptas magnam corrupti, earum enim expedita adipisci laudantium excepturi quasi ut labore ea temporibus ipsam consequuntur dignissimos debitis praesentium illum? Quod maiores aspernatur consequatur natus soluta accusantium beatae.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, pariatur id aliquam debitis ullam impedit distinctio quos eligendi ex fuga similique atque hic iure delectus explicabo porro nam unde sequi!</p>
    </div>

    <div className='p3'>
        {/* <p className='heading1'>Everything About</p> */}
        <p className='heading'>Website Maintenance Services</p>
        <p>A website maintenance service will help you keep your site up to date: keeping it functioning quickly and smoothly, safe from hackers and malware, and looking great. Depending on the type of business, and the size of the business, you may require a certain amount of maintenance work to be carried out on your website. This could be anything from adding new content to your website, updating your blog with new posts and pages, adding new products to your website, fixing broken links, making changes to the look and feel of your website, to uploading images or videos, and many more.</p>
        <p>There are many advantages to outsourcing your website maintenance work, such as; increased productivity, reduced costs due to not having to maintain in-house staff, access to many professional web designers with different skill sets, and varying prices for their services</p>
    </div>

    <div className='box'>
        <button className={`box2 ${clickedButton === 'button1' ? 'clicked':''}`} onClick={() => handleClick('div1','button1')}><img src={what} height={120} width={200}/><br /> What are website<br/> maintenance<br/> services?</button>
        <button className={`box2 ${clickedButton === 'button2' ? 'clicked':''}`} onClick={() => handleClick('div2','button2')}><img src={how} height={120} width={200}/><br />How does website<br/> maintenance<br/> work?</button>
        <button className={`box2 ${clickedButton === 'button3' ? 'clicked':''}`} onClick={() => handleClick('div3','button3')}><img src={growth} height={120} width={200}/><br />What are the <br/>benefits of website <br/>maintenance?</button>
        <button className={`box2 ${clickedButton === 'button4' ? 'clicked':''}`} onClick={() => handleClick('div4','button4')}><img src={service} height={120} width={200}/><br />What types of <br/>Maintenance <br/> are available?</button>
        <button className={`box2 ${clickedButton === 'button5' ? 'clicked':''}`} onClick={() => handleClick('div5','button5')}><img src={cost} height={120} width={200}/><br />How much does <br/>website <br/>maintenance cost?</button>
    </div>
    <div className='box768'>
        <button className={`box2-768 ${clickedButton === 'button1' ? 'clicked':''}`} onClick={() => handleClick('div1','button1')}><img src={what} height={60} width={70}/>What</button>
        <button className={`box2-768 ${clickedButton === 'button2' ? 'clicked':''}`} onClick={() => handleClick('div2','button2')}><img src={how} height={60} width={70}/>How</button>
        <button className={`box2-768 ${clickedButton === 'button3' ? 'clicked':''}`} onClick={() => handleClick('div3','button3')}><img src={growth} height={60} width={70}/>Benefits</button>
        <button className={`box2-768 ${clickedButton === 'button4' ? 'clicked':''}`} onClick={() => handleClick('div4','button4')}><img src={service} height={60} width={70}/>Types</button>
        <button className={`box2-768 ${clickedButton === 'button5' ? 'clicked':''}`} onClick={() => handleClick('div5','button5')}><img src={cost} height={60} width={70}/>Cost</button>
    </div>
    {visibleDiv === 'div1' && (
    <div className='maintenance'>
        <div className='mainten'>
            <p className='heading-mainten'>What are website maintenance services?</p>
            <p>Website maintenance is the process of making sure that your site stays up-to-date and running smoothly. It can include making minor changes or adding content, making it fast-loading as well as removing spam comments and other malicious code.</p>
            <p>A good maintenance plan covers everything from basic site updates to fixing big problems and makes sure that you never have to worry about being hacked or being unable to pay the cost of web hosts. It can also include other helpful features like domain name registration, email setup and forwarding, social media integration, and more.</p>
        </div>
    </div>
    )}

{visibleDiv === 'div2' && (
    <div className='maintenance'>
        <div className='mainten'>
            <p className='heading-mainten'>How does website maintenance work?</p>
            <p>Website maintenance is the process of keeping your website up-to-date and running smoothly for your visitors. The word "maintenance" is often confused with "updates," but there's a big difference between the two. Updates are what you do to make changes and add new features, while maintenance is what you do to keep things running smoothly.</p>
            <p>At any given time, there are a lot of moving parts that go into making sure your website is working properly web hosts, infrastructure, third-party integrations, security systems, and more. Website maintenance can include everything from checking the status of these different pieces on an ongoing basis to fixing problems as they arise to updating code or even replacing hardware when it becomes too outdated or worn down to function properly.</p>
        </div>
    </div>
    )}

{visibleDiv === 'div3' && (
    <div className='maintenance'>
        <div className='mainten'>
            <p className='heading-mainten'>What are the benefits of website maintenance?</p>
            <p>For a website owner, website maintenance has both short and long-term benefits. First, it ensures that the website is always online. This is particularly important for businesses as it is impossible to earn revenue from an offline website. Second, with regular maintenance, the website owner can avoid making major repairs on a site that does not function at all. This is extremely important for business owners who need their websites to attract customers and bring in revenue. Regularly scheduled maintenance also enables the site owner to foresee any problems that could arise and to act before they become serious issues.</p>
            <p>In addition to the practical reasons for maintaining a website, there are other reasons such as keeping up with technology or trends in web design. A business might want to redesign its website but only if it feels that redesigning the site will improve its effectiveness in attracting customers. Regular maintenance helps the site owner determine whether or not the time has come to hire a web designer or make changes to the existing site.</p>
        </div>
    </div>
    )}

{visibleDiv === 'div4' && (
    <div className='maintenance'>
        <div className='mainten'>
            <p className='heading-mainten'>What types of Maintenance Services are available?</p>
            <p>Maintenance plans can differ by the amount of care they offer for your site. They can range from simple updates like security patches to complete overhauls of your site such as a redesign with new content. The plan can also range in terms of how frequently it is implemented - some plans will provide an update every few months while other services offer daily updates.</p>
        </div>
    </div>
    )}

{visibleDiv === 'div5' && (
    <div className='maintenance'>
        <div className='mainten'>
            <p className='heading-mainten'>How much does website maintenance cost?</p>
            <p>That's a question that goes through the minds of many small business owners, and it's one we hear often. The answer to this question is that "it depends." What it depends on is what services you're paying for, how often they're needed, and who's going to be performing them. On average, website maintenance will cost in between $700-$1200 per year.</p>
        </div>
    </div>
    )}

    <div className='Quote'>
        <p className='QuoteHeading'>Let's Start A Web Maintenance Project Together</p>
        <p>You FREE quote is just a click away!</p>
        <div className='form'>
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
        <button className='started'>LET'S GET STARTED</button>
        </div>
        </div>
    </div>

    </>


  )
}

export default Page2
