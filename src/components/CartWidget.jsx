import Cart from '../assets/Cart.svg'

const CartWidget = () => {
  return (<><div className='flex'>
    <img src={Cart} alt="Cart" />
    <span className='text-white'>(1)</span>
  </div></>);
}

export default CartWidget;