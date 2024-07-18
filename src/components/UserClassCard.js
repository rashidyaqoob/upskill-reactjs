import React from "react";

export class UserClassCard extends React.Component {
  render() {
    console.log(this);
    return (
      <div class="card">
        <h2 class="name">{this.props.name}</h2>
        <div class="body">
          <div class="label">Age:</div>
          <div>{this.props.age}</div>
          <div class="label">Phone:</div>
          <div>{this.props.phoneNumber}</div>
          <div class="label">Address:</div>
          <div>{this.props.address}</div>
        </div>
      </div>
    );
  }
}
