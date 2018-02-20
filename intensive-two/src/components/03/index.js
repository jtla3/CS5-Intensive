import React, { Component } from "react";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {};
  }
    componentDidMount() {
      this.setState({ title: this.props.title });
  }
  render() {
    return <div className="Title">{this.state.title}</div>;
  }
}
