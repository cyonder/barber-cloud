import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServiceList from './ServiceList';
import ServiceHeader from './ServiceHeader';
import ServiceModal from './ServiceModal';

class Service extends Component{
    render(){
        return(
            <div>
                <ServiceHeader />
                <ServiceList />
                <ServiceModal />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ui: state.ui
    };
}

export default connect(mapStateToProps)(Service);
