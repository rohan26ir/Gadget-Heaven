import React, { useEffect, useState } from 'react';
import { getStoredCart, removeFromStoredCart } from '../../../Utility/addToCart';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

const Carts = () => {

  const [cartList, setCartList] = useState([]);
  const [allCart, setAllCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    document.title = "DashBoard-Wishlist | GadgetHeaven";

    fetch('/device.json')
      .then(res => res.json())
      .then(data => {
        setAllCart(data);
        const storedCartList = getStoredCart().map(id => parseInt(id));
        const cartCartList = data.filter(cart => storedCartList.includes(cart.product_id));
        setCartList(cartCartList);
      }
    )
  }, []);

  const handleDelete = (id) => {
    removeFromStoredCart(id);
    setCartList(prevList => prevList.filter(cart => cart.product_id !== id));
  };

  const totalCost = cartList.reduce((sum, cart) => sum + (cart.price || 0), 0);

  const handleSortByPrice = () => {

    const sortedList = [...cartList].sort((a, b) => (b.price || 0) - (a.price || 0));


    setCartList(sortedList);

  };


  const handlePurchase = () => {
    document.getElementById('purchase_modal').showModal();
  };

  const handleCloseModal = () => {

    setCartList([]);

    cartList.forEach(item => removeFromStoredCart(item.product_id));

    navigate('/');
  };

  return (
    <div>
      <div className='text-center font-bold text-2xl'>
        <div className='flex justify-between mx-3 md:mx-20 my-5'>
          <div>
          <div>Cartlist</div>
          </div>
        <div className='flex gap-2 items-center text-sm'>
        <div>Total cost: ${totalCost.toFixed(2)}</div>
        <div 
          onClick={handleSortByPrice} 
          className="border-2 border-[#9538E2] px-3 py-1 cursor-pointer rounded-3xl">
          Sort by Price
        </div>
        <div 
          onClick={handlePurchase}
          disabled={cartList.length === 0}
          className={`rounded-3xl px-3 py-1 cursor-pointer ${cartList.length === 0 ? 'btn-disabled border-2 border-[#9538E2]' : 'bg-[#9538E2] hover:bg-orange-500'}`}>
          Purchase
        </div>
        </div>
       </div>
      </div>
      
      <div className='flex flex-col gap-5 mt-5'>
        {
        cartList.map(cart => (
          <Cart key={cart.product_id} cart={cart} onDelete={handleDelete}></Cart>
        ))
        }
      </div>


      <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className='flex justify-center'>
          <div>
            <img 
            className=''
            src="./modal.png"
            alt="" />
          </div>
          </div>
          <div className='text-center my-1'>
            <h2 className='text-xl'>Payment Successfully</h2>
            <p className='text-xl'>Thanks for purchasing.</p>
            <p className='text-xl'>Total: ${totalCost.toFixed(2)}</p>
          </div>
          <div 
          className="flex justify-center cursor-pointer mx-10 bg-gray-400 hover:bg-gray-500 rounded-3xl"
               onClick={handleCloseModal}  >
            <div className="px-3 py-1">Close</div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Carts;