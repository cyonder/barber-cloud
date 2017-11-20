import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShops } from '../../actions/shop';

class ChooseShop extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchShops();
    }

    handleClick = (shopID, shopName) => {
        var values = { shopID: shopID }
        var stepData = { shopName: shopName }

        this.props.saveValues(values, stepData);
        this.props.nextStep();
    }

    renderShops = () => {
        let shops = new Object(this.props.shops);

        return Object.keys(shops).map((key, index) => {
            return(
                <div key={index} className="column col-2">
                    <div className="card" onClick={ () => this.handleClick(shops[key].id, shops[key].shop_name) }>
                        <div className="card-image">
                            <img src="http://fpoimg.com/500x500" className="img-responsive"/>
                        </div>
                        <div className="card-header">
                            <div className="card-title h5">{ shops[key].shop_name }</div>
                            <div className="card-subtitle text-gray">{ shops[key].shop_address }</div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="container">
                <div className="columns">
                    { this.renderShops() }
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return{
        shops: state.shops
    };
}

export default connect(mapStateToProps, { fetchShops })(ChooseShop);
