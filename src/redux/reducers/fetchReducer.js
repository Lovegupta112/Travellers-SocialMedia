 import {FETCH_START,FETCH_SUCCESS,FETCH_ERROR} from '../actions/actionTypes';


let initialState={
     loading:false,
     data:[],
     error:null
}


 const fetchReducer=(state=initialState,action)=>{

         switch(action.type){
             case FETCH_START:
                return (
                    {...state,loading:true}
                )

            case FETCH_SUCCESS:
                return (
                    {...state,loading:false,data:action.data,error:null}
                )

            case FETCH_ERROR:
                return(
                    {...state,loading:false,data:[],error:action.error}
                )
            default:
                return state;
         }
}

export default fetchReducer;
