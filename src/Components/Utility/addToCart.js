import { toast } from 'react-toastify';

const getStoredCart = () => {
  const storedListStr = localStorage.getItem('cart-list');
  return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredCart = (id) => {
  const storedList = getStoredCart();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the cart list");
    toast.error("already exists in the Cart List", { position: "top-center" });
  } else {
    storedList.push(id);
    localStorage.setItem('cart-list', JSON.stringify(storedList));
    toast.success("This Device is added to your CartList", { position: "top-center" });
  }
};

const removeFromStoredCart = (id) => {
  const storedList = getStoredCart();
  const updatedList = storedList.filter(itemId => itemId !== id);
  localStorage.setItem('cart-list', JSON.stringify(updatedList));
  toast("Remove the Device from Cartlist")
};

export { addToStoredCart, getStoredCart, removeFromStoredCart };