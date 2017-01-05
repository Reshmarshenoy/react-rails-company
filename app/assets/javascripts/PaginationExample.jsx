import React from 'react';
import ReactDom from "react-dom";
// import createFragment from 'react-addons-create-fragment' // ES6
import ReactPaginate from 'react-paginate';
import underscore from 'underscore';

export default class PaginationExample extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[],pageCount:0}
  }
  componentWillMount(){
    var _this = this;
    
    $.ajax({
      url:'https://api.myjson.com/bins/bu27b',
      data:{
        per_page:3,
        page:1
        
      }
    }).then(function(result){
      var page = page || 1,
      per_page =3,
     
      offset =(page-1)* per_page,
      paginatedItems = _.rest(result, offset).slice(0, per_page);
     
      _this.setState({
        data: paginatedItems,
        
        pageCount: Math.ceil(result.length / per_page),
      })
    })
  }
  handlePageClick = (params) =>{
    var _this = this;
    var pageCount = (params.selected + 1)
    $.ajax({
      url:'https://api.myjson.com/bins/bu27b',
      data:{
        per_page:3,
        page:pageCount
        
      }
    }).then(function(result){
       var page = pageCount || 1,
      per_page =3,
     
      offset =(page-1)* per_page,
      paginatedItems = _.rest(result, offset).slice(0, per_page);
      console.log(paginatedItems);
      _this.setState({
        data: paginatedItems,
       pageCount: Math.ceil(result.length / per_page),
       
      })
    })
  }
  render(){
    return (
      <div>
        <div className="page-header ">
          <h2>Pagination Example</h2>
        </div>
        <div className="pagination "> 
          
            <div className="small-12 columns">
              <ItemContainer data={this.state.data}/>
            </div>
          
        
          <div className="row text-center">
            <div className="small-12 column">
                        <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
            </div>
          </div>

      </div>
    )
  }
}
  
class ItemContainer extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {data:this.props.data || []}
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps)
    this.setState({
      data: nextProps.data 
    })
  }
  render(){
    var ItemElements;
   
    if(this.state.data.length > 0){
      ItemElements = this.state.data.map(function(value,index){
        return <ItemElement content={value} key={index}/>
      })
    }
    return (
      <div className="item-container">
        {ItemElements}
        <hr/>
      </div>
    )
  }
}

class ItemElement extends React.Component{
  render(){
    return (
      <div className="small-12 large-3 columns">  
      <h4>
        {this.props.content.name}
      </h4>
      <article>
        {this.props.content.desc}
      </article>
    </div>
    )
  }
}