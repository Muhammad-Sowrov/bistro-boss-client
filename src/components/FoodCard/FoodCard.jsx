const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className=" absolute right-0 mr-14 top-14 px-3 py-3 rounded-full  bg-slate-600 text-white ">$ {price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
