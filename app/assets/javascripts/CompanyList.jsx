
import React from 'react';
import Company from 'Company.jsx';
export default class CompanyList extends React.Component{
    onCompanyClick(i){
        this.props.onCompanyClick(i);

    }

    onCompanyRemove(i){
          this.props.onCompanyRemove(i);
    }
render(){
    return(
        <div className="row">
        {this.props.companies.map(function(companyItem,i){
            return <Company key={i} name={companyItem.name} bgc={companyItem.bgc} 
            onCompClick={this.onCompanyClick.bind(this,i)}  onCompRemove={this.onCompanyRemove.bind(this,i)}/>
        },this)}
     
        </div>
    )
}
}