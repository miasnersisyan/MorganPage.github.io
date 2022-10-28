import './style.scss'

function W7Comp(props){
  return(
    <div className='w7d1' style={{backgroundImage : `url(${props.backImg})`}}>
        <div className='w7d1-1'>
            <img src={props.img1} className='w7d1img1'  />
            <div className='w7textdivparent'>
            <p className='w7p1'>{props.text1}</p>
            <a href='' className='w7link1'>{props.text2}</a>
            
                <p className='w7p2'>
                {props.text3}
                </p>
           
            </div>
        </div>
        <div className='w7d1backdiv'></div>
    </div>
  )
}

export default W7Comp