// Write your solution in this file!
var customerName = 'bob'; // declared in global scope

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // modifies the global customerName variable
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // declared and assigned in global scope
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer; // modifies the global bestCustomer variable
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'xyz'; // declared and assigned in local scope
  leastFavoriteCustomer = 'abc'; // reassigns the local variable, but does not affect global scope
}