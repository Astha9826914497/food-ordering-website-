import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item}) {
  const {image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (

    <div className="explore-card cur-po light-theme">
<div className="explore-card-cover">
  <img src={image} alt={name} className="explore-card-image"/>
  <div className='res-row'>
    <div className="res-name name-dish">{name}</div>
  </div>
  <div> 
    {description && <div className="approx-price description-dish">{description}</div>}
     <AddToCartButton
       image={image}
       hasSizesOrExtras={hasSizesOrExtras}
       onClick={onAddToCart}
       basePrice={basePrice}
     />
  </div>

</div>
</div>

  );
}







// <div className="p-4 text-center transition-all bg-gray-200 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25">
// <div className="text-center">
//   <img src={image} className="block mx-auto max-h-auto max-h-24" alt="pizza"/>
// </div>
// <h4 className="my-3 text-xl font-semibold">{name}</h4>
// <p className="text-sm text-gray-500 line-clamp-3">
//   {description}
// </p>
// <AddToCartButton
//   image={image}
//   hasSizesOrExtras={hasSizesOrExtras}
//   onClick={onAddToCart}
//   basePrice={basePrice}
// />
// </div>