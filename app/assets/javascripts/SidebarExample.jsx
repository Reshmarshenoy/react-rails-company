import React from 'react';



export default class SidebarExample extends React.Component{
   constructor(){
    super()
    this.state = {
      active: false 
    }
  }
  render(){
    return(
      <div className=" sidebar">
        <div className="vertical menu">
        <ul>
          <SidebarLinks href="#" name="Motorola"/>
          <SidebarLinks href="#" name="Sony"/>
          <SidebarLinks href="#" name="Lenovo"/>
          <SidebarLinks href="#" name="Asus"/>
          <SidebarLinks href="#" name="Dell"/>
          <SidebarLinks href="#" name="Motorola"/>
          <SidebarLinks href="#" name="Sony"/>
          <SidebarLinks href="#" name="Lenovo"/>
          <SidebarLinks href="#" name="Asus"/>
          <SidebarLinks href="#" name="Dell"/>
          </ul>
        </div>
      </div>
    )
  }
}


 class SidebarLinks extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <li>
        <ATag href={this.props.href} name={this.props.name}/>
      </li>
    )
  }
}

class ATag extends React.Component{
  render(){
    return(
       <div className="letter">
      <a href={this.props.href} aria-label={this.props.ariaLabel} >
      {this.props.name}
      </a>
      </div>
    )
  }
}

class ATagWithIcon extends React.Component{
  render(){
    return(
      
      <a href={this.props.href} aria-label={this.props.ariaLabel}>
      <span className={this.props.iconClass}></span>
      {this.props.name}
      </a>
    )
  }
}