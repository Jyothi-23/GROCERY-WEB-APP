let cart = [];
function addToCart(item) {
  cart.push(item);
  alert(${item} has been added to your cart!);
  console.log("Current Cart:", cart);
}
function viewCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Items in your cart: " + cart.join(", "));
  }
}