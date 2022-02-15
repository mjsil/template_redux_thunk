import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadData } from '../../store/modules/ip/actions';

export const Info = ({ isLoading, data, error, loadData }) => {
    useEffect(() => {
        loadData();
    }, []);

    return (
        isLoading
            ? <p>Loading...</p>
            : error 
                ? <p>Error</p>
                : <p>{data.origin}</p>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.ip.isLoading,
        data: state.ip.data,
        error: state.ip.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);