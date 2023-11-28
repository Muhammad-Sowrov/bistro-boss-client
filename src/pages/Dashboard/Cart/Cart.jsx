import useCart from "../../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <h3 className="text-3xl">Items: {cart.length}</h3>
        </div>
        <div>
          <h3 className="text-3xl">Total Price: $ {totalPrice}</h3>
        </div>

        <div>
          <button className="btn btn-outline border-0 border-b-4 mx-auto">
            Pay Now
          </button>
        </div>
      </div>
      <div>
        

        {
            cart.map((item, index) => <CartTable key={item._id} index={index} item={item}></CartTable>)
        }
      </div>
    </div>
  );
};

export default Cart;
