const shoppingItems = (request, response) => {
  const shoppingListItems = [
    'PS5 🖥️',
    'controllers 🎮',
    'Games CDs 💿',
    'Book 📖'
  ];
  response.send(shoppingListItems);
}


const getBananas = (request, response) => {
  const bananasObj = {
    "bananas": "Bananas are cool! 🍨 🍌"
  };
  response.json(bananasObj);
};


module.exports = {
  shoppingItems,
  getBananas
}