import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Content from './components/content/content.js';
import ToDoItems from './components/content/todoitems.js';
import Footer from './components/footer/footer.js';

class App extends Component {
  inputElement = React.createRef()

  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  handleSubmit(){
    //alert(this.state.currentItem.text);
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      console.log(newItem)
      //add the new item to the list of items
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        //clear the currentItem value
        currentItem: { text: '', key: '' },
      })
    }
  }

  handleChange(event){
    console.log('Input changed');
    //modify the state of currentitem with the value from the input 
    const inputValue= event.target.value;
    const currentItem = { text: inputValue, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  render() {
    return (
      <div className="App">
       <Header/>
       <Content handleSubmit= {this.handleSubmit} 
                handleChange={this.handleChange}
                currentItem={this.state.currentItem}/>
       <ToDoItems entries={this.state.items}/>

       <Footer/>
      </div>
    );
  }
}

export default App;
