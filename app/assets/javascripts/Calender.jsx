import React from 'react';
import DatePicker  from 'react-datepicker';
import moment from 'moment';
 
export default class Calender extends React.Component{
  
 
   constructor(props){
    super(props);
    this.state = { startDate: moment()}
  }
     
   
 
 handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
        <div className="date-picker">
        <div className="row">
        
        <h2>Date picker</h2>
        </div>
        <label>Select your date: </label>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange.bind(this)} />
     
       
        </div>)
  }
}