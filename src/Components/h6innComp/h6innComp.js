import './style.scss'

function H6Comp(props){
    return(
        <div className='h6box1'>
         <img src={props.src} className='h6box1img1' />
         <div className='h6box-1'>
            <a className='h6box1link1' href=''>{props.text1}</a>
            <p className='h6box1p1'>Dec 19, 2020 at 5:31 pm</p>
         </div>
        </div>
    )
}

export default H6Comp