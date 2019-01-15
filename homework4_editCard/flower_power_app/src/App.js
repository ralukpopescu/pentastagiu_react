import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    console.log('Render in app.js')
    return (
      <div className="App">
      <Header />
      {this.state.setEditMode ? 
          //  <EditCard {...this.state.dataById}
          //           itemId = {this.state.dataById}/> : 
          <EditCard id = {this.state.dataById.id}/> :

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

export default App;
