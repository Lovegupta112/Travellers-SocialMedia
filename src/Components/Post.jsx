import React from 'react';
import {useDispatch,useSelector} from 'react-redux';


const Post = ({info}) => {



   const imgLink=`https://picsum.photos/200?random=${info.id}`


  return (
    <>
    <div className="post-image">
        <img src={imgLink} alt="" />
    </div>
    <div className="post-info">
        <h3>{info.title && info.title.slice(0,30)}...</h3>
      <div className="desc">
         <p> {info.body && info.body.slice(0,100)} <span className='read-more'>Read more...</span></p>
          <div className='arrow-section'>
          <span> &gt; </span>
          </div>
      </div>
    </div>
 </>
  )
}

export default Post;