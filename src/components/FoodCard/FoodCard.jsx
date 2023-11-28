import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();


  const handleCartItem = () => {
    if (user && user.email) {
      // send cart to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        // console.log(res.data);
        // console.log(res.data.insertedId);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name}added to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
      
      

      
    }
    else{
      Swal.fire({
        title: "Please login before add to cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!"
      }).then((result) => {
        if (result.isConfirmed) {

          navigate('/login', { state: {from: location}})

        }
      });
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className=" absolute right-0 mr-14 top-14 px-3 py-3 rounded-full  bg-slate-600 text-white ">
        $ {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => {
              handleCartItem(item);
            }}
            className="btn btn-primary"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
