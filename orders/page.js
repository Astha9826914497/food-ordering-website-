'use client';

import {useProfile, userProfile} from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs";
import {dbTimeForHuman} from "@/libs/datetime";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const {loading, data:profile} = userProfile();

  useEffect(() => {
    fetchOrders();
  }, []);

  function fetchOrders() {
    setLoadingOrders(true);
    fetch('/api/orders').then(res => {
      res.json().then(orders => {
        setOrders(orders.reverse());
        setLoadingOrders(false);
      })
    })
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <UserTabs isAdmin={profile.admin} />
      <div className="mt-8">
        {loadingOrders && (
          <div>Loading orders...</div>
        )}
        {orders?.length > 0 && orders.map(order => (
          <div
            key={order._id}
            className="flex flex-col items-center gap-6 p-4 mb-2 bg-gray-100 rounded-lg md:flex-row">
            <div className="flex flex-col items-center gap-6 grow md:flex-row">
              <div>
                <div className={
                  (order.paid ? 'bg-green-500' : 'bg-red-400')
                  + ' p-2 rounded-md text-white w-24 text-center'
                }>
                  {order.paid ? 'Paid' : 'Not paid'}
                </div>
              </div>
              <div className="grow">
                <div className="flex items-center gap-2 mb-1">
                  <div className="grow">{order.userEmail}</div>
                  <div className="text-sm text-gray-500">{dbTimeForHuman(order.createdAt)}</div>
                </div>
                <div className="text-xs text-gray-500">
                  {order.cartProducts.map(p => p.name).join(', ')}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 whitespace-nowrap">
              <Link href={"/orders/"+order._id} className="button">
                Show order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}