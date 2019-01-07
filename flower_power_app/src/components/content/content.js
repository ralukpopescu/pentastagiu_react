import React, { Component } from 'react';
import './content.css';
import Card from '../card/card';
import Input from '../input/input';
import PropTypes from 'prop-types';

class Content extends Component{
  
    render() {
        console.log('Card', this.props);

        const callback = function(item){
            return <Card key={item.id} name={item.name} handleClick={this.props.handleClick}/>
        }
        return (
        <div className="content">
          <Input title={this.props.title} handleChangeTitle={this.props.handleChangeTitle}/> 
          <Card name={this.props.name} handleClick={this.props.handleClick}/>
          {this.props.allData.map(callback, this)} 
          {/* this = scopul in care se va exec callback */}
        </div> 
        )
    }
}
Content.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
}
export default Content;