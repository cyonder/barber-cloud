import React, { Component } from 'react';
import { fetchShops } from '../actions/shop';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount(){
        this.props.fetchShops();
    }

    renderShops = () => {
        let shops = new Object(this.props.shops);

        return Object.keys(shops).map((key, index) => {
            return(
                <div key={index} className="column col-2">
                    <Link to={`/booking/${shops[key].id}`} className="card">
                        <div className="card-image">
                            <img src="http://fpoimg.com/500x500" className="img-responsive"/>
                        </div>
                        <div className="card-header">
                            <div className="card-title h5">{ shops[key].shop_name }</div>
                            <div className="card-subtitle text-gray">{ shops[key].shop_address }</div>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render(){
        return(
            <div id="home">
                <div id="search-barbershop">
                    <div className="input-group col-8">
                        <input type="text" className="form-input" placeholder="Search Barber Shop"/>
                        <select className="form-select">
                            <option>Toronto</option>
                            <option>Montreal</option>
                            <option>Vancouver</option>
                            <option>Ottawa</option>
                            <option>Quebec City</option>
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div id="index" className="columns">
                        { this.renderShops() }
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        shops: state.shops
    }
}

export default connect(mapStateToProps, { fetchShops })(Home);
