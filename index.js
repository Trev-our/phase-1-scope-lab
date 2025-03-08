// Declare global variables "costomer name" using var keyword
var customerName = "bob";

// Function  to upper case the customer name
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set 'bestCustomer' in global scope
function setBestCustomer() {
    bestCustomer = "not bob"; // Implicitly global (not recommended in practice)
  }
  
  // Function to overwrite 'bestCustomer'
  function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
  }
  
  // Declare a constant in global scope
  const leastFavoriteCustomer = "someone";
  
  // Function to attempt changing the constant
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "someone else"; // This will throw an error
  }
