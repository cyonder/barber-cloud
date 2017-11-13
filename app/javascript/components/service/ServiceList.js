import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServiceAccordion from './ServiceAccordion';
import { fetchServices } from '../../actions/service';

class ServiceList extends Component{
    componentDidMount(){
        this.props.fetchServices();
    }

    renderServiceList = () => {
        let services = new Object(this.props.services);

        return Object.keys(services).map((key, index) => {
            return(
                <ServiceAccordion
                    key = { index }
                    form = { 'form-' + index }
                    initialValues = { services[key] }
                    id = { services[key].id }
                    service_name = { services[key].service_name }
                />
            );
        });
    }

    render(){
        return(
            <section id="app">
                { this.renderServiceList() }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        services: state.services
    };
}

export default connect(mapStateToProps, { fetchServices })(ServiceList);
