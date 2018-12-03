import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
//import { withQuery } from 'meteor/cultofcoders:grapher-react';
import ProductsDb from '../api/products';
import OrdersDb from '../api/orders';

class Orders extends Component {
  state={
    ordered:[]
  }
  render() {
    const orders = this.props.orders.map(order=>this.listOrders(order))
    const products = this.props.products.map(product => this.listProduct(product));

    return (
      <div>
        <h2>Product list</h2>
        <ul>{ products }</ul>
        <button onClick={()=>this.orderAll(this.state.ordered)}>Order All</button>
        {orders.length>0&&
          <div>
            <h2>Orders</h2>
            {orders}
          </div>
        }
      </div>
    );
  }
  orderAll(productIds){
    Meteor.call('orders.insert', productIds);
  }
  removeOrder(orderId){
    Meteor.call('orders.remove', orderId);
  }
  addProduct(productOrdered){
    if(this.state.ordered.includes(productOrdered)){
      this.setState(prevState => ({ ordered: prevState.ordered.filter(ordered => ordered !== productOrdered) }))
      return;
    }
    this.setState({ordered:[...this.state.ordered,productOrdered]})
  }
  listProduct(product) {
    return (
      <li key={product._id}>
        <span>{product.productName}</span>
        <span>{product.price}</span>
        <button onClick={()=>this.addProduct(product._id)}>{this.state.ordered.includes(product._id)?'Added':'Add'}</button>
      </li>
    );
  }

  listOrders(order) {
    return (
      <li key={order._id}>
        <span>{`Orders nr. ${order._id}`}</span>
        <button onClick={()=>this.removeOrder(order._id)}>Remove</button>
      </li>
    );
  }
}

export default Orders = withTracker(() => {
  return {
    products: ProductsDb.find().fetch(),
    orders: OrdersDb.find().fetch(),
  };
})(Orders);

