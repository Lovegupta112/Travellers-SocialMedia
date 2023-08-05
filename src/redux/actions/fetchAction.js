import {FETCH_START,FETCH_SUCCESS,FETCH_ERROR} from './actionTypes';
import axios from 'axios';

export function fetchStart(){
    return {
        type:FETCH_START
    }
}

export function fetchSuccess(data){
     return {
        type:FETCH_SUCCESS,
         data:data
     }
}

export function fetchError(error){
    return {
        type:FETCH_ERROR,
        error:error
    }
}




export function fetchData(){
    return async function(dispatch){
        try{
          dispatch(fetchStart());
          const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
        //   console.log(response.data);
          dispatch(fetchSuccess(response.data));
        }
        catch(error){
            // console.log(error.response);
            dispatch(fetchError('Not able to fetch !'));
        }
    }
}

