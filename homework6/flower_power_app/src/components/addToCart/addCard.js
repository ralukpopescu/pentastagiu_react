import React, { PureComponent } from "react";


class AddCard extends PureComponent {
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

  onSave() {
    console.log("OnSave name="+ this.props.product.name);
    this.props._setSaveProduct();
  }

  onDescriptionChanged(event){
    console.log("OnDescriptionChanged "+ event.target.value);
  }

  render() {
    console.log("Add card render product= "+ this.props.product);
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
     _setSaveProduct: () => dispatch(setSaveProduct()),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);


