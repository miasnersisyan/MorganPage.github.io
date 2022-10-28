import { createContext, useState } from 'react';
import './Assets/global.scss'
import Home from './Pages/Home/home';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';

import ToTopBtn from './Components/scrolltopBtn/scrollTopBtn';

export  const myContext = createContext() 


function App() {

  

  let [likes,setLikes] = useState(JSON.parse(localStorage.getItem('likesList')))



  return (
    <div className="App">
      <ToTopBtn />
      <myContext.Provider value={{
        likes : likes,
        setLikes : setLikes
      }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
     </myContext.Provider>
    </div>
  );
}

export default App;
