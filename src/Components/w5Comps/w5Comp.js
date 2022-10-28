import { useState } from 'react'
import './style.scss'

function W5Comp(props){

    let [likeVal,setLikeVal] = useState(false)
    let [iconColor,setIconColor] = useState('red')



    
  return(
    <div className='w5d1'>
        <span className='icon-heart iconLike' style={{color : `${iconColor}`}} onClick={() => {
            if(!likeVal){
                props.changeLikes(props.likes + 1)
                setIconColor('blue')
                setLikeVal(true)
               localStorage.setItem('likesList',props.likes + 1)
            }else{
                props.changeLikes(props.likes - 1)
                setIconColor('red')
                setLikeVal(false)
                localStorage.setItem('likesList',props.likes - 1)
            }
          
        }}></span>
        <img src={props.src} className='w5d1img1' />
        <div className='w5d1textdiv'>
            <a href='' className='w5d1link1'>{props.text1}</a>
            <p className='w5d1p1'>{props.text2}</p>
        </div>
    </div>
  )
}

export default W5Comp