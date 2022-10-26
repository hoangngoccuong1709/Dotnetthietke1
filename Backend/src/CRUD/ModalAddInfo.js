import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../lib/emitter";

class modalUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.listenerEmitter();
  }
  componentDidMount() {}
  //   toggle = () => {
  //     this.props.putToggleUser();
  //   };

  handleOnchangeInput = (e, id) => {
    //good code :))
    let copystate = { ...this.state };
    copystate[id] = e.target.value;
    this.setState({
      ...copystate,
    });
  };

  checkValiadateInput = () => {
    let isValidate = true;
    let arr = ["name", "email", "message"];
    for (let i = 0; i < arr.length; i++) {
      if (!this.state[arr[i]]) {
        alert("missing perameter " + arr[i]);
        isValidate = false;
        break;
      }
    }
    return isValidate;
  };
  handleAddNewUser = () => {
    let isValidate = this.checkValiadateInput();
    if (isValidate == true) {
      this.props.createNewUser(this.state);
      console.log("ok");
      console.log("model", this.state);
    }
  };

  listenerEmitter = () => {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  };
  render() {
    console.log("xxxxx", this.props.isOpen);
    return (
      <div className="xxxxx">
        <Modal
          isOpen={true}
          toggle={() => this.toggle()}
          size="lg"
          className="modal-user-container"
        >
          <ModalHeader toggle={() => this.toggle()}>
            Create new user
          </ModalHeader>
          <ModalBody>
            <div className="modal-user-body">
              <div className="input-container">
                <label>Email</label>
                <input
                  autocomplete="off"
                  type="text"
                  onChange={(e) => this.handleOnchangeInput(e, "email")}
                  value={this.state.email}
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  autocomplete="new-password"
                  type="password"
                  onChange={(e) => this.handleOnchangeInput(e, "password")}
                  value={this.state.password}
                />
              </div>
              <div className="input-container">
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => this.handleOnchangeInput(e, "firstName")}
                  value={this.state.firstName}
                />
              </div>
              <div className="input-container">
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => this.handleOnchangeInput(e, "lastName")}
                  value={this.state.lastName}
                />
              </div>
              <div className="input-container maxwidth-input">
                <label>Address</label>
                <input
                  type="text"
                  onChange={(e) => this.handleOnchangeInput(e, "address")}
                  value={this.state.address}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="btn btn-primary"
              onClick={() => this.handleAddNewUser()}
              className="px-3"
            >
              Add new
            </Button>
            <Button
              color="btn btn-secondary"
              onClick={() => this.toggle()}
              className="px-3"
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(modalUsers);
