// ===============================
// Global helper functions
// ===============================
window.ForEach = function(array, callback) {
  if (array === null) return;
  // Loop each item...
  for (var i = 0; i < array.length; i++) {
    // Pass the item back to the function
    callback(array[i]);
  }
};

export default {};
