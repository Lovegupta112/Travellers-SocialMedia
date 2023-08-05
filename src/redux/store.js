import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import fetchReducer from './reducers/fetchReducer';
import rootReducer from './reducers/rootReducer';




const store=createStore(rootReducer,applyMiddleware(thunk));


export default store;
