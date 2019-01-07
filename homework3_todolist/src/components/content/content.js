import React, { Component } from 'react';
import './content.css';
import PropTypes from 'prop-types';

class Content extends Component{

    render() {
        return (
            <div className="content">
                <form onSubmit={() => this.props.handleSubmit()}>
                    <input placeholder="Task"  value={this.props.currentItem.text} onChange={(event)=>this.props.handleChange(event)}/>
                    <button type="submit"> Add Task </button>
                </form>
            </div>
        )
    }
}

Content.propTypes={
    handleSubmit: PropTypes.func,
    handleChange:PropTypes.func,
    currentItem:PropTypes.object,
}

export default Content;