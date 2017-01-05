import React from 'react';

export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {cart_num:0}
  }

  componentWillReceiveProps(nextProps){
    console.log("ReCEIVE PROPS")
    console.log(nextProps)
    this.setState({
      cart_num: nextProps.cart_num
    })
  }
  render(){
    return(
      <div className="navigation">
     <nav className="navbar navbar-default">
          <div className="container-fluid">
          <ul className="nav navbar-nav">
          <li ><a href="#">Home</a></li>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">     
          <li>
          <button className="btn btn-info">
          <span className="glyphicon glyphicon-shopping-cart"></span> MyCart <span className="badge"> 
            {this.state.cart_num}
          </span>
          </button></li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
}

