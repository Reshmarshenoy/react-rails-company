import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
 
export default class Ftable extends React.Component {
 
  constructor(props) {
     
    super(props);
    
      this.rows = [{"id":1,"first_name":"William","last_name":"Elliott","email":"welliott0@wisc.edu",
             "country":"Argentina","ip_address":"247.180.226.89"},
              {"id":2,"first_name":"Carl","last_name":"Ross","email":"cross1@mlb.com",
             "country":"South Africa","ip_address":"27.146.70.36"},
              {"id":3,"first_name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com",
             "country":"Colombia","ip_address":"103.52.74.225"}]
             // more data
             this.state = {
                 filteredDataList: this.rows,
               
    }
  }
  _renderHeader(label, cellDataKey) {
   
    return (<div>
        <span>{label}</span>
          <div>
            <br />
            <input style={{width:90+'%'}} onChange={this._onFilterChange.bind(this, cellDataKey)}/>
          </div>
      </div>)
}
 
_onFilterChange(cellDataKey, event) {
  if (!event.target.value) {
    this.setState({
      filteredDataList: this.rows,
    });
  }
  var filterBy = event.target.value.toString().toLowerCase();
  var size = this.rows.length;
  var filteredList = [];
  for (var index = 0; index < size; index++) {
    var v = this.rows[index][cellDataKey];
    if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
      filteredList.push(this.rows[index]);
    }
  }
  this.setState({
    filteredDataList: filteredList,
  });
}

 
  render() {
     
      return (<Table
        height={40+((this.state.rows.length+1) * 30)}
        width={1150}
        rowsCount={this.state.rows.length}
        rowHeight={30}
        headerHeight={30}
        rowGetter={function(rowIndex) {return this.state.rows[rowIndex]; }.bind(this)}>
        
      <Column dataKey="id" width={50} label="id"  
     headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="first_name" width={200} label="First Name" />
        <Column  dataKey="last_name" width={200} label="Last Name" />
        <Column  dataKey="email" width={400} label="e-mail" />
        <Column  dataKey="country" width={300} label="Country" />
      </Table>)
  }
}
 