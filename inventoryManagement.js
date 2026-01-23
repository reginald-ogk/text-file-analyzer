/* Inventory Management System
   This module allows adding, removing, and tracking products in an inventory.
*/

// 1. Empty inventory array
let inventory = [];

// 2. Find product index
function findProductIndex(productName) {
  productName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return i;
    }
  }

  return -1;
}

// 3. Add product
function addProduct(product) {
  product.name = product.name.toLowerCase();
  const index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

// 6. Remove product
function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();
  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(`${productName} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`,
    );
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(
      `Remaining ${productName} pieces: ${inventory[index].quantity}`,
    );
  }
}
