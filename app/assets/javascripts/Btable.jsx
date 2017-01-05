import React from 'react';
import {ReactBsTable,BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



  export default class Btable extends React.Component{
       constructor(props) {
    super(props);

    this.state = {
        products : [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }]
         
    };
  }
      render(){
          return(
              <BootstrapTable data={products} striped hover>
      <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
  </BootstrapTable>
          )
      }
  }