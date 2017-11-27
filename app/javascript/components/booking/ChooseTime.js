import React, { Component } from 'react';
import moment from 'moment';

class DatePicker extends Component{
    constructor(props){
        super(props);

        this.state = {
            page: 0,
            dateSliderPage: 0,
            timeSliderPage: 0,
            dates: [],
            times: []
        }
    }

    componentWillMount(){
        this.generateBookingDates();
        this.generateBookingTimes();
    }


    generateBookingDates = () => {
        // Generate dates of 2 weeks for booking
        let bookingDates = [];

        for(let i = 0; i < 22; i++){
            // bookingDates.push( moment().add(i,'day').toDate() );
            bookingDates.push( moment().add(i,'day').format('LL') );
        }
        this.setState({ dates: [...this.state.dates, ...bookingDates] })
    }

    generateBookingTimes = () => {
        let bookingTimes = [];
        let startTime = 10; //am
        let endTime = 13; //pm
        let timeGap = 15; //min
        let workingTime = endTime - startTime; //hour

        for(let i = 0; i < (workingTime * 4) + 1; i++){
            bookingTimes.push( moment({hour: startTime, minute: 0}).add(i*timeGap, 'm').format('LT') );
        }

        this.setState({ times: [...this.state.times, ...bookingTimes ] })
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    previousPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }

    nextDates = () => {
        this.setState({
            dateSliderPage: this.state.dateSliderPage + 1
        })
    }

    previousDates = () => {
        this.setState({
            dateSliderPage: this.state.dateSliderPage - 1
        })
    }

    nextTimes = () => {
        this.setState({
            timeSliderPage: this.state.timeSliderPage + 1
        })
    }

    previousTimes = () => {
        this.setState({
            timeSliderPage: this.state.timeSliderPage - 1
        })
    }

    handleDateClick = (bookedDate) => {
        let values = { bookedDate: bookedDate }
        let stepData = { bookedDate: moment(bookedDate).format('dddd') }
        this.props.saveValues( values, stepData );
    }

    handleTimeClick = (bookedTime) => {
        let values = { bookedTime: bookedTime }
        let stepData = { bookedTime: bookedTime }

        this.props.saveValues( values, stepData );
    }

    renderDate = () => {
        let bookingDates = this.state.dates;
        let dateSliderPage = this.state.dateSliderPage;

        if(dateSliderPage === 0){
            bookingDates = bookingDates.slice(0, 7);
        }else if(dateSliderPage === 1){
            bookingDates = bookingDates.slice(7, 14);
        }else if(dateSliderPage === 2){
            bookingDates = bookingDates.slice(14, 21);
        }else{
            // Reset
            this.setState({ dateSliderPage: 0 })
        }

        return bookingDates.map((date, index) => {
            return(
                <button onClick={ () => this.handleDateClick(date) } className="datePicker-date btn" key={index}>
                    <span className="h5">{ moment(date).format('ddd') }</span>
                    <span className="h6">{ moment(date).format('D') }</span>
                </button>
            );
        });
    }

    renderTime = () => {
        let bookingTimes = this.state.times;
        let timeSliderPage = this.state.timeSliderPage;

        if(timeSliderPage === 0){
            bookingTimes = bookingTimes.slice(0, 5);
        }else if(timeSliderPage === 1){
            bookingTimes = bookingTimes.slice(5, 10);
        }else if(timeSliderPage === 2){
            bookingTimes = bookingTimes.slice(10, 15);
        }else{
            this.setState({ timeSliderPage: 0 })
        }

        return bookingTimes.map((time, index) => {
            return(
                <button onClick={ () => this.handleTimeClick(time) } className="datePicker-date btn" key={index}>
                    <span className="h5">{ time }</span>
                </button>
            );
        });
    }

    renderDateSlider = () => {
        let bookingDates = this.state.dates;
        let dateSliderPage = this.state.dateSliderPage;
        let sliderDate = this.props.values.bookedDate ? this.props.values.bookedDate : "Choose a date";

        // let sliderDate = moment().format('dddd, D MMMM YYYY');
        let previousDatesClass = null;
        let nextDatesClass = null;

        if(dateSliderPage === 0){
            previousDatesClass = "disabled"
            nextDatesClass = null;
        }else if(dateSliderPage === 1){
            previousDatesClass = null;
            nextDatesClass = null;
            // sliderDate = moment().add(1,'week').format('dddd, D MMMM YYYY');
        }else if(dateSliderPage === 2){
            previousDatesClass = null;
            nextDatesClass = "disabled"
            // sliderDate = moment().add(2,'week').format('dddd, D MMMM YYYY');
        }else{
            previousDatesClass = null;
            nextDatesClass = null;
            // sliderDate = moment().format('dddd, D MMMM YYYY');
        }

        return(
            <div className="datePicker-date-slider">
                <button onClick={ this.previousDates } className={`btn btn-brand circle ${previousDatesClass}`}>
                    <i className="icon icon-arrow-left"></i>
                </button>
                <div>{ sliderDate }</div>
                <button onClick={ this.nextDates } className={`btn btn-brand circle ${nextDatesClass}`}>
                    <i className="icon icon-arrow-right"></i>
                </button>
            </div>
        );
    }

    renderTimeSlider = () => {
        let bookingTimes = this.state.times;
        let timeSliderPage = this.state.timeSliderPage;
        let sliderTime = this.props.values.bookedTime ? this.props.values.bookedTime : "Choose a time";
        let previousTimesClass = null;
        let nextTimesClass = null;

        if(timeSliderPage === 0){
            previousTimesClass = "disabled"
            nextTimesClass = null;
        }else if(timeSliderPage === 1){
            previousTimesClass = null;
            nextTimesClass = null;
        }else if(timeSliderPage === 2){
            previousTimesClass = null;
            nextTimesClass = "disabled";
        }else{
            previousTimesClass = null;
            nextTimesClass = null;
        }

        return(
            <div className="datePicker-time-slider">
                <button onClick={ this.previousTimes } className={`btn btn-brand circle ${previousTimesClass}`}>
                    <i className="icon icon-arrow-left"></i>
                </button>
                <div>{ sliderTime }</div>
                <button onClick={ this.nextTimes } className={`btn btn-brand circle ${nextTimesClass}`}>
                    <i className="icon icon-arrow-right"></i>
                </button>
            </div>
        );
    }

    renderButton = () => {
        return(
            <div onClick={ this.props.nextStep } className="datePicker-next-button">
                <button className="btn btn-brand">Next</button>
            </div>
        );
    }

    render(){
        console.log("values: ", this.props.values);

        return(
            <div className="datePicker">
                <div className="datePicker-wrapper">
                    { this.renderDateSlider() }
                    <div className="datePicker-dates">
                        <div className="btn-group btn-group-block">
                            { this.renderDate() }
                        </div>
                    </div>
                </div>
                <div className="datePicker-wrapper">
                    { this.renderTimeSlider() }
                    <div className="datePicker-times">
                        <div className="btn-group btn-group-block">
                            { this.renderTime() }
                        </div>
                    </div>
                </div>
                { this.renderButton() }
            </div>
        );
    }
}

export default DatePicker;
