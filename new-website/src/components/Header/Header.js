import React from 'react'
import './Header.css'
import logo from '../../assets/img/1.png'
import { Link } from 'react-router-dom'

function Header() {

    const nav_titles =[{
        path:'/',display:'Home'
    },
    {
        path:'/services',display:'Services'
    },
    {
        path:'/courses',display:'Courses'
    },
    {
        path:'/about',display:'About Us'
    }
]
  return (
    <header className='header'>

        <div className="container">

            <div className="nav_container">

                <div className="logo">

                    <div className="logo-img">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <Link to='/'><h2>WEBSITE</h2></Link>

                </div>

                <div className="navigation">
                    <ul className='menu'>
                        {
                            nav_titles.map((item)=>(
                                <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
                            ))
                        }
                        
                        
                    </ul>
                </div>

            </div>



        </div>

    </header>
  )
}

export default Header