import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import Debit from './Debit';
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
class Debits extends Component {

  enterAmount = (e) =>{
    this.props.inputAmount(e.target.value);    
  }

  enterDescription = (e) =>{
    this.props.inputDescription(e.target.value);     
  }

  render() {
    const res=this.props.debits.map((debit, index) => (
        <Debit
          description={debit.description}
          date={debit.date}
          amount={debit.amount}
          key={index}
        />));

    return (
        <div>
            <h1>Debits</h1>
            <Table dark>
            <thead>
            <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {res}
            </tbody>
            </Table>
            <form>
            <div class="form-group">
            <label for="amount">Amount:</label>
            <input type="amount" class="form-control" id="amount" aria-describedby="amount" placeholder="Enter Amount"
            onChange={this.enterAmount}/>
            </div>
            <div class="form-group">
            <label for="description">Description:</label>
            <input type="description" class="form-control" id="descriptiont" aria-describedby="description" 
            placeholder="Enter Description" onChange={this.enterDescription}/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={this.props.addDebit}>Submit</button>
            </form><br/>
            <AccountBalance accountBalance={this.props.accountBalance}/>
            <Link to="/">Home</Link>
        </div>
    );
  }
}

export default Debits;