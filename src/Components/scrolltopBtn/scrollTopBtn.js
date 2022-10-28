import { useEffect, useState } from 'react'
import './style.scss'

function ToTopBtn(){

    let [btnOpacity,setBtnOpacity] = useState(0)

    window.onscroll = function(){
        if(window.scrollY < 250){
            setBtnOpacity(0)
        }else{
            setBtnOpacity(1)
        }
    }

    


   return(
    <button className='scrollBtn icon-arrow-up2' style={{opacity : `${btnOpacity}`}} ></button>
   )
}

export default ToTopBtn