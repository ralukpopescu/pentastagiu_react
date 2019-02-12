import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import './App.css';
import { connect } from "react-redux";
import { getProducts, deleteProduct } from './Redux/Actions/products';
import { startEditProduct } from './Redux/Actions/ui';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
   // this.addToCartClick = this.addToCartClick.bind(this);
  }

  componentDidMount(){
    this.props._getAllProducts();
  }
  componentDidUpdate(){
  }

  handleClick(id) {
    this.props._startEditProduct(id);
  }

  handleDelete(id){
    this.props._deleteProduct(id);
  }
 
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header />
      {
          this.props.ui.productEdit ? 
          <EditCard product={this.props.product}/> : 
          this.props.ui.showSpinner ? 
            <div className="loading-spinner"><div></div><div></div><div></div><div></div></div>
          : 
          <Content 
            handleClick={this.handleClick} 
            handleDelete = {this.handleDelete}
            //addToCartClick = {this.addToCartClick}
            allData={this.props.products}
            product={this.props.product} 
          />
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  ui: state.ui,
  product: state.products.product,
});
  
const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts()),
    _startEditProduct: (id) => dispatch(startEditProduct(id)),
    _deleteProduct: (id) => dispatch(deleteProduct(id))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
