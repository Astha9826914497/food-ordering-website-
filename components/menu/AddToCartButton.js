import FlyingButton from 'react-flying-item'
import './page.css';
export default function AddToCartButton({
  hasSizesOrExtras, onClick, basePrice, image
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="justify-center mt-6 text-center text-white add-to-cart-btn rounded-xl flying-button-parent bg-primary">
        <FlyingButton
        
          targetTop={'5%'}
          targetLeft={'95%'}
          src={image}>
          <div className='justify-center max-w-xs text-center text-white add-to-cart-btn' onClick={onClick}>
            Add to cart ₹{basePrice}
          </div>
        </FlyingButton>
      </div>
    );
  }
  return (
    <div className="justify-center mt-6 text-center text-white add-to-cart-btn rounded-xl flying-button-parent bg-primary">
 <button  
      type="button"
      onClick={onClick}
     
    >
      <span className='justify-center max-w-xs text-center text-white'>Add to cart (from ₹{basePrice})</span>
    </button>
    </div>
   
  );
}