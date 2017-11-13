import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/user';

import { axiosInstance as axios } from '../constants/axiosInstance';

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            users: []
        }
    }

    renderList = () => {
        return this.state.users.map((user, i) => {
            return <div key={i}>{ user.first_name }</div>
        })
    }

    render(){
        return(
            <section id="app">
                <span>You are in Dashboard Page</span>
                { this.renderList() }
            </section>
        )
    };
};

export default connect(null, { fetchUsers })(Dashboard);
