//import React from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './editCard.css';


class EditCard extends Component{

    constructor(props){
        super(props);
        this.onNameChanged = this.onNameChanged.bind(this);
    }

    render(){
        return(
            <div className="editForm">
                <input value={this.props.name} type="text" onChange={this.onNameChanged}/>
                <button>Save</button>
            </div>)
    }

    onNameChanged(event){
        // const name = event.target.value;
        // this.setState(prevState => {
        //   prevState.dataById.name = name;
        //   return prevState;
        // })
        console.log("Selected flower= "+this.props.selectedFlower.id);
        console.log("OnNameChanged "+ event.target.value);
    }
}

EditCard.propTypes={
    name: PropTypes.string,
    dataById: PropTypes.object,
    selectedFlower : PropTypes.object
}
export default EditCard;