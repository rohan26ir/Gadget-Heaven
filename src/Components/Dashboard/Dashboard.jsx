import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from './Dash/Cart';
import WishList from './Dash/WishList';

const Dashboard = () => {
  return (
    <div>
      <div className='bg-[#9538E2] p-5 text-center text-white'>
        <h2 className='text-4xl font-bold my-5'>Dashboard</h2>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>


        
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Cart</Tab>
            <Tab>Wishlist</Tab>
          </TabList>
      <div className='mb-40'></div>
          <TabPanel>
            <h2>Any content Cart</h2>
            <Cart></Cart>
          </TabPanel>
          <TabPanel>
            <h2>Any content WishList</h2>
            <WishList></WishList>
          </TabPanel>
        </Tabs>
        </div>
    </div>
  );
};

export default Dashboard;