import Products from '/imports/api/products';
import faker from 'faker';

function generateProducts() {
    Products.insert({ 
        productName:faker.commerce.productName(),
        price:faker.commerce.price(),
        createdAt: new Date() });
  }

  Meteor.startup(() => {
    const count = 10;
    if (Products.find().count() < count) { 
        let index=Products.find().count(); 
        for (index; index < count ; index++) {
            generateProducts();      
        }
    }
  });