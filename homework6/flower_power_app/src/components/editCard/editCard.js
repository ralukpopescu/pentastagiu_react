import React, { PureComponent } from "react";
import "./editCard.css";
import { setNameProduct, setSaveProduct, setDescriptionProduct } from '../../Redux/Actions/products';
import { connect } from "react-redux";

class EditCard extends PureComponent {

  constructor(props){
    super(props);
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
  }

  onNameChanged(event){
    const name = event.target.value;
    this.props._setNameProduct(name);
    console.log("OnNameChanged name ="+ name);
  }

  onDescriptionChanged(event){
    const description = event.target.value;
    this.props._setDescriptionProduct(description);
    console.log("OnDescriptionChanged "+ description);
  }

  onSave() {
    console.log("OnSave name="+ this.props.product.name);
    this.props._setSaveProduct();
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
              value={this.props.product.name}
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
            value={this.props.product.description}
            name="description"
            type="text"
            onChange={this.onDescriptionChanged}/>
          </td>
        </tr>
        </tbody>
      </table>
        <button onClick={this.onSave}>Save</button>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => ({
  product: state.products.product
});
  
const mapDispatchToProps = (dispatch) => ({
     _setNameProduct: (name) => dispatch(setNameProduct(name)),
     _setDescriptionProduct: (description) => dispatch(setDescriptionProduct(description)),
     _setSaveProduct: () => dispatch(setSaveProduct()),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);


