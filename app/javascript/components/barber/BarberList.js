import React, { Component } from 'react';
import { connect } from 'react-redux';

import BarberAccordion from './BarberAccordion';
import { fetchBarbers } from '../../actions/barber';

class BarberList extends Component{
    componentDidMount(){
        this.props.fetchBarbers();
    }

    renderBarberList = () => {
        let barbers = new Object(this.props.barbers);

        return Object.keys(barbers).map((key, index) => {
            return(
                <BarberAccordion
                    key           = { index                   }
                    form          = { 'form-' + index         }
                    initialValues = { barbers[key]            }
                    id            = { barbers[key].id         }
                    first_name    = { barbers[key].first_name }
                    last_name     = { barbers[key].last_name  }
                />
            );
        });
    };

    render(){
        return(
            <section id="app">
                { this.renderBarberList() }
            </section>
        );
    };
}

const mapStateToProps = (state) => {
    return{
        barbers: state.barbers
    };
}

export default connect(mapStateToProps, { fetchBarbers })(BarberList);
