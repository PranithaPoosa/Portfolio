import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <div style={{ height: '-webkit-fill-available', width: '100%', overflow:'scroll', backgroundImage: 'url(/assets/bg2.jpg)'}}>
            <h1>Hey, I'm Mani Deepak Reddy Aila</h1>
            <h3>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</h3>
            <Link to="/projects">
                <button type="button">
                    PROJECTS
                </button>
            </Link>
        </div>
        <div>
            <h1>
                About
            </h1>
        </div>
    </div>
  )
}

export default HomePage
