import React, { Component } from 'react';
import { fetchShops } from '../actions/shop';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Booking from './booking/Booking';

class Home extends Component {
    render(){
        return(
            <div id="home">
                <Booking />
            </div>
        )
    };
};

export default Home;
