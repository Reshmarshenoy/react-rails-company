import React from 'react';


export default class Page extends React.Component {
   constructor(props) {
    super(props);
    this.state = { name: 'Sam ',point:0 };
    this.changeNumber = this.changeNumber.bind(this)
  }
  changeNumber(calla){
    console.log("="+calla);
    this.setState({point: calla})
    console.log("FROM PARENT")
  }

render() {
   return (
  <div className="wrapper">
   
    <div className="container">
    <div className="row">
     <Nav />
      <ContentSection changenum={this.changeNumber}/>
   <Items />
      </div>
    </div>
  </div>
)
 }
 }


 class MyButton extends React.Component{
  constructor(props){
    super(props)
    this.state = {number : 0}
  }
  increments(){
      this.setState({
        number: (this.state.number+1)
      }, function(){
        this.props.changenum(this.state.number)
      });
      
  }
  render(){
    return (
      <div>
        <button onClick={this.increments.bind(this)} className="btn btn-primary btn-md">Add To Cart</button>
      </div>
    )
  }
}

class ContentSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {cartNum:0,data1: [1,2,3]}
    this.changeNumber = this.changeNumber.bind(this)
  
  }

  changeNumber(){
    this.setState({
      cartNum: this.state.cartNum+1
    }, function(){
      this.props.changenum(this.state.cartNum)
    })
  } 
  render(){
    return(
   
          <MyButton changenum={this.changeNumber}></MyButton>      
 
  
    )
  }
}

 class Items extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[],pageCount:0}
  }
  componentWillMount(){
    var _this = this;
    
    $.ajax({
      url:'https://api.myjson.com/bins/b9rkj',
      data:{
        per_page:1,
        page:1
        
      }
    }).then(function(result){
      var page = page || 1,
      per_page =1,
     
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
      url:'https://api.myjson.com/bins/b9rkj',
      data:{
        per_page:1,
        page:pageCount
        
      }
    }).then(function(result){
       var page = pageCount || 1,
      per_page =1,
     
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
          <h2>Items</h2>
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
      <div className="small-12 large-6 columns text-center items">  
      <img src={this.props.content.image} height="300" width="200"></img>
      <h4>
        {this.props.content.name}
      </h4>
      <article>
        {this.props.content.offer}
      </article>
       <MyButton changenum={this.changeNumber}></MyButton>   
    </div>
    )
  }
}