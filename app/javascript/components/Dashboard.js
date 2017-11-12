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

    componentDidMount(){
        axios.get(`/users`)
        .then(response => {
            this.setState({
                users: response.data
            })
        })
        .catch(error => {
            if(error.response.status == 401){
                console.error(error.response.data.error);
            }else{
                console.error('Something went wrong. Please refresh your page and try again.');
            }
        })
    };

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
