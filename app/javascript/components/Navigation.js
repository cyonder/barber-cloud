import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleNavigation } from "../actions/ui";

class Navigation extends Component{
    render(){
        return(
            <nav className={ this.props.ui.navigationIsOpen ? "nav-open" : ""}>
                <div id="nav-header" onClick={ () => this.props.toggleNavigation(!this.props.ui.navigationIsOpen) }>
                    <div
                        id="shop-name"
                        className={ !this.props.ui.navigationIsOpen ? "hide" : ""}>
                        Seville Barber
                    </div>
                    <div
                        id="toggle-nav"
                        className={ this.props.ui.navigationIsOpen ? "rotate-icon" : ""}>
                        <img src="/images/toggle.svg" alt=""/>
                    </div>
                </div>
                <div id="nav-body">
                    <Link to="/dashboard" className="nav-item">
                        <img src="/images/dashboard.svg" alt=""/>
                        <span className="nav-text">Dashboard</span>
                    </Link>

                    <Link to="/appointments" className="nav-item">
                        <img src="/images/appointments.svg" alt=""/>
                        <span className="nav-text">Appointments</span>
                    </Link>

                    <Link to="/barbers" className="nav-item">
                        <img src="/images/barbers.svg" alt=""/>
                        <span className="nav-text">Barbers</span>
                    </Link>

                    <Link to="/services" className="nav-item">
                        <img src="/images/services.svg" alt=""/>
                        <span className="nav-text">Services</span>
                    </Link>

                    <Link to="" className="nav-item">
                        <img src="/images/reviews.svg" alt=""/>
                        <span className="nav-text">Reviews</span>
                    </Link>

                    <Link to="" className="nav-item">
                        <img src="/images/reports.svg" alt=""/>
                        <span className="nav-text">Reports</span>
                    </Link>

                    <Link to="" className="nav-item">
                        <img src="/images/settings.svg" alt=""/>
                        <span className="nav-text">Settings</span>
                    </Link>
                </div>
                <div id="nav-footer">
                    <Link to="/signout" className="nav-item">
                        <img src="/images/exit.svg" alt=""/>
                        <span className="nav-text">Sign out</span>
                    </Link>
                </div>
            </nav>
        );
    };
}

function mapStateToProps(state){
    return{
        ui: state.ui
    }
}

export default connect(mapStateToProps, { toggleNavigation })(Navigation);
