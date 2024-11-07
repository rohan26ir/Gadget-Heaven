import { toast } from 'react-toastify';

const getStoredWish = () => {
  const storedListStr = localStorage.getItem('read-list');
  return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredWish = (id) => {
  const storedList = getStoredWish();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the read list");
    toast.error("already exists in the Wishlist", { position: "top-center" });
  } else {
    storedList.push(id);
    localStorage.setItem('read-list', JSON.stringify(storedList));
    toast.success("This Device is added to your WishList", { position: "top-center" });
  }
};

const removeFromStoredWish = (id) => {
  const storedList = getStoredWish();
  const updatedList = storedList.filter(itemId => itemId !== id);
  localStorage.setItem('read-list', JSON.stringify(updatedList));
  toast("Remove the Device from Wishlist")
};

export { addToStoredWish, getStoredWish, removeFromStoredWish };
