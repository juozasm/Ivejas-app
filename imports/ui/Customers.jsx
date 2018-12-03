import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CustomersDb from '../api/customers';
import Orders from './Orders';
import {Link} from 'react-router-dom'
class Customers extends Component {
  render() {
    const {id} = this.props.match.params;
    const customers = this.props.customers.filter(
      customer => {
        if (!id) return customer;
        return id === customer._id   
     } 
    ).map(customer=>this.listCustomers(customer));
        return (
        <div>
            <h2>Customer list</h2>
            <ul>{ customers }</ul>
            {customers.length===1&&<Orders customersId={customers[0]._id}/>}
        </div>
        )

  }

  listCustomers(customer) {
    return (
      <li key={customer._id}>
        <Link to={`customers/${customer.firstName}/${customer._id}`}>
          <span>{customer.firstName}</span>
          <span>{customer.lastName}</span>
        </Link>
      </li>
    );
    };
 
}

export default customersContainer = withTracker(() => {
  return {
    customers: CustomersDb.find().fetch(),
  };
})(Customers);
