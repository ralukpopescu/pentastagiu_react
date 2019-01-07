import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItems extends Component {
  createList(item) {
    return <li key={item.key}>{item.text}</li>
  }
  render() {
    const toDoEntries = this.props.entries
    const listItems = toDoEntries.map(this.createList)

    return <div className="toDoItems"><ul>{listItems}</ul></div>
  }
}
  
ToDoItems.propTypes={
    entries:PropTypes.array,
}

export default ToDoItems;