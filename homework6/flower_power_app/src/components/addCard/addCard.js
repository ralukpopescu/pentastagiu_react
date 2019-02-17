import React, { PureComponent } from "react";
import "./addCard.css";
import { saveProduct } from "../../Redux/Actions/products";
import { connect } from "react-redux";

class AddCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      unitPrice: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
    const newProduct = this.state;
    newProduct.photoUrl = '';
    this.props._saveProduct(newProduct);
  }

  onChanged(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }  

  render() {
    return (
      <form >
      <div className="content-card modal">
        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={this.onChanged}
        />
        <label>Description</label>
        <input
          name="description"
          type="text"
          onChange={this.onChanged}
        />
        <input
          name="unitPrice"
          type="text"
          onChange={this.onChanged}
        />
        <button type="submit" onClick={this.onSubmit}>Save</button>
      </div>
      </form>
    );
  }
}
 
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  _saveProduct: (product) => dispatch(saveProduct(product)) 
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddCard);


