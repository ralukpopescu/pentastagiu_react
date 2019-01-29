import React, { PureComponent } from "react";
import "./editCard.css";
import { connect } from "react-redux";

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
  }

  onDescriptionChanged(event){
    console.log("OnDescriptionChanged "+ event.target.value);

    // this.setState(prevState => {
    //   prevState.description = event.target.value;
    //   return prevState;
    // })
  }

  componentDidMount(){
    console.log("componentDidMount product= "+ this.props.product);
    this.setState({
      name: this.props.product.name,
      description : this.props.product.description
    });
    console.log("componentDidMount name="+ this.state.name+"+description ="+this.state.description);
  }

  render() {
    console.log("Edit card render product= "+ this.props.product);
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
 
const mapStateToProps = (state) => ({
  product: state.products.product,
});
  
const mapDispatchToProps = (dispatch) => ({
    // _setSaveProduct: () => dispatch(setSaveProduct()),
    // _setNameProduct: (name) => dispatch(setNameProduct(name)),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);


