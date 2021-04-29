import React, { Component } from "react";

import "./Info.css";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    const infoClass =
      this.state.visible === true
        ? "info__modal info__modal--visible"
        : "info__modal";

    return (
      <div className="info">
        <span onClick={() => this.toggleVisible()}>Opis</span>
        <div className={infoClass}>
          <span className="info__close" onClick={() => this.toggleVisible()}>
            Zamknij
          </span>
          {this.props.children}
        </div> 
      </div>
    );
  }
}

export default Info;