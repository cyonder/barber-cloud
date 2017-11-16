import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    renderButtons = () => {
        if(this.props.authenticated){
            return [
                <Link to="/dashboard" className="btn btn-brand-2" key={1}>Dashboard</Link>,
                <Link to="/signout" key={2}>Sign out</Link>
            ];
        }else{
            return [
                <Link to="/signin" key={1}>Sign in</Link>,
                <Link to="/signup" key={2}>Sign up</Link>
            ];
        }
    };

    render(){
        return(
            <header id="navigation">
                <Link to="/" id="logo"></Link>
                <div id="navigation-links">
                    <Link to="/">What is Barberate?</Link>
                    <Link to="/">Support</Link>
                    <Link to="/">Pricing</Link>
                </div>
                <div id="navigation-buttons">
                    { this.renderButtons() }
                </div>
            </header>
        )
    };
};

const mapStateToProps = (state) => {
    return{
        authenticated: state.authentication.authenticated
    };
};

export default connect(mapStateToProps)(Header);
