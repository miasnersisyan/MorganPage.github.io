import './style.scss'

function W6Comp(props){
  return(
    <div className='w6d1'>
        <div className='w6d1-1'>
            <p className='w6d1p'><span className={props.icon}></span></p>
            <p className='w6d1p1'>{props.text1}</p>
            <p className='w6d1p2'>{props.text2}</p>
        </div>
    </div>
  )
}


export default W6Comp