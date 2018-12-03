import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Orders = new Mongo.Collection('orders');

Meteor.methods({
    'orders.insert'(productIds) {
      check(productIds, Array);
   
      // Make sure the user is logged in before inserting a task
      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }
   
      Orders.insert({
        productIds,
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
      });
    },
    'orders.remove'(orderId) {
      check(orderId, String);
      Orders.remove(orderId);
    }
  });