
import React from 'react';
import CompanyManagment from 'CompanyManagment.jsx';

import Header from 'Header.jsx';
import SidebarExample from 'SidebarExample.jsx';
import MyForm from 'MyForm.jsx';
import Nav from 'Nav.jsx';
import Items from 'Items.jsx';
import SideRouter from 'SideRouter.jsx';
import DataTable from 'DataTable.jsx';
import  Ftable from 'Ftable.jsx';
export default class App extends React.Component{
render(){
    return(
        <div>
        <Nav/>
         <Header title="Company Managment"/>
         
         <div className="row">
         <div className="col-md-3 sidebar" >
          <SidebarExample/></div>
         <div className="col-md-9 sidebar" >
         <MyForm/></div>
         </div>
        <div className="row content">
        <CompanyManagment />
        <Items />
        </div>
        
        <SideRouter />

        <DataTable />
        <Ftable />
        </div>
    )
}
}