'use client';
import { userProfile} from "@/components/UseProfile";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import './page.css';
import UserForm from "@/components/UserForm";
import UserTabs from "@/components/UserTabs";

export default function EditUserPage() {
  const {loading, data} = userProfile();
  const [user, setUser] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetch('/api/profile?_id='+id).then(res => {
      res.json().then(user => {
        setUser(user);
      });
    })
  }, []);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data,_id:id}),
      });
      if (res.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(promise, {
      loading: 'Saving user...',
      success: 'User saved',
      error: 'An error has occurred while saving the user',
    });
  }

  if (loading) {
    return 'Loading user profile...';
  }

  if (!data.admin) {
    return 'Not an admin';
  }

  return (
    <section className="max-w-2xl mx-auto mt-40">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}