'use strict';

//Do not change any of the function names

function makeCat(name, age) {
  return {
    name: name,
    age: age,
    meow: function() {
      return 'Meow!';
    },
  };
}

function addProperty(object, property) {
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  return {
    name: name,
    email: email,
    password: password,
  };
}

function hasEmail(user) {
  return Boolean(user.email);
}

function hasProperty(object, property) {
  return property in object;
}

function verifyPassword(user, password) {
  return password === user.password;
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  for (var i in users) {
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  var total = 0;
  for (var i in user.posts) {
    total += user.posts[i].likes;
  }
  return total;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
    return this.price * (1 - this.discountPercentage);
  };
  return storeItem;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
