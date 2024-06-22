'use client';
import {useProfile, userProfile} from "@/components/UseProfile";
import {useState} from "react";
import EditableImage from "./EditableImage";
import AddressInputs from "./AddressInput";

export default function UserForm({user,onSave}) {
  const [userName, setUserName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
  const [postalCode, setPostalCode] = useState(user?.postalCode || '');
  const [city, setCity] = useState(user?.city || '');
  const [country, setCountry] = useState(user?.country || '');
  const [admin, setAdmin] = useState(user?.admin || false);
  const {data:loggedInUserData} = userProfile();

  function handleAddressChange(propName, value) {
    if (propName === 'phone') setPhone(value);
    if (propName === 'streetAddress') setStreetAddress(value);
    if (propName === 'postalCode') setPostalCode(value);
    if (propName === 'city') setCity(value);
    if (propName === 'country') setCountry(value);
  }

  return (
    <div className="gap-4 mt-8 mb-8 md:flex">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={ev =>
          onSave(ev, {
            name:userName, image, phone, admin,
            streetAddress, city, country, postalCode,
          })
        }
      >
        <label>
          First and last name
        </label>
        <input
          type="text" placeholder="First and last name"
          value={userName} onChange={ev => setUserName(ev.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          disabled={true}
          value={user.email}
          placeholder={'email'}
        />
        <AddressInputs
          addressProps={{phone, streetAddress, postalCode, city, country}}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData.admin && (
          <div>
            <label className="inline-flex items-center gap-2 p-2 mb-2" htmlFor="adminCb">
              <input
                id="adminCb" type="checkbox" className="" value={'1'}
                checked={admin}
                onChange={ev => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}




// const [userName, setUserName] = useState('');
// const [image,setImage]= useState('');
// const [phone,setPhone]= useState('');
// const [streetAddress,setStreetAddress]= useState('');
// const [postalCode,setPostalCode]= useState('');
// const [city,setCity]= useState('');
// const [country,setCountry]= useState('');

// <div className='flex gap-4 '>
// <div>
//         <div  className='relative p-2 rounded-lg max-w-[120px] '>
            
//         <EditableImage link ={image} setLink={setImage}/>
//     </div>

// </div>


// <form className='grow' onSubmit={handleProfileInfoUpdate} >
// <label>First & Last Name</label>
// <input type='text' placeholder='First & Last Name'
// value={userName} onChange={ev => setUserName(ev.target.value)}
// />
// <label>Email</label>
// <input type='email' disabled={true} value={session.data.user.email} placeholder={'Email'}/>
// <label>Phone Number</label>
// <input type='tel' placeholder='Phone Number' value={phone} onChange={ev=>setPhone(ev.target.value)} />
// <label>Street Address</label>
// <input type='text' placeholder='Street Address'value={streetAddress} onChange={ev=>setStreetAddress(ev.target.value)}  />

// <div className='flex gap-2'>
//     <div>
//     <label>Postal Code</label>
// <input  type='text' placeholder='Postal Code' value={postalCode} onChange={ev=>setPostalCode(ev.target.value)} />
//     </div>
//     <div>
//     <label>City</label>
// <input  type='text' placeholder='City' value={city} onChange={ev=>setCity(ev.target.value)} />
//     </div>


// </div>
// <label>Country</label>
// <input type='text' placeholder='Country' value={country} onChange={ev=>setCountry(ev.target.value)}  />
// <button type='submit'>Save</button>
// </form>

// </div>
