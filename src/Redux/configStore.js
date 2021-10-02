// setup Redux
import { applyMiddleware, combineReducers, createStore } from "redux";
import {Covid19Reducer} from './Reducer/Covid19Reducer';
import { LoadingReducer } from "./Reducer/LoadingReducer";

import reduxThunk from "redux-thunk";


const rootReducer = combineReducers({
// chua cac state cua ung dung
    Covid19Reducer,
    LoadingReducer
    
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));