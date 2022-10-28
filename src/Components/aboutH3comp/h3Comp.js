import './style.scss'

function H3Comp(props){
  return(
    <div className='h3d1'>
        <p className='h3d1p1'><span className={props.icon}></span></p>
        <p className='h3d1p2'>{props.text1}</p>
        <p className='h3d1p3'>{props.text2}</p>
    </div>
  )
}

export default H3Comp