import { getShoppingCart } from "../utilities/fakedb";
const cartProductsLoader = async () => {
  const loadedProduct = await fetch("products.json");
  const products = await loadedProduct.json();
  // console.log(products);

  // if cart data is in faDatabase, you have to use async await

  const storedCart = getShoppingCart();
  const savedCart = [];
  // console.log(storedCart);
  for (const id in storedCart) {
    // console.log(id);
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  // if you need to send two things
  // option 1 arrray retrn kora

  // return [products, savedCart];
  // 2 obj hisabe
  // return {products,savedCart}
  return savedCart;
};

export default cartProductsLoader;
