import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import PostDetails from './Components/PostDetails';
import Navbar from './Components/Navbar';
import AllPost from './Components/AllPost';


const App=()=>{

  return(
   <div className='container'>
     <Navbar />
     <main>
       
    <Routes>
      <Route path='/' element={<AllPost />} />
      <Route path={'/item/:id'} element={<PostDetails />} >
      </Route>
    </Routes>
    </main>
   </div>
  );
}

export default App;
