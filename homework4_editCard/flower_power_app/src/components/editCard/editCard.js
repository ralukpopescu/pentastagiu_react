//import React from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './editCard.css';


class EditCard extends Component{

    constructor(props){
        super(props);
        this.state = {selectedItemName: ''};
        this.onNameChanged = this.onNameChanged.bind(this);
    }

    componentDidMount = async () => {
        const response = await fetch('/products/'+ this.props.id);
        const data = await response.json();
        console.log("ComponentDidMount "+ data.id+" " + data.name+" "+data.unitPrice);
        this.setState({
          selectedItemName: data.name,
        });
      }

    render(){
        return(
            <div className="editForm">
                <input value={this.state.selectedItemName} type="text" onChange={this.onNameChanged}/>
                <button className="saveButton">Save</button>
            </div>)
    }

    onNameChanged(event){
        const name = event.target.value;
        this.setState(prevState => {
          prevState.selectedItemName = name;
          return prevState;
        })
        console.log("OnNameChanged "+ event.target.value);
    }
}

EditCard.propTypes={
    id : PropTypes.number,
}
export default EditCard;