import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWish, removeFromStoredWish } from '../../../Utility/addToWish';
import WishList from './WishList';

const Wishlists = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  // console.log("allBook", allBooks);

  useEffect(() => {
    document.title= "DashBoard-Whshlist | GadgetHeaven";


    const storedWishList = getStoredWish().map(id => parseInt(id));

    const wishCartList = allBooks.filter(book => storedWishList.includes(book.product_id));

    setReadList(wishCartList);
  }, [allBooks]);

  const handleDelete = (id) => {

    removeFromStoredWish(id);

    setReadList(prevList =>  prevList.filter(book => book.product_id !== id));
  };

  return (
    <div>
       <div className='text-center font-bold text-2xl'>
       <h3>WishList</h3>
       </div>
      <div className='flex flex-col gap-5'>
        {
        readList.map(book => (
          <WishList key={book.product_id} book={book} onDelete={handleDelete}>
          </WishList>
        ))
        }
      </div>
    </div>
  );
};

export default Wishlists;