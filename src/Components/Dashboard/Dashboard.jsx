import DashNav from './Dash/DashNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className='bg-[#9538E2] p-5 text-center text-white'>
        <h2 className='text-4xl font-bold my-5'>Dashboard</h2>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>

              
      </div>
      <div>
        <DashNav></DashNav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;