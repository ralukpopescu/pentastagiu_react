import React from 'react';
import PropTypes from 'prop-types';

function Input(props){
    return <input type="text" value={props.title} onChange={(event)=>props.handleChangeTitle(event)}/>
}
Input.propTypes = {
    title: PropTypes.string,
    handleChangeTitle: PropTypes.func,
}
export default Input;