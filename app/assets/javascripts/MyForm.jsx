import React from 'react';


 class Loading extends React.Component{
  render () {
    if(!this.props.loading) {
      return <span></span>;
    }
    return <span className='fa-spinner fa-spin'></span>
  }
}

export default class MyForm extends React.Component {
 
  constructor(){
      
    super();
    this.state = 
       {firstname: "",lastname:"", email: "", password: "",comments:"", loading: false, errors: {}}
    }


  _create() {
    return $.ajax({
      url: '#',
      type: 'POST',
      data: {
        firstname: this.state.firstname,
        lastname:this.state.lastname,
        password: this.state.password,
        email: this.state.email,
        comments:this.state.comments
      },
      beforeSend: function () {
        this.setState({loading: true});
      }.bind(this)
    })
  }
  _onSubmit (e) {
    e.preventDefault();
    var errors = this._validate.bind(this);
   
    if(Object.keys(errors).length != 0) {
      this.setState({
        errors: errors
      });
      return;
    }
    var xhr = this._create();
    xhr.done(this._onSuccess)
    .fail(this._onError)
    .always(this.hideLoading)
  }
  hideLoading () {
    this.setState({loading: false});
  }
  _onSuccess (data) {
    this.refs.user_form.getDOMNode().reset();
    this.setState(this.getInitialState());
    // show success message
  }
  _onError(data) {
    var message = "Failed to create the user";
    var res = data.responseJSON;
    if(res.message) {
      message = data.responseJSON.message;
    }
    if(res.errors) {
      this.setState({
        errors: res.errors
      });
    }
  }
  _onChange (e) {
    var state = {};
    state[e.target.name] =  $.trim(e.target.value);
    this.setState(state);
     
  }
  _validate () {
    var errors = {};
    if(this.state.firstname == "") {
      errors.firstname = "firstname is required";
    }
     if(this.state.lastname == "") {
      errors.lastname = "lastname is required";
    }
    if(this.state.email == "") {
      errors.email = "Email is required";
    }
    if(this.state.password == "") {
      errors.password = "Password is required";
    }
     if(this.state.comments == "") {
      errors.comments = "comment is required";
    }
    console.log(errors);
    return errors;
  }
  _formGroupClass (field) {
    var className = "form-group ";
    if(field) {
      className += " has-error"
    }
    return className;
  }
  render() {
    return (
      <div className=" form-container ">
     
        <form ref='user_form' onSubmit={this._onSubmit.bind(this)}>
          <div className={this._formGroupClass(this.state.errors.firstname)}>
            <label className="control-label" htmlFor="firstname">Firs tname </label>
            <input name="firstname" ref="firstname" type="text" className="form-control" id="firstname" placeholder="Firstname" onChange={this._onChange.bind(this)} />
            <span className="help-block">{this.state.errors.firstname}</span>
          </div>
           <div className={this._formGroupClass(this.state.errors.lastname)}>
            <label className="control-label" htmlFor="lasttname">Lastname </label>
            <input name="lastname" ref="lastname" type="text" className="form-control" id="lastname" placeholder="Lastname" onChange={this._onChange.bind(this)} />
            <span className="help-block">{this.state.errors.lastname}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.email)}>
            <label className="control-label" htmlFor="email">Email address</label>
            <input name="email" ref="email" type="email" className="form-control" id="email" placeholder="Email" onChange={this._onChange.bind(this)} />
            <span className="help-block">{this.state.errors.email}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.password)}>
            <label className="control-label" htmlFor="password">Password</label>
            <input name="password" ref="password" type="password" className="form-control" id="password" placeholder="Password" onChange={this._onChange.bind(this)} />
            <span className="help-block">{this.state.errors.password}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.comments)}>
            <label className="control-label" htmlFor="comments">Comment</label>
            <textarea rows="3" cols="20" name="comments" ref="comments" className="form-control" id="comments" placeholder="Type your comment" onChange={this._onChange.bind(this)} />
            <span className="help-block">{this.state.errors.comments}</span>
          </div>
          <button type="submit" className="btn btn-success" disabled={this.state.loading}  >
              Submit  
            <Loading loading={this.state.loading} />        
          </button>
        </form>
      </div>
    );
  }
}
