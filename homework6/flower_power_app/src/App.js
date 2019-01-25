import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import './App.css';
import { connect } from "react-redux";
import { getProducts, setSaveProduct, setNameProduct, deleteProduct } from './Redux/Actions/products';
import { startEditProduct, finishEditProduct } from './Redux/Actions/ui';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onSave = this.onSave.bind(this);
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
 
  onSave() {
    this.props._setSaveProduct();
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header />
      {
        this.props.ui.productEdit ? 
          <EditCard onSave={this.onSave} product={this.props.product}/> : 
          this.props.ui.showSpinner ? 
            <div className="loading-spinner"><div></div><div></div><div></div><div></div></div>
          : 
          <Content 
            handleClick={this.handleClick} 
            handleDelete = {this.handleDelete}
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
    _finishEditProduct: () => dispatch(finishEditProduct()),
    _setSaveProduct: () => dispatch(setSaveProduct()),
    _setNameProduct: (name) => dispatch(setNameProduct(name)),
    _deleteProduct: (id) => dispatch(deleteProduct(id))
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
