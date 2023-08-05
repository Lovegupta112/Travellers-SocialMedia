import React ,{useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import like from '../images/like.svg'
import share from '../images/share.svg';
import Post from './Post';
import {selectedPost} from '../redux/actions/postInfoAction';

// import spiderman from '../images/spiderman.jpg';

const PostDetails = () => {


const [selected,setSelected]=useState('detail');
  const  post=useSelector(state=>state.postState);
  const imgLink=`https://picsum.photos/200?random=${post.id}`;

  const {loading,data,error}=useSelector(state=>state.fetchState);

   const dispatch=useDispatch();

  function handleClick(post){
    dispatch(selectedPost(post));
      navigate(`/item/${post.id}`);
}


function details(){
setSelected('detail');
}
function userInfo(){
setSelected(`userInfo`);
}

const navigate=useNavigate();

  return (
  <>
    <div className='postDetails-container'>
        <div className="post-heading">
        <p className='back' onClick={()=>navigate('/')}>&#8592;</p>
        <h1>Post Number  #{post.id}</h1>
        </div>
        <div className="postDetails">
            <div className="post-image">
                <img src={imgLink} alt={`post-${post.id}`} />
                 <div className='info'>
                 <span> {post.title.slice(0,20)}..</span>
                  <div className='icons'>
                    <img src={share} alt="share" />
                    <img src={like} alt="like" />
                    </div>
                 </div>
            </div>
            <div className="details-section">
                <div className="buttons">
                    <button className={selected==='detail' ?'active':'hide'} onClick={details}>Detail</button>
                    <button className={selected==='userInfo' ?'active':'hide'} onClick={userInfo}>User Info</button>
                </div>
                <div className="info">
                  {selected==='detail' ? <p>{post.body}</p>
                  : <p>Post Was Posted By {post.id}</p>}
                </div>
            </div>
        </div>
    </div>
     <h1>More Posts</h1>
     <div className="posts">
          {loading && <h1>Fetching...</h1>}
          {data.length>0 && data.map((post)=>{
           return <div className="post" onClick={()=>handleClick(post)} key={post.id}>
                   <Post info={post} />
                  </div>
          })}
       </div>
  </>
  )
}

export default PostDetails