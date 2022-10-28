import './style.scss'

function H5Comp(props){
  return(
    <div className='h5d1'>
        <div className='h5d1-1'>
            <img src={props.src} className='h5d1img1' />
            <div className='h5d1textdiv'>
                <a className='h5d1link1' href=''>{props.text1}</a>
                <p className='h5d1p1'>{props.text2}</p>
                <p className='h5d1p2'>
                    <span className='h5d1icon1 icon-facebook'></span>
                    <span className='h5d1icon1 icon-twitter'></span>
                    <span className='h5d1icon1 icon-instagram'></span>
                </p>
            </div>
        </div>
        <p className='h5d1p3'>
            {props.text3}
        </p>
    </div>
  )
}

export default H5Comp