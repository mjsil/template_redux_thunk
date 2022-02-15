import axios from 'axios';

export const loadDataRequest = () => {
    return {
        type: '@ip/LOAD_DATA_REQUEST',
    };
};

export const loadDataError = () => {
    return {
        type: '@ip/LOAD_DATA_ERROR',
    };
};

export const loadDataSuccess = (data) => {
    return {
        type: '@ip/LOAD_DATA_SUCCESS',
        data,
    };
};

export const loadData = () => {
    return dispatch => {
        dispatch(loadDataRequest());

        axios
            .get('http://httpbin.org/ip')
            .then(({ data }) => dispatch(loadDataSuccess(data)))
            .catch(() => dispatch(loadDataError()));
    };
};