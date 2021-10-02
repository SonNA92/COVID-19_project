
import { covid19Service } from '../sevices/Covid19Service';
import { ADD_COUNTRY, DELETE_COUNTRY, SET_COUNTRY, SET_DATA, SHOW_MODAL } from './types/ActionType';
import { displayLoadingAction, hideLoadingAction} from './LoadingAction';

export const getApiDataAction = () =>{
    return async (dispatch) =>{
        dispatch(displayLoadingAction);
        try {
            var result = await covid19Service.getDataCovid19();
            const action = {
                type:SET_DATA,
                data: result.data
            }
            await dispatch(action);
            dispatch(hideLoadingAction);
        } catch (errors) {
            alert('errors', errors.response?.data);
            dispatch(hideLoadingAction);
        }
    }
}

export const getDetailCountry = (key) => {
    return async (dispatch) => {
        dispatch(displayLoadingAction);
        try {
            var result = await covid19Service.getDetailCountry(key);
            const action = {
                type: SET_COUNTRY,
                data:result.data
            }
            await dispatch(action);
            await dispatch(hideLoadingAction);
            dispatch({type:SHOW_MODAL});
            
        }catch (errors) {
            alert(`This country data is being updated !! Please choose another country !
( API https://api.covid19api.com/country bị lỗi Mỹ không request được ! )`);
            dispatch(hideLoadingAction);
        }
    }
}

export const addFollowCountry = (country) => {
    return (dispatch) => {
        const action = {
            type: ADD_COUNTRY,
            data: country
        }
        dispatch(action);
        alert('Add follow country successfully !!!');

    }
}

export const delFollowCountry = (country) => {
    return (dispatch) => {
        const action = {
            type: DELETE_COUNTRY,
            data: country
        }
        dispatch(action);
        alert('Delete follow country successfully !!!');
    }
}

