import React, { Component } from 'react';
import { connect } from 'react-redux';

import BarberList from './BarberList';
import BarberHeader from './BarberHeader';
import BarberModal from './BarberModal';

class Barber extends Component{
    render(){
        return(
            <div>
                <BarberHeader />
                <BarberList />
                <BarberModal />
            </div>
        );
    };
}

function mapStateToProps(state){
    return{
        ui: state.ui
    }
}

export default connect(mapStateToProps)(Barber);
