import './style.scss'
import Header from '../../Components/header/header'
import H3Comp from '../../Components/aboutH3comp/h3Comp'
import H4Comp from '../../Components/h4Comp/h4Comp'
import H5Comp from '../../Components/h5scrollComp/h5ScrollComp'
import { useContext, useState } from 'react'
import H6Comp from '../../Components/h6innComp/h6innComp'
import { myContext } from '../../App'
function About(){


  const h3ValsArr = [
    {id : 1,icon : 'icon-star-empty',text1 : '3',text2 : 'Portrait Painting Awards'},
    {id : 2,icon : 'icon-sun',text1 : '5',text2 : 'Landscape Painting Awards'},
    {id : 3,icon : 'icon-flag',text1 : '9',text2 : 'Still Life Painting Awards'},
    {id : 4,icon : 'icon-bookmark',text1 : '4',text2 : 'Urban Art Painting Awards'},
  ]

  const h4ValsArr = [
    {id : 1,src : '/Images/h4Img1.jpg',text1 : 'James Brewer',text2 : 'Businessman, Intermediate Artist'},
    {id : 2,src : '/Images/h4Img2.jpg',text1 : 'Joe Wagner',text2 : 'Promoter, Beginner Artist'},
    {id : 3,src : '/Images/h4Img3.jpg',text1 : 'Charles Owens',text2 : 'Designer, Advanced Artist'},
    {id : 4,src : '/Images/h4Img4.jpg',text1 : 'Laura Jordan',text2 : 'Model, Intermediate Artist'},
  ]


  const h5ValsArr = [
    {id : 1,src : '/Images/h5Img1.jpg',text1 : 'Matthew Perkins',text2 : 'Entrepreneur',text3 : 'My sweetheart loved the portrait! You not only captured my image so well but unveiled and projected my feelings and thoughts through it. The depth of your work is really impressive. You are the best and I will recommend you and your services to all my friends! Thank you very much.'},
    {id : 2,src : '/Images/h5Img2.jpg',text1 : 'Elizabeth Johnson',text2 : 'Sales manager',text3 : 'Youre a gifted and masterful artist who is able to capture the essence of people with such depth and accuracy, and at the same time weave in the intricacies of a beautifully composed grand work of art. Each of your pieces is unique, yet identifiably bears your signature style. Thank you!'},
    {id : 3,src : '/Images/h5Img3.jpg',text1 : 'Walter Knight',text2 : 'Photo studio owner',text3 : 'The Blue Sea painting I received from you is so beautiful and perfect in every way. The lusciousness of the colors pops off the surface. I am in love with it. It is even better in person and all my visitors and guests admire your work. I know I will be a returning customer and I will recommend you to my colleagues.'},
    {id : 4,src : '/Images/h5Img1.jpg',text1 : 'Matthew Perkins',text2 : 'Entrepreneur',text3 : 'My sweetheart loved the portrait! You not only captured my image so well but unveiled and projected my feelings and thoughts through it. The depth of your work is really impressive. You are the best and I will recommend you and your services to all my friends! Thank you very much.'},
    {id : 5,src : '/Images/h5Img2.jpg',text1 : 'Elizabeth Johnson',text2 : 'Sales manager',text3 : 'Youre a gifted and masterful artist who is able to capture the essence of people with such depth and accuracy, and at the same time weave in the intricacies of a beautifully composed grand work of art. Each of your pieces is unique, yet identifiably bears your signature style. Thank you!'},
    {id : 6,src : '/Images/h5Img3.jpg',text1 : 'Walter Knight',text2 : 'Photo studio owner',text3 : 'The Blue Sea painting I received from you is so beautiful and perfect in every way. The lusciousness of the colors pops off the surface. I am in love with it. It is even better in person and all my visitors and guests admire your work. I know I will be a returning customer and I will recommend you to my colleagues.'},
    {id : 7,src : '/Images/h5Img1.jpg',text1 : 'Matthew Perkins',text2 : 'Entrepreneur',text3 : 'My sweetheart loved the portrait! You not only captured my image so well but unveiled and projected my feelings and thoughts through it. The depth of your work is really impressive. You are the best and I will recommend you and your services to all my friends! Thank you very much.'},
    {id : 8,src : '/Images/h5Img2.jpg',text1 : 'Elizabeth Johnson',text2 : 'Sales manager',text3 : 'Youre a gifted and masterful artist who is able to capture the essence of people with such depth and accuracy, and at the same time weave in the intricacies of a beautifully composed grand work of art. Each of your pieces is unique, yet identifiably bears your signature style. Thank you!'},
    {id : 9,src : '/Images/h5Img3.jpg',text1 : 'Walter Knight',text2 : 'Photo studio owner',text3 : 'The Blue Sea painting I received from you is so beautiful and perfect in every way. The lusciousness of the colors pops off the surface. I am in love with it. It is even better in person and all my visitors and guests admire your work. I know I will be a returning customer and I will recommend you to my colleagues.'},
  ]

  let [h5scrollDivVal,setH5ScrollDivVal] = useState(0)
  let [h5btn1color,setH5btn1color] = useState('#f0a951')
  let [h5btn2color,setH5btn2color] = useState('white')
  let [h5btn3color,setH5btn3color] = useState('white')


  const h6ValsArr = [
    {id : 1,src : '/Images/h6compImg1.jpg',text1 : 'Artists are Entrepreneurs: Your Art is Your Business'},
    {id : 2,src : '/Images/h6compImg2.jpg',text1 : '10 Things Every Artist Should Do Before 10 A.M.'},
    {id : 3,src : '/Images/h6compImg3.jpg',text1 : 'How Collectors Shape Contemporary Art History'}
  ]

  const likeContext = useContext(myContext)

   let likes = likeContext.likes
   let setLikes = likeContext.setLikes



  return(<>
      <Header likes = {likes} />
      <div className='G-center'>
        <div className='h1' style={{backgroundImage : `url('/Images/aboutbackImg1.jpg')`}}>
          <div className='h1-1'>
            <h1 className='h1ver1'>About Me</h1>
            <p className='h1p1'>
              <span className='h1sp1'>Home</span>
              <span className='h1sp2 icon-arrow-right2'></span>
              <span className='h1sp3'>About Me</span>
             </p>
          </div>
        </div>
      </div>

      <div className='G-center'>
        <div className='h2'>
          <div className='h2d1'>
          <iframe width="870" height="489" src="https://www.youtube.com/embed/LN820hIQ17Q"></iframe>
          </div>
          <div className='h2d2'>
            <h1 className='h2ver1'>A Few Words About Me</h1>
            <p className='h2p1'>
            My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations.
            </p>
            <p className='h2p2'>
            I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you. It has so much effect on one’s emotion, more than a person can affect another by words or action. besides painting, I also share my skills and knowledge with beginner artists during my annual painting courses.
            </p>

            <button className='h2btn1 G-mainBtn'>
                            <span className='btn2Hov1 G-spnBtnHov1'></span>
                            <span className='btn2Hov1 G-spnBtnHov2'></span>
                            <span className='btn2Hov1 G-spnBtnHov3'></span>
                            <span className='btn2Hov1 G-spnBtnHov4'></span>
                   <span className='G-posSp1'> View All Services</span>
                </button>
          </div>
        </div>
      </div>

      <div className='G-center'>
        <div className='h3'>
          <h1 className='h3ver1'>My Awards </h1>
          <div className='G-center'>
            <p className='h3p1'>
            As a widely known and highly experienced artist, I have been awarded for a unique approach that I use in creating paintings of various genres, from landscape to still life.
            </p>
          </div>
          <div className='h3-1'>
            {h3ValsArr.map((elm) => {
              return <H3Comp key = {elm.id} icon = {elm.icon} text1 = {elm.text1} text2 = {elm.text2} />
            })}
          </div>
        </div>
      </div>

      <div className='h4'>
         {
          h4ValsArr.map((elm) => {
            return <H4Comp key = {elm.id} src = {elm.src} text1 = {elm.text1} text2 = {elm.text2} />
          })
         }
      </div>
      <div className='h5'>
      <h1 className='h3ver1'>Testimonials</h1>
      <div className='G-center'>
        <div className='h5scrollDivParent'>
          <div className='h5scrollDiv' style={{transform : `translateX(-${h5scrollDivVal}%)`}}>
               {
                h5ValsArr.map((elm) => {
                  return <H5Comp key = {elm.id} src = {elm.src} text1 = {elm.text1} text2 = {elm.text2} text3 = {elm.text3}  />
                })
               }
          </div>
        </div>
      </div>
      <div className='G-center'>
        <button className='h5btn1' style={{backgroundColor : `${h5btn1color}`}} onClick={() => {
          setH5ScrollDivVal(0)
          setH5btn1color('#f0a951')
          setH5btn2color('white')
          setH5btn3color('white')
        }}></button>
        <button className='h5btn1' style={{backgroundColor : `${h5btn2color}`}} onClick={() => {
          setH5ScrollDivVal(33.3333333)
          setH5btn2color('#f0a951')
          setH5btn1color('white')
          setH5btn3color('white')
        }}></button>
        <button className='h5btn1' style={{backgroundColor : `${h5btn3color}`}} onClick={() => {
          setH5ScrollDivVal(66.6666666)
          setH5btn3color('#f0a951')
          setH5btn2color('white')
          setH5btn1color('white')
        }}></button>
      </div>
      </div>

      <div className='h6'>
        <div className='h6-1'>
          <div className='h6-1d1'>
            <h1 className='h6ver1'>About</h1>
            <p className='h6p1'>
            My name is Samantha Morgan and I am a professional fine artist. I create paintings in various genres including portraits, still lifes, urban paintings, and more. My works will bring more colors to your life. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.
            </p>
          </div>
          <div className='h6-1d1'>
          <h1 className='h6ver1'>Latest Blog Posts</h1>
          {
            h6ValsArr.map((elm) => {
              return <H6Comp key = {elm.id} src = {elm.src} text1 = {elm.text1} />
            })
          }
          </div>
          <div className='h6-1d1'>
          <h1 className='h6ver1'>Gallery</h1>
          <div className='h6imgdiv'>
           <img src='/Images/h6Img1.jpg' className='h6img1' />
           <img src='/Images/h6Img2.jpg' className='h6img1' />
           <img src='/Images/h6Img3.jpg' className='h6img1' />
           <img src='/Images/h6Img4.jpg' className='h6img1' />
           <img src='/Images/h6Img5.jpg' className='h6img1' />
           <img src='/Images/h6Img6.jpg' className='h6img1' />
          </div>
          </div>
        </div>
      </div>
      </>  
  )
}

export default About