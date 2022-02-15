const initialState = {
    data: [],
    isLoading: false,
    error: false,
};

export const ipReducer = (state = initialState, action) => {
    switch(action.type) {
        case '@ip/LOAD_DATA_REQUEST':
            return {
                isLoading: true,
                data: [],
                error: false,
            };
        case '@ip/LOAD_DATA_SUCCESS':
            return {
                isLoading: false,
                data: action.data,
                error: false,
            };
        case '@ip/LOAD_DATA_ERROR':
            return {
                isLoading: false,
                data: [],
                error: true,
            };
        default:
            return state;
    };
};