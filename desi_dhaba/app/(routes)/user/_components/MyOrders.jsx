// MyOrders.js
import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {orderList && orderList.length > 0 ? (
          orderList.map((order, index) => (
            <div className='p-3 border rounded-lg flex flex-col gap-3' key={index}>
              <h2 className='font-bold'>{moment(order.createdAt).format('DD-MMM-yyyy')}</h2>
              <h2 className='flex text-sm justify-between'>Order Total Amount : <span>$ {order.orderAmount}</span></h2>
              <h2 className='flex text-sm justify-between'>Address: <span> {order.address}, {order.zipCode}</span></h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger><h2 className='text-primary underline text-sm'>View Order Detail</h2></AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-3'>
                      {order?.orderDetail && typeof order.orderDetail === 'object' && (
                        <div>
                          <h2>{order.orderDetail.name}</h2>
                          <h2>${order.orderDetail.price}</h2>
                        </div>
                      )}
                      <hr />
                      <h2 className='font-bold justify-between text-md mt-2'>Total Order Amount (Including Taxes + Delivery): <span>$ {order.orderAmount}</span> </h2>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

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
