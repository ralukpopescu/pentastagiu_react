import React, { PureComponent } from "react";
import "./editCard.css";

class EditCard extends PureComponent {

  constructor(props){
    super(props);
    this.state = {name: '', description: ''};
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
  }

  onNameChanged(event){
    console.log("OnNameChanged "+ event.target.value);

    // this.setState(prevState => {
    //   prevState.name = event.target.value;
    //   return prevState;
    // })

    //this.props._setNameProduct(name);
  }

  onDescriptionChanged(event){
    console.log("OnDescriptionChanged "+ event.target.value);

    // this.setState(prevState => {
    //   prevState.description = event.target.value;
    //   return prevState;
    // })
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate productId= "+ this.props.product.id);
    this.setState({
      name: this.props.product.name,
      description : this.props.product.description
    });
    console.log("ComponentDidUpdate name="+ this.state.name+"+description ="+this.state.description);
  }

   render() {
    return (
      <div className="content-card modal">
      <table>
        <tbody>
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <input
              value={this.state.name}
              name="name"
              type="text"
              onChange={this.onNameChanged}
            />
          </td>
          </tr>
          <tr>
          <td> <label>Description</label></td>
          <td>
            <input
            value={this.state.description}
            name="description"
            type="text"
            onChange={this.onDescriptionChanged}/>
          </td>
        </tr>
        </tbody>
      </table>
        <button onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}
 
EditCard.propTypes = {
};
export default EditCard;

