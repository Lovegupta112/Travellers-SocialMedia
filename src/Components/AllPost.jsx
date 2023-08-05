import React, {useState,useEffect} from 'react'
import searchLogo from '../images/search.svg';
import Post from './Post';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { fetchData } from '../redux/actions/fetchAction';
import {selectedPost} from '../redux/actions/postInfoAction';

const AllPost = () => {

    const[search,setSearch]=useState('');
    // const []
    
    const dispatch=useDispatch();

    useEffect(()=>{
     dispatch(fetchData());
    },[]);

    const {loading,data,error}=useSelector(state=>state.fetchState);
   //  console.log(loading,data,error);
    
 const navigate=useNavigate();

    function handleClick(post){
         dispatch(selectedPost(post));
           navigate(`/item/${post.id}`);
    }


  return (
    
    <div className='posts-container'>
      <h1 className='main-heading'>Social Media For Travellers</h1>
       <div className="searchBar">
         <div className="search-image">
            <img src={searchLogo} alt="search" />
         </div>
        <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search here...'/>
       </div>
       <div className="posts">
          {loading && <h1>Fetching...</h1>}
          {data.length>0 && data.map((post)=>{
           return <div className="post" onClick={()=>handleClick(post)} key={post.id}>
                   <Post info={post} />
                  </div>

          })}
       </div>
    </div>

  )
}

export default AllPost;