import React from 'react'
import faculty from '../../../assets/Rectangle 19.png'
import students from '../../../assets/Rectangle 21.png'
import './Home1.css'

const Home1 = () => {
  return (
    <div className='what'>
      <h1 className='head'>What is <span>TOTC?</span></h1>
      <p className='ParaTOTC'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
      <div className="gridbox">
        <div className="boxes1">
            <div className='text-overlay'>
                <h2>FOR INSTRUCTORS</h2>
            </div>
            <img src={faculty} alt="" />
           
            
        </div>
        <div className="boxes1">
            <div className='text-overlay'>
                <h2>FOR STUDENTS</h2>

            </div>
            <img src={students} alt="" />
        </div>
      </div>
      <div className="gridcontent">
        <div className="learn">
            <h2>Everything you can do in a physical classroom, <span>you can do with TOTC</span></h2>
            <p>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
        </div>
        <div className="learnvideo">
            {/* <h1>hello</h1> */}
            <iframe src="https://www.youtube.com/embed/x2gl4KwUIV8?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&index=53"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>

        </div>
      </div>
    </div>
  )
}

export default Home1
