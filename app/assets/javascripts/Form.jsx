import React from 'react';
 var FieldNames = {
  Firstname: 'First Name',
 Lastname: 'Lastname',
 Email: 'Email',
 Message: 'Message'
 };

 class FormInputs extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: ''};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
handleSubmit(e) {
    
    e.preventDefault();
  }
  render() {
    const value = this.state.value;
    const scale = this.props.scale;
    return (
      <div className="form-input">
        <label> {FieldNames[scale]}:</label><br/>
        <input value={value}
               onChange={this.handleChange} /><br/>        
        </div>
      
    );
  }
}
class FormTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: ''};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
handleSubmit(e) {
    
    e.preventDefault();
  }
  render() {
    const value = this.state.value;
    const scale = this.props.scale;
    return (
      <div className="form-text">
        <label> {FieldNames[scale]}:</label><br/>
        <textarea rows="3" cols="20" value={value}
               onChange={this.handleChange} /><br/>        
        </div>
      
    );
  }
}

export default class MyForm extends React.Component {
  render() {
    return (
      <div className="form-data">
      <h1>Forms</h1>
      <form onSubmit={this.handleSubmit}>
        <FormInputs scale="Firstname" />
        <FormInputs scale="Lastname" />
        <FormInputs scale="Email" />
        <FormTextarea scale="Message" />       
        <input type="submit" className="btn btn-success" value="Submit" />
         </form>
      </div>
    );
  }
}