import React from 'react' 
import NavBar from '../NavBar/NavBar'
import './Home.css'
import video from '../../assets/Group 4.png'
import girl from '../../assets/girl.png'
import box from '../../assets/Group 451.png'
import note from '../../assets/Group 79.png'
import schedule from '../../assets/Group 80.png'
import people from '../../assets/Group 81.png'
import Home1 from './Home1/Home1'
import Features from './Features/Features'


const Home = () => {
  return (
    <div>
      <div className="first">
        <div className="left">
          <h1><span className='head'>Studying</span> Online is now much easier</h1>
          <p className='para'>TOTC is an interesting platform that will teach you in more an interactive way</p>
          <div className='btns'>
              <button className='btn1'>Join for free</button>
              
              <button clasName='btn2'></button>
          </div>      
          
          
        </div>
        <div className="right">
          <img className="girl" src={girl} alt="" />
          <img  className="box" src={box} alt="" />
        </div>
      </div>
      <div className="success">
        <h1>Our Success</h1>
        <p className='successpara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum impedit magnam distinctio cupiditate voluptate doloribus ullam, accusamus perferendis sit quas odio sunt expedita tenetur, repellat architecto itaque officia obcaecati molestiae.</p>
        <div className="successshow">
          <div className="detail"><span className="details">15K+</span>Students</div>
          <div className="detail"><span className="details">75%</span>Total success</div>
          <div className="detail"><span className="details">35</span>Main questions</div>
          <div className="detail"><span className="details">26</span>Cheif experts</div>
          <div className="detail"><span className="details">16</span>Years of experience</div>
        </div>
        <h1 className='heading2'>All-In-One <span className='span2'>Cloud Software.</span></h1>
        <p className='para2'>TOTC is one powerful online software suite that combines all the tools needed to run a succesful school or office.</p>
        <div className="boxes">
          <div className="boxesitem">
            <img className="boximg" src={note} alt="" />
            <h3>Online Billing, Invoicing, & Contracts</h3>
            <p>Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.</p>
          </div>
          <div className="boxesitem">
            <img className="boximg" src={schedule} alt="" />
            <h3>Easy Scheduling & Attendance Tracking</h3>
            <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.</p>
          </div>
          <div className="boxesitem">
            <img className="boximg" src={people} alt="" />
            <h3>Customer Tracking</h3>
            <p>Automate and track emails to individuals or groups. Slilline's built-in system helps organize your organization.</p>
          </div>
        </div>
        <div className='continue'>
          <Home1></Home1>
        </div>
        <div className="featurecontainer">
          <Features></Features>
        </div>
        
      </div>
    </div>
  )
}

export default Home
