import React, {Component} from 'react';

class Credit extends Component {
  render() {
    return (
        <tr>
        <td>{this.props.amount}</td>
        <td>{this.props.date}</td>
        <td>{this.props.description}</td>
        </tr>
    );
  }
}

export default Credit;