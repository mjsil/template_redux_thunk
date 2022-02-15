import axios from 'axios';

export const loadDataRequest = () => {
    return {
        type: '@user/LOAD_DATA_REQUEST',
    };
};

export const loadDataError = () => {
    return {
        type: '@user/LOAD_DATA_ERROR',
    };
};

export const loadDataSuccess = (data) => {
    return {
        type: '@user/LOAD_DATA_SUCCESS',
        data,
    };
};

export const loadData = () => {
    return dispatch => {
        dispatch(loadDataRequest());

        axios
            .get('https://httpbin.org/user-agent')
            .then(({ data }) => dispatch(loadDataSuccess(data)))
            .catch(() => dispatch(loadDataError()));
    }
};