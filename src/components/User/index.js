import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadData } from '../../store/modules/user/actions';

export const User = ({ isLoading, data, error, loadData }) => {
    useEffect(() => {
        loadData();
    }, []);
    
    return (
        isLoading
            ? <p>Loading...</p>
            : error
                ? <p>Error</p>
                : <p>{data['user-agent']}</p>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.user.isLoading,
        data: state.user.data,
        error: state.user.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData()),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
