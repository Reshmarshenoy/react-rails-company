
import React from 'react';

import Add from 'Add.jsx';
import CompanyDetails from 'CompanyDetails.jsx';
import CompanyList from 'CompanyList.jsx';
import PaginationExample from 'PaginationExample.jsx';
import Calender from 'Calender.jsx';

export default class CompanyManagment extends React.Component{
constructor(){
    super();
    this.state = {
        companies:[],
        selectedCompany:{}
};
}

componentDidMount(){
    $.ajax({
        url: 'https://api.myjson.com/bins/c2byr',
        method: 'GET'
    }).then((data) => this.setState({companies:data, selectedCompany:data[0]}));
}

handleAdd(name, desc){
let newComp ={name:name, desc:desc, bgc: '#'+Math.floor(Math.random()*0xffffff).toString(16)};
let companies = this.state.companies;
companies.push(newComp);
this.setState({companies});


}
handleCompanyClick(i){
//console.log(i);
let selectedCompany = this.state.companies[i];
this.setState({selectedCompany});
}

handleCompanyRemove(i){
   // console.log(i);
   let companies = this.state.companies;
   companies.splice(i,1);
   let selectedCompany;
   if (companies.length > 0)
   {
       selectedCompany =companies[0];
   }else{
       selectedCompany ={};
   }
   this.setState({companies,selectedCompany});
}
render(){
    return(
       <div className="company-content">
  
  <h1>Add your company details</h1>
 <Add onAdd={this.handleAdd.bind(this)}/>
 <CompanyList companies={this.state.companies} onCompanyClick={this.handleCompanyClick.bind(this)} onCompanyRemove={this.handleCompanyRemove.bind(this)} />
 <CompanyDetails currentCompany={this.state.selectedCompany}/>
 <PaginationExample />
 <Calender  />


        </div>
    )
}
}