import {SELECTED_POST} from './actionTypes';


export function selectedPost(post){

    return {
        type:SELECTED_POST,
        payload:post
    }
}