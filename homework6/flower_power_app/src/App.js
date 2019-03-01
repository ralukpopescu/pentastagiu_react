import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/addCard';
import './App.css';
import { connect } from "react-redux";
import { getProducts, deleteProduct } from './Redux/Actions/products';
import { startEditProduct } from './Redux/Actions/ui';
import Button from '@material-ui/core/Button';
import { Route, Switch } from 'react-router-dom';

const NotFound = (props) => (
  <h2>Page not found</h2>
);

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addCard=this.addCard.bind(this);
  }

  componentDidMount(){
    this.props._getAllProducts();
  }
  componentDidUpdate(){
  }

  handleClick(id) {
    this.props._startEditProduct(id);
    this.props.history.push(`/product/${id}`);
  }

  handleDelete(id){
    this.props._deleteProduct(id);
  }

  addCard(){
    this.props.history.push('/add-product');
  }
 
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header />
      <Switch>
          <Route path="/add-product" component={AddCard}/>
          <Route path="/product/:productId" component={() => (
            <EditCard product={this.props.product} 
                      history = {this.props.history}/>
          )}/>
          <Route exact path="/" component={() =>(
            <Content 
              handleClick={this.handleClick} 
              handleDelete = {this.handleDelete}
              allData={this.props.products}
              product={this.props.product}
          />)}
          />
          <Route path="*" component={NotFound}/>
        </Switch>
        <Button size="small" color="primary" onClick={this.addCard}>
          Add card
        </Button>
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
