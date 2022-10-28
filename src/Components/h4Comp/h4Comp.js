
import './style.scss'

function H4Comp(props){
  return(
    <div className='h4d1'>
        <div className='h4imgdiv'>
            <img src={props.src} className='h4d1img1' />
            <div className='h4imgdiv-1'>
                <div className='h4iconsdiv'>
                 <button className='h4icon1 icon-facebook'></button>
                 <button className='h4icon1 icon-twitter'></button>
                 <button className='h4icon1 icon-instagram'></button>
                 <button className='h4icon1 icon-linkedin2'></button>
                </div>
            </div>
        </div>
        <div className='h4textdiv'>
            <a className='h4p1' href=''>{props.text1}</a>
            <p className='h4p2'>{props.text2}</p>
        </div>
        <div className='h4d1bottomDiv'>

        </div>
    </div>
  )
}

export default H4Comp