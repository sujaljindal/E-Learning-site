import React from 'react'
import card1 from '../../../assets/Group 71.png'
import './Features.css'
import ellipse from '../../../assets/Ellipse 24.png'
import windowimg from '../../../assets/Group 72.png'
import windowbox from '../../../assets/Group 73.png'
import users from '../../../assets/users 2.png'
import girl1 from '../../../assets/Group 122.png'
import feature3 from '../../../assets/Group 92.png'
import grade from '../../../assets/Group 124.png'
import discussion from '../../../assets/Group 106.png'

const Features = () => {
  return (
    <div className='features'>
        <h1>Our <span>Features</span></h1>
        <p>This very extraordinary feature, can make learning activities more efficient</p>
        <div className="featuregrid1">
            <div className="gridcard1">
            <img src={card1} alt="" />
            </div>
            <div className="gridcard1">
                <h1>A <span>user interface</span> deisgned for the classroom</h1>
                <div className='content'>
                    <img src={windowimg} alt="" />
                    <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                    </p>
                </div>
                <div className='content'>
                    <img src={windowbox} alt="" />
                    <p>TA’s and presenters can be moved to the front of the class.
                    </p>
                </div>
                <div className='content'>
                    <img src={users} alt="" />
                    <p>Teachers can easily see all students and class data at one time.
                    </p>
                </div>
            </div>
            <div className="gridcard1" id='gridcard1'>
                <h1><span>Tools</span> For Teachers and Learners </h1>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                Teachers can handout assignments in real-time for students to complete and submit.</p>
            </div>
            <div className="gridcard1" >
                <img className="gridcard1img" src={girl1} alt="" />
            </div>
            
            <div className="gridcard1" >
                <img className="gridcard1img" src={feature3} alt="" />
            </div>

            <div className="gridcard1" id='gridcard1'>
                <h1>Assessments,<span>Quizzes</span>,Tests</h1>
                <p>Easily launch live assignments, quizzes, and tests.
                Student results are automatically entered in the online gradebook.</p>
            </div>

            <div className="gridcard1" id='gridcard1'>
                <h1><span>Class Management </span>Tools for Educators</h1>
                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                </p>
            </div>

            <div className="gridcard1" >
                <img className="gridcard1img" src={grade} alt="" />
            </div>

            <div className="gridcard1" >
                <img className="gridcard1img" src={discussion} alt="" />
            </div>
            <div className="gridcard1" id='gridcard1'>
                <h1>One-to-One<span> Discussions</span></h1>
                <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Features
