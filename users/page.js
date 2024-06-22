'use client';
import { userProfile } from '@/components/UseProfile';
import './page.css';

import UserTabs from '@/components/UserTabs';
import Link from "next/link";
import {useEffect, useState} from "react";

export default function UsersPage() {
    

  const [users, setUsers] = useState([]);
  const {loading,data} = userProfile();

  useEffect(() => {
    fetch('/api/users').then(response => {
      response.json().then(users => {
        setUsers(users);
      });
    })
  }, []);

  if (loading) {
    return <div className='mt-40'> Loading user info...</div>
  }

  if (!data.admin) {
    return <div className='mt-40'>Not an admin</div>
  }

  return (

    <section className='max-w-2xl mx-auto mt-40'>
       <UserTabs isAdmin={true} />
      <div className="mt-8">
        {users?.length > 0 && users.map(user => (
          <div
            key={user._id}
            className="flex items-center gap-4 p-1 px-4 mb-2 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 grow">
              <div className="text-gray-900">
                {!!user.name && (<span>{user.name}</span>)}
                {!user.name && (<span className="italic">No name</span>)}
              </div>
              <span className="text-gray-500">{user.email}</span>
            </div>
            <div>
              <Link className="button" href={'/users/'+user._id}>
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div> 
      </section>
  );
}