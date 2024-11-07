import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWish, removeFromStoredWish } from '../../../Utility/addToDash';
import WishList from './WishList';

const Wishlists = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    document.title= "DashBoard-Whshlist | GadgetHeaven";
    const storedReadList = getStoredWish().map(id => parseInt(id));
    const readBookList = allBooks.filter(book => storedReadList.includes(book.product_id));
    setReadList(readBookList);
  }, [allBooks]);

  const handleDelete = (id) => {

    removeFromStoredWish(id);
    setReadList(prevList =>  prevList.filter(book => book.product_id !== id));
  };

  return (
    <div>
       <div className='text-center font-bold text-2xl'>
       <h3>WishList</h3>
       <h2>Lingth: {readList.length}</h2>
       </div>
      <div className='flex flex-col gap-5'>
        {readList.map(book => (
          <WishList key={book.product_id} book={book} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
};

export default Wishlists;