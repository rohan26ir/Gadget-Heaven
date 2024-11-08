import { toast } from 'react-toastify';

const getStoredWish = () => {
  const storedListStr = localStorage.getItem('wish-list');
  return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredWish = (id) => {
  const storedList = getStoredWish();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the wish list");
    toast.error("Already exists in the Wishlist", { position: "top-center" });
  } else {
    storedList.push(id);
    localStorage.setItem('wish-list', JSON.stringify(storedList));
    toast.success("This Device is added to your WishList", { position: "top-center" });
  }
};

const removeFromStoredWish = (id) => {
  const storedList = getStoredWish();
  const updatedList = storedList.filter(itemId => itemId !== id);
  localStorage.setItem('wish-list', JSON.stringify(updatedList));
  toast("Remove the Device from Wishlist")
};

export { addToStoredWish, getStoredWish, removeFromStoredWish };
