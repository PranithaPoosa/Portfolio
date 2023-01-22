import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <div style={{ display: 'flex', justifyContent:'space-evenly',height: '-webkit-fill-available', width: '100%', backgroundColor: '#f9f9ff', alignItems: 'center'}}>
            <div style={{padding: '8%'}}>
                <h1>Hey, I'm Mani Deepak Reddy Aila</h1>
                <h3>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</h3>
                <Link to="/projects">
                    <button type="button">
                        PROJECTS
                    </button>
                </Link>
            </div>
            <div style={{padding: '10%'}}>
                <img src='/assets/self.jpg'/>
            </div>
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
