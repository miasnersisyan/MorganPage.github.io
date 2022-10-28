import './style.scss'

function W2d1hov(props){
  
    const valsArr = props.valsArr
  return(
    <ul className='w2d1hoverDiv'>
      {valsArr.map((val) => {
      return   <li className='w2d1hovsp1'><span className='icon-arrow-right2 w2d1hovsp2'></span>{val}</li>
      })} 
    </ul>
  )
}


export default W2d1hov