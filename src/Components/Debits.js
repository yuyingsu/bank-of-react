import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import Debit from './Debit';

class Debits extends Component {
  
    state = {
        data: [],
        debits:[],
        amount: 0,
        description: "",
        balance: this.props.accountBalance
    }
  
    
  componentDidMount= () =>{
    fetch('https://moj-api.herokuapp.com/debits')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  zipData = () =>{
    this.state.data.forEach(element => {
    const debit = {
        description:element["description"],
        date:element["date"],
        amount:element["amount"]
      }
      this.state.debits.push(debit);
    });
  }

  addDebit = (e) =>{
    e.preventDefault();
    const  debit = {
      amount: this.state.amount,
      description: this.state.description,
      date: new Date().toDateString()
    }
    const newDebits = [...this.state.debits,debit];
    this.setState({debits:newDebits, balance:parseFloat(this.state.balance)+parseFloat(this.state.amount)});
  }

  enterAmount = (e) =>{
    this.setState({amount: e.target.value});
  }

  enterDescription = (e) =>{
    this.setState({description: e.target.value});
  }
  render() {
    if(this.state.debits.length===0){
      this.zipData();
    }
    const res=this.state.debits.map((debit, index) => (
        <Debit
          description={debit.description}
          date={debit.date}
          amount={debit.amount}
          key={index}
        />));

    return (

        <div>
            <h1>Debits</h1>
            <form>
            <label>Amount:</label><br/>
            <input type="text" onChange={this.enterAmount}/><br/>
            <label>Description:</label><br/>
            <input type="text"onChange={this.enterDescription}/><br/>
            <input type="submit" value="Submit" onClick={this.addDebit}/>
            </form>
            {res}
            <AccountBalance accountBalance={this.state.balance}/>
        </div>
    );
  }
}

export default Debits;