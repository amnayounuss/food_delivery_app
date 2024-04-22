// MyOrders.js
import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const { user } = useUser();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    if (user) {
      GetUserOrders();
    }
  }, [user]);

  const GetUserOrders = async () => { 
    try {
      const resp = await GlobalApi.GetUserOrders(user?.primaryEmailAddress.emailAddress); 
      setOrderList(resp?.orders); 
    } catch (error) {
      console.error("Error fetching user orders:", error); 
    }
  };

  return (
    <div>
      <h2 className='font-bold text-lg'>My Orders</h2> 
      <div>
        {orderList && orderList.length > 0 ? ( 
          orderList.map((order, index) => (
            <div key={index}>
              <h2>{moment(order.createdAt).format('DD-MMM-yyyy')}</h2>
            </div>
          ))
        ) : (
          <p>No orders found.</p> 
        )}
      </div>
    </div>
  );
};

export default MyOrders;
