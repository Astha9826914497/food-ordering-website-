'use client';
import AddressInputs from "@/components/AddressInput";
import {CartContext, cartProductPrice} from "@/components/AppContext";
import CartProduct from "@/components/menu/CartProduct";
import SectionHeaders from "@/components/SectionHeaders";
import {useProfile, userProfile} from "@/components/UseProfile";
import {useContext, useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function CartPage() {
  const {cartProducts,removeCartProduct} = useContext(CartContext);
  const [address, setAddress] = useState({});
  const {data:profileData} = userProfile();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('canceled=1')) {
        toast.error('Payment failed 😔');
      }
    }
  }, []);

  useEffect(() => {
    if (profileData?.city) {
      const {phone, streetAddress, city, postalCode, country} = profileData;
      const addressFromProfile = {
        phone,
        streetAddress,
        city,
        postalCode,
        country
      };
      setAddress(addressFromProfile);
    }
  }, [profileData]);

  let subtotal = 0;
  for (const p of cartProducts) {
    subtotal += cartProductPrice(p);
  }
  function handleAddressChange(propName, value) {
    setAddress(prevAddress => ({...prevAddress, [propName]:value}));
  }
  async function proceedToCheckout(ev) {
    ev.preventDefault();
   
    const promise = new Promise((resolve, reject) => {
      fetch('/api/checkout', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          address,
          cartProducts,
        }),
      }).then(async (response) => {
        if (response.ok) {
          resolve();
          window.location = await response.json();
        } else {
          reject();
        }
      });
    });

    await toast.promise(promise, {
      loading: 'Preparing your order...',
      success: 'Redirecting to payment...',
      error: 'Something went wrong... Please try again later',
    })
  }

  if (cartProducts?.length === 0) {
    return (
      <section className="mt-8 text-center">
        <SectionHeaders mainHeader="Cart" />
        <p className="mt-4">Your shopping cart is empty 😔</p>
      </section>
    );
  }



  return (
    <section className="mt-20">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 && cartProducts.map((product, index) => (
            <CartProduct
              key={index}
              product={product}
              onRemove={removeCartProduct}
            />
          ))}
          <div className="flex items-center justify-end py-2 pr-16">
            <div className="text-gray-500">
              Subtotal:<br />
              Delivery:<br />
              Total:
            </div>
            <div className="pl-2 font-semibold text-right">
              ₹{subtotal}<br />
              ₹5<br />
              ₹{subtotal + 5}
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2>Checkout</h2>
          <form onSubmit={proceedToCheckout}>
            <AddressInputs
              addressProps={address}
              setAddressProp={handleAddressChange}
            />
            <button type="submit">Pay ₹{subtotal+5}</button>
          </form>
        </div>
      </div>
    </section>
  );
}