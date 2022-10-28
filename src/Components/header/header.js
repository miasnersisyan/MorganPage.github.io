import './style.scss'
import W2d1hov from '../../Components/w2d1hover/w2d1hov'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props){


    const aboutArr = ['Testimonials','My Students']
    const servicesArr = ['Portrait','Landscape','Still Life','Urban Paintings','Street Artist Services']
    const pagesArr = [
        ['Typography','Tabs and accordions','Progress bars','Forms','Tables','Grid','Buttons'],
        ['404 page','503 page','Coming soon','Under Construction','Site map','Terms of use','Search Results'],
        ['Grid Gallery','Masonry Gallery','Cobbles Gallery','Grid without padding Gallery']
    ]
    const blogArr = ['Classic Blog','Grid Blog','Masonry Blog','Modern Blog','Single Post']


    let [w2Class,setW2Class] = useState('w2')

    window.onscroll = function(){
     if(window.scrollY > 150){
         setW2Class('w2change')
     }else{
         setW2Class('w2')
     }
    }

    let [borderColorH,setBorderColorH] = useState('#f0a951')
    let [borderColorA,setBorderColoA] = useState('white')

    let likesStore = localStorage.getItem('likesList')
    


  return(
    <div className={w2Class}>
            <div className='w2d1 w2home' style={{borderBottom : `3px solid ${borderColorH}`}}><Link to='/' onClick={() => {
                setBorderColorH('#f0a951')
                setBorderColoA('white')
            }} className='w2d1sp1'>HOME</Link></div>
            <div className='w2d1' style={{borderBottom : `3px solid ${borderColorA}`}}><Link to='/About'  onClick={() => {
                setBorderColorH('white')
                setBorderColoA('#f0a951')
            }} className='w2d1sp1'>ABOUT</Link><span className='icon-ctrl'></span>
            <div className='w2d1posDiv'>
              <W2d1hov valsArr={aboutArr} />
            </div> 
            </div>
            <div className='w2d1'><span className='w2d1sp1'>SERVICES</span><span className='icon-ctrl'></span>
            <div className='w2d1posDiv'>
              <W2d1hov valsArr={servicesArr} />
            </div> 
            </div>
            <div className='w2d1'><span className='w2d1sp1'>PAGES</span><span className='icon-ctrl'></span>
            <div className='w2d1posDiv  w2d1posDivpages'>
            {pagesArr.map((elm) => {
             return  <W2d1hov valsArr={elm} />
            })}  
            </div> 
            </div>
            <div className='w2d1'><span className='w2d1sp1'>BLOG</span><span className='icon-ctrl'></span>
            <div className='w2d1posDiv'>
              <W2d1hov valsArr={blogArr} />
            </div> 
            </div>
            <div className='w2d1'><span className='w2d1sp1'>CONTACTS</span></div>
           <span className='likesSp1'>Your Likes - {props.likes}</span>
        </div>
  )
}

export default Header