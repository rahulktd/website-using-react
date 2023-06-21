import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import dg from '../../../assets/img/dg.png'
import sd from '../../../assets/img/sd.png'
import hacker from '../../../assets/img/hacking.png'


function Courses() {
    const courseData = [
        {
        title:"AI Development",
        desc: "Master AI Development",
        img:ai
    },
    {
        title:"Digital Marketing",
        desc: "Master Digital Marketing",
        img:dg
    },{
        title:"Cyber Security",
        desc: "Master Cyber Security",
        img:hacker
    },{
        title:"Software Development",
        desc: "Master Software Development",
        img:sd
    }]
  return (
    <div className='container course-container'>

        <div className="course-top">
            <h2 className="section-title">Free Courses</h2>
            <p>With certificate................</p>

            <div className="course-wrapper">
{
    courseData.map((courses,index)=>(
        <div className="course-item" key={index}>

                    <span className="course-icon">
                        <img src={courses.img} alt="" />
                    </span>
                    <div className="course-content">
                        <h4>{courses.title}</h4>
                        <p>{courses.desc}</p>
                    </div>

                </div>
    ))
}
                


            </div>

        </div>

    </div>
  )
}

export default Courses