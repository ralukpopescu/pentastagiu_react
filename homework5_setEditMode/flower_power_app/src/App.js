import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import { connect } from "react-redux";
import './App.css';
import { startEdit } from './Redux/Actions/ui';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onSave = this.onSave.bind(this);
    this.state = {
      name: 'Bogdan',
      allData: [],
      title: 'Super Bogdan',
      setEditMode: false,
      dataById: {}
    }
  }

  componentDidMount = async () => {
    const response = await fetch('/products');
    const data = await response.json();
    this.setState({
      allData: data
    });
  }
  componentDidUpdate(){
    console.log("EditMode="+ this.state.setEditMode)
  }
  handleClick(id) {
    this.setState((prevState) => {
      let data = {};
      const newData = prevState.allData.map((item) =>{
       if(item.id === id){
         data = item;
       }
       return item;
      });
      return {
        dataById: data,
        allData: newData,
        setEditMode: true,
      }
    }
    );
    console.log("HandleClick on flower with id="+id)
  }

  onSave(){
    //this.props._startSave();
    this.props._startEdit();
    console.log("Handle on save")
  }
  
  render() {
    console.log('Render in app.js')
    return (
      <div className="App">
      <Header />
      {this.state.setEditMode ? 
          <EditCard id = {this.state.dataById.id}
                     onSave = {this.onSave}/> :

          <Content name={this.state.name} 
                  handleClick={this.handleClick} 
                  allData={this.state.allData} 
                  title={this.state.title}
                  handleChangeTitle={()=> {}}
          />
      }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => ({
    //_startSave : ()=> dispatch(showLoader),
    //_stopSave : ()=> dispatch(hideLoader),
    _startEdit : () => dispatch(startEdit),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
