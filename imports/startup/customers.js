import Customers from '/imports/api/customers';

import faker from  'faker';

function generateUsers() {
    Customers.insert({ 
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(), 
        email:faker.internet.email(), 
        age:faker.random.number({
            'min': 18,
            'max': 99
        }), 
        createdAt: new Date() });
  }

  Meteor.startup(() => {
    const count = 50;
    if (Customers.find().count() < count) {
        let index=Products.find().count();
        for (index; index < count ; index++) {
            generateUsers();      
        }
    }
  }); 