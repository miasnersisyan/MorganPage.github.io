import './style.scss'


import { useContext, useEffect, useState } from 'react'
import W5Comp from '../../Components/w5Comps/w5Comp'
import { myContext } from '../../App'
import W6Comp from '../../Components/w6Comps/w6Comp'
import W7Comp from '../../Components/w7Comp/w7Comp'

import Header from '../../Components/header/header'


function Home(){
  
    


    let [divOpacity,setDivOpacity] = useState(0)
    let [divZindex,setDivZindex] = useState(-1)
    let [divTransform,setDivTransform] = useState(-40)
    let [divVal,setDivVal] = useState(false) 



    const w5CompsArr1 = [
        {id : 1,src : '/Images/w5img1.jpg',text1 : 'Sea Storm',text2 : 'This painting is one of my latest works on sea and ocean topics.'},
        {id : 2,src : '/Images/w5img4.jpg',text1 : 'Ruins of Ancient Fortress',text2 : 'When I’ve been to Scotland, I made this painting just in a day.'},
        {id : 3,src : '/Images/w5img7.jpg',text1 : 'Two Lovers',text2 : 'This work was finished in two days for my customers from San Diego, CA, who needed something special.'},
       
    ]

    const w5CompsArr2 = [
        {id : 1,src : '/Images/w5img2.jpg',text1 : 'Watercolor Portrait',text2 : 'Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.'},
        {id : 2,src : '/Images/w5img5.jpg',text1 : 'Birches in Autumn',text2 : 'I love painting autumn trees and this work is a perfect example.'},
        {id : 3,src : '/Images/w5img8.jpg',text1 : 'Green Landscape',text2 : 'Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.'},
    ]

   const w5CompsArr3 = [
    {id : 1,src : '/Images/w5img3.jpg',text1 : 'Watercolor Seascape',text2 : 'When I was in Ibiza last year, I painted this amazing seascape.'},
    {id : 2,src : '/Images/w5img6.jpg',text1 : 'Spring Styled Portrait',text2 : 'This portrait is a custom painting for one of my Italian friends.'},
    {id : 3,src : '/Images/w5img9.jpg',text1 : 'Summer Flowers',text2 : 'This is one of my latest works, which has been recently exhibited at Los Angeles Art Center.'},
   ]

  


   const likeContext = useContext(myContext)

   let likes = likeContext.likes
   let setLikes = likeContext.setLikes


   const w6ValsArr = [
    {id : 1,icon : 'icon-user',text1 : 'Portrait',text2 : 'Drawing portraits to reflect your character.'},
    {id : 2,icon : 'icon-leaf',text1 : 'Landscape',text2 : 'Creating breathtaking landscape paintings.'},
    {id : 3,icon : 'icon-gift',text1 : 'Still Life',text2 : 'New look at usual objects from your daily life.'},
    {id : 4,icon : 'icon-library',text1 : 'Urban',text2 : 'Depicting life of citizens all over the world.'},
   ]


   const w7ValsArr = [
    {
        id : 1,img1 : '/Images/w7Img1.jpg',backImg : '/Images/w7backImg1.jpg',
        text1 : 'Dec 22, 2020 at 5:07 pm',text2 : 'Organizing Your Studio: Tips & Tricks for Beginner Artists',
        text3 : 'One of the most important aspects of having a perfect studio is being able to find exactly what you need in a really fast amount of time. There have been times in my studio when I was in the groove, painting along and creating a painting...'
    },
    {
        id : 2,img1 : '/Images/w7Img1.jpg',backImg : '/Images/w7backImg2.jpg',
        text1 : 'Dec 22, 2020 at 5:07 pm',text2 : 'Finding Your Customer',
        text3 : 'The best customers are not just the ones who buy your artwork once, they are the ones who will continue to buy your artwork for years to come. But, how do you reach more of these die-hard customers if you do not know who they are yet?'
    },
    {
        id : 3,img1 : '/Images/w7Img1.jpg',backImg : '/Images/w7backImg3.jpg',
        text1 : 'Dec 22, 2020 at 5:07 pm',text2 : 'How to Turn Your Imagination into Art: Tips & Tricks for Beginners',
        text3 : 'We all have an imagination. But, it takes a special skill to hold an image in thought and turn that imagination into art. Art-making can be a natural gift, a learned skill, or a combination of both. Making art is difficult and it takes...'
    },
    {
        id : 4,img1 : '/Images/w7Img1.jpg',backImg : '/Images/w7backImg4.jpg',
        text1 : 'Dec 22, 2020 at 5:07 pm',text2 : 'The Latest Trends in Fine Art',
        text3 : 'Last weeks Artists Helping Artists show was all about Art Trends and whats hot in 2020. I believe that trends are something we should be aware of and understand. They should not influence what we create. Don’t change what...'
    },
   ]

    

   let [galImgDivKord,setGalImgDivKord] = useState(0)
   let [a,setA] = useState(0)

   let [galSmallImg1Size,seGalSmallImg1Size] = useState(1.2)
   let [galSmallImg2Size,seGalSmallImg2Size] = useState(1)
   let [galSmallImg3Size,seGalSmallImg3Size] = useState(1)
   let [galSmallImg4Size,seGalSmallImg4Size] = useState(1)

   let [galW3visibl,setGalW3Visibl] = useState(0)
   let [galW3val,setGalW3val] = useState(false)

   let [galImg1Size,setGalImg1Size] = useState(1)
   let [galImg2Size,setGalImg2Size] = useState(1)
   let [galImg3Size,setGalImg3Size] = useState(1)
   let [galImg4Size,setGalImg4Size] = useState(1)

   let [galImagesVal,setGalImagesVal] = useState(1)

   useEffect(() => {
     if(a === 0){
        setGalImagesVal(1)
     }else if(a === 1){
        setGalImagesVal(2)
     }else if(a === 2){
        setGalImagesVal(3)
     }else if(a === 3){
        setGalImagesVal(4)
     }
   },[a])

   let [galDivScale,setGalDivScale] = useState(0)
   let [galDivOpacity,setGalDivOpacity] = useState(0)
   let [galDivZindex,setGalDivZindex] = useState(-2)



    return(
        <>
       
        
        <div className='w1'>
            <div className='w1d1'>
                <span className='w1sp1'>
                    <span className='icon-phone icon1'></span>
                    <a className='link1' href=''>1-800-1234-567</a>
                </span>
                <span className='w1sp1'>
                    <span className='icon-location2 icon1'></span>
                    <a className='link1' href=''>2130 Fulton Street, San Diego, CA 94117-1080 USA</a>
                </span>
                <span className='w1sp1'>
                    <span className='icon-folder-open icon1'></span>
                    <a className='link1' href=''>info@demolink.org</a>
                </span>
            </div>
            <div className='w1d1 w1d2'>
                <div className='icon2div'>
                    <span className='icon-facebook icon2'></span>
                    <span className='icon-twitter icon2'></span>
                    <span className='icon-instagram icon2'></span> 
                    <span className='icon-google icon2'></span> 
                    <span className='icon-pinterest icon2'></span> 
                    <span className='icon-linkedin2 icon2'></span> 
                </div>
                <div className='searchiconDiv' style={{position : `relative`}}>
                <span className='icon-search iconsearch' onClick={() => {
                  if(!divVal){
                    setDivVal(true)
                    setDivOpacity(1)
                    setDivTransform(0)
                    setDivZindex(10)
                  }else{
                    setDivVal(false)
                    setDivOpacity(0)
                    setDivTransform(-40)
                    setDivZindex(-1)
                  }
                }}>
                    
                </span>

                <div className='searchInpDiv' style={{opacity : `${divOpacity}`,zIndex : `${divZindex}`,transform : `translateX(${divTransform}px)`}}>
                        <input type='text' className='searchInp' placeholder='Search...' />
                        <button className='searchBtn G-mainBtn'>
                            <span className='spnBtnHov1 G-spnBtnHov1'></span>
                            <span className='spnBtnHov2 G-spnBtnHov2'></span>
                            <span className='spnBtnHov3 G-spnBtnHov3'></span>
                            <span className='spnBtnHov4 G-spnBtnHov4'></span>
                       <span className='G-posSp1'> Search</span></button>
                       
                    </div>
                </div>
            </div>
        </div>

        <div className='G-center'>
           <a href=''> <img src='/Images/morganImg.jpg' className='img1' /></a>
        </div>

        <Header likes = {likes} />

        

        <div className='w3' style={{backgroundImage : `url('/Images/backImg1.jpg')`}}>
           <a href='' className='w3img1link'><img src='/Images/w3Img1.jpg' className='w3img1' /></a>
        </div>

        <div className='w4'>
          <div className='w4-1 G-homemaindiv '>
            <div className='w4-1d1'>
                <h1 className='w4ver1'>A Few Words About Me</h1>
                <p className='w4p1'>
                My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.
                </p>
                <button className='btn2 G-mainBtn'>
                            <span className='btn2Hov1 G-spnBtnHov1'></span>
                            <span className='btn2Hov1 G-spnBtnHov2'></span>
                            <span className='btn2Hov1 G-spnBtnHov3'></span>
                            <span className='btn2Hov1 G-spnBtnHov4'></span>
                   <span className='G-posSp1'> Learn More</span>
                </button>

            </div>
            <div className='w4-1d2'>
                <img src='/Images/w4Img1.jpg' className='w4img1' />
            </div>

          </div>
        </div>

        <div className='w5'>
            <h1 className='G-w5ver1'>My Paintings</h1>
            <div className='G-center'>
            <div className=' G-homemaindiv w5-1'>
                <div className='w5-1d1'>
                {w5CompsArr1.map((elm) => {
                 return <W5Comp key = {elm.id} src = {elm.src} text1 = {elm.text1} text2 = {elm.text2} changeLikes = {setLikes} likes = {likes}/>
              })}
                </div>
                <div className='w5-1d1'>
                {w5CompsArr2.map((elm) => {
                 return <W5Comp key = {elm.id} src = {elm.src} text1 = {elm.text1} text2 = {elm.text2} changeLikes = {setLikes} likes = {likes}/>
              })}
                </div>
                <div className='w5-1d1'>
                {w5CompsArr3.map((elm) => {
                 return <W5Comp key = {elm.id} src = {elm.src} text1 = {elm.text1} text2 = {elm.text2} changeLikes = {setLikes} likes = {likes}/>
              })}
                </div>
              
            </div>
            </div>
            <div className='G-center'>
            <button className='btn2 G-mainBtn btn3'>
                            <span className='btn2Hov1 G-spnBtnHov1'></span>
                            <span className='btn2Hov1 G-spnBtnHov2'></span>
                            <span className='btn2Hov1 G-spnBtnHov3'></span>
                            <span className='btn2Hov1 G-spnBtnHov4'></span>
                   <span className='G-posSp1'> Wiew My Portfolio</span>
                </button>
            </div>
        </div>

        <div className='w6'>
        <h1 className='G-w5ver1'>Services</h1>
        <div className='G-center'>
            <p className='w6p1'>
            If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.
            </p>
        </div>
        <div className='G-center'>
            <div className='w6-1 G-homemaindiv'>
               {
                w6ValsArr.map((elm) => {
                    return <W6Comp key = {elm.id} icon = {elm.icon} text1 = {elm.text1} text2 = {elm.text2}  />
                })

               }
            </div>
        </div>
        <div className='G-center'>
        <button className='btn2 G-mainBtn btn3'>
                            <span className='btn2Hov1 G-spnBtnHov1'></span>
                            <span className='btn2Hov1 G-spnBtnHov2'></span>
                            <span className='btn2Hov1 G-spnBtnHov3'></span>
                            <span className='btn2Hov1 G-spnBtnHov4'></span>
                   <span className='G-posSp1'>View All Cervices</span>
                </button>
        </div>
        </div>
        <div className='w7'>
        <h1 className='G-w5ver1'>Latest Blog Posts</h1>
        <div className='G-center'>
            <div className='w7-1 G-homemaindiv'>
                   {w7ValsArr.map((elm) => {
                      return <W7Comp key = {elm.id} img1 = {elm.img1} backImg = {elm.backImg} text1 = {elm.text1} text2 = {elm.text2} 
                      text3 = {elm.text3} />
                   })}
            </div>
        </div>
        <div className='G-center'>
        <button className='btn2 G-mainBtn'>
                            <span className='btn2Hov1 G-spnBtnHov1'></span>
                            <span className='btn2Hov1 G-spnBtnHov2'></span>
                            <span className='btn2Hov1 G-spnBtnHov3'></span>
                            <span className='btn2Hov1 G-spnBtnHov4'></span>
                   <span className='G-posSp1'> View All Blog Posts</span>
                </button>
                </div>

        </div>

        <div className='w8'>
          <div className='w8-1 G-homemaindiv'>
            <div className='w8-2'>
                <div className='w8-2d1'>
                    <h1 className='w8ver1'>Gallery</h1>
                    <div className='gallerdiv'>
                        <div className='galleryd1'>
                            <img src='/Images/galleryImg1.jpg' className='galleryImg1' onClick={() => {
                                setGalDivScale(1)
                                setGalDivOpacity(1)
                                setGalDivZindex(300)
                            }}/>
                            <button className='galleryOpnsp'>+</button>
                        </div>
                        <div className='galleryd1'>
                            <img src='/Images/galleryImg2.jpg' className='galleryImg1' onClick={() => {
                                setGalDivScale(1)
                                setGalDivOpacity(1)
                                setGalDivZindex(300)
                            }}/>
                            <button className='galleryOpnsp'>+</button>
                        </div>
                        <div className='galleryd1'>
                            <img src='/Images/galleryImg3.jpg' className='galleryImg1' onClick={() => {
                                setGalDivScale(1)
                                setGalDivOpacity(1)
                                setGalDivZindex(300)
                            }}/>
                            <button className='galleryOpnsp'>+</button>
                        </div>
                        <div className='galleryd1'>
                            <img src='/Images/galleryImg4.jpg' className='galleryImg1' onClick={() => {
                                setGalDivScale(1)
                                setGalDivOpacity(1)
                                setGalDivZindex(300)
                            }}/>
                            <button className='galleryOpnsp'>+</button>
                        </div>
                    </div>
                </div>
                <div className='w8-2d1'>
                <h1 className='w8ver1'>About Me</h1>
                <p className='w8p1'>
                My name is Samantha Morgan a.wownd I am a profesisonal fine artist. I create paintings in various genres including portraits, still lifes, urban paintings, and more. My works will bring colors into your life.
                </p>
                </div>
                <div className='w8-2d1'>
                <h1 className='w8ver1'>Contacts</h1>
                <p className='w8p2'>
                    <span className='icon-location2 w8icon'></span>
                    <a className='w8link1' href=''>2130 Fulton Street, San Diego, CA 94117-1080 USA</a>
                </p>
                <p className='w8p2'>
                    <span className='icon-phone w8icon'></span>
                    <a className='w8link1' href=''>1-800-1234-567</a>
                </p>
                <p className='w8p2'>
                    <span className='icon-folder-open w8icon'></span>
                    <a className='w8link1' href=''>info@demolink.org</a>
                </p>
                <p className='w8iconsp'>
                    <span className='w8icon1 icon-facebook'></span>
                    <span className='w8icon1 icon-twitter'></span>
                    <span className='w8icon1 icon-instagram'></span>
                    <span className='w8icon1 icon-google'></span>
                    <span className='w8icon1 icon-pinterest'></span>
                    <span className='w8icon1 icon-linkedin2'></span>
                </p>
                </div>
                <div className='w8-2d1'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97584.04254026728!2d44.4885671!3d40.1533904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan!5e0!3m2!1sen!2s!4v1664637209851!5m2!1sen!2s" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <p className='w8p4'>
            © 2022 All Rights Reserved Terms of Use and Privacy Policy
            </p>
          </div>
          
        </div>

        <div className='galleryDiv' style={{transform : `scale(${galDivScale})`,opacity : `${galDivOpacity}`,zIndex : `${galDivZindex}`}}>
           <div className='galleryw1'>
            <div className='galleryw1d1'>
                <p className='galleryp1'>{galImagesVal}/4</p>
            </div>
            <div className='galleryw1d1'>
                <span className='galleryControlspn icon-share2'></span>
                <span className='galleryControlspn icon-zoom-out' onClick={() => {
                    if(a === 0){
                        if(galImg1Size !== 1){
                            setGalImg1Size(galImg1Size - 0.1)
                        }
                    }else if(a === 1){
                        if(galImg2Size !== 1){
                            setGalImg2Size(galImg2Size - 0.1)
                        }
                    }else if(a === 2){
                        if(galImg3Size !== 1){
                            setGalImg3Size(galImg3Size - 0.1)
                        }
                    }else if(a === 3){
                        if(galImg4Size !== 1){
                            setGalImg4Size(galImg4Size - 0.1)
                        }
                    }
                }}></span>
                <span className='galleryControlspn icon-zoom-in'  onClick={() => {
                    if(a === 0){
                        if(galImg1Size !== 2){
                            setGalImg1Size(galImg1Size + 0.1)
                        }
                    }else if(a === 1){
                        if(galImg2Size !== 2){
                            setGalImg2Size(galImg2Size + 0.1)
                        }
                    }else if(a === 2){
                        if(galImg3Size !== 2){
                            setGalImg3Size(galImg3Size + 0.1)
                        }
                    }else if(a === 3){
                        if(galImg4Size !== 2){
                            setGalImg4Size(galImg4Size + 0.1)
                        }
                    }
                }}></span>
                <span className='galleryControlspn icon-play3'></span>
                <span className='galleryControlspn icon-box-add'></span>
                <span className='galleryControlspn icon-cross' onClick={() => {
                    setGalDivScale(0)
                    setGalDivOpacity(0)
                    setGalDivZindex(-2)

                }}></span>
            </div>
           </div>
           <div className='galleryw2'>
            <span className='icon-arrow-left2 imgscrollspn' onClick={() => {
                 setGalImg1Size(1)
                 setGalImg2Size(1)
                 setGalImg3Size(1)
                 setGalImg4Size(1)
                if(a === 0){
                    setGalImgDivKord(25)
                    setA(1)
                    seGalSmallImg1Size(1)
                    seGalSmallImg2Size(1.2)
                    seGalSmallImg3Size(1)
                    seGalSmallImg4Size(1)
                }else if(a === 1){
                    setGalImgDivKord(50)
                    setA(2)
                    seGalSmallImg1Size(1)
                    seGalSmallImg2Size(1)
                    seGalSmallImg3Size(1.2)
                    seGalSmallImg4Size(1)
                }else if(a === 2){
                    setGalImgDivKord(75)
                    setA(3)
                    seGalSmallImg1Size(1)
                    seGalSmallImg2Size(1)
                    seGalSmallImg3Size(1)
                    seGalSmallImg4Size(1.2)
                }
            }}></span>
            <div className='galleryImgdivParent'>
                <div className='galleryImgdiv' style={{transform : `translateX(-${galImgDivKord}%)`}}>
                    <img src='/Images/galleryImg1-1.jpg' className='galleryImg1' style={{transform : `scale(${galImg1Size})`}}/>
                    <img src='/Images/galleryImg2-2.jpg' className='galleryImg1' style={{transform : `scale(${galImg2Size})`}}/>
                    <img src='/Images/galleryImg3-3.jpg' className='galleryImg1' style={{transform : `scale(${galImg3Size})`}}/>
                    <img src='/Images/galleryImg4-4.jpg' className='galleryImg1' style={{transform : `scale(${galImg4Size})`}}/>
                </div>
            </div>
            <span className='icon-arrow-right2 imgscrollspn'  onClick={() => {
                setGalImg1Size(1)
                setGalImg2Size(1)
                setGalImg3Size(1)
                setGalImg4Size(1)
                 if(a === 3){
                    setGalImgDivKord(50)
                    setA(2)
                    seGalSmallImg1Size(1)
                    seGalSmallImg2Size(1)
                    seGalSmallImg3Size(1.2)
                    seGalSmallImg4Size(1)
                }else if(a === 2){
                    setGalImgDivKord(25)
                    setA(1)
                    seGalSmallImg1Size(1)
                    seGalSmallImg2Size(1.2)
                    seGalSmallImg3Size(1)
                    seGalSmallImg4Size(1)
                }else if(a === 1){
                    setGalImgDivKord(0)
                    setA(0)
                    seGalSmallImg1Size(1.2)
                    seGalSmallImg2Size(1)
                    seGalSmallImg3Size(1)
                    seGalSmallImg4Size(1)
                }
            }}></span>
           </div>

           <div className='galleryw3' style={{bottom : `-${galW3visibl}px`}}>
            <img src='/Images/galleryImg1.jpg' className='gallersmallimg'  style={{transform : `scale(${galSmallImg1Size})`}} 
            onClick={() => {
                setGalImgDivKord(0)
                setA(0)
                seGalSmallImg1Size(1.2)
                seGalSmallImg2Size(1)
                seGalSmallImg3Size(1)
                seGalSmallImg4Size(1)

                setGalImg1Size(1)
                 setGalImg2Size(1)
                 setGalImg3Size(1)
                 setGalImg4Size(1)
            }}/>
            <img src='/Images/galleryImg2.jpg' className='gallersmallimg'  style={{transform : `scale(${galSmallImg2Size})`}} 
             onClick={() => {
                setGalImgDivKord(25)
                setA(1)
                seGalSmallImg1Size(1)
                seGalSmallImg2Size(1.2)
                seGalSmallImg3Size(1)
                seGalSmallImg4Size(1)

                setGalImg1Size(1)
                 setGalImg2Size(1)
                 setGalImg3Size(1)
                 setGalImg4Size(1)
            }}/>
            <img src='/Images/galleryImg3.jpg' className='gallersmallimg'  style={{transform : `scale(${galSmallImg3Size})`}} 
             onClick={() => {
                setGalImgDivKord(50)
                setA(2)
                seGalSmallImg1Size(1)
                seGalSmallImg2Size(1)
                seGalSmallImg3Size(1.2)
                seGalSmallImg4Size(1)

                setGalImg1Size(1)
                 setGalImg2Size(1)
                 setGalImg3Size(1)
                 setGalImg4Size(1)
            }}/>
            <img src='/Images/galleryImg4.jpg' className='gallersmallimg'  style={{transform : `scale(${galSmallImg4Size})`}} 
             onClick={() => {
                setGalImgDivKord(75)
                setA(3)
                seGalSmallImg1Size(1)
                seGalSmallImg2Size(1)
                seGalSmallImg3Size(1)
                seGalSmallImg4Size(1.2)

                setGalImg1Size(1)
                 setGalImg2Size(1)
                 setGalImg3Size(1)
                 setGalImg4Size(1)
            }}/>
            <button className='icon-cross xbtn' onClick={() => {
                if(!galW3val){
                    setGalW3Visibl(100)
                    setGalW3val(true)
                }else{
                    setGalW3Visibl(0)
                    setGalW3val(false)
                }
            }}></button>
           </div>

        </div>

        </>
    )
}

export default Home