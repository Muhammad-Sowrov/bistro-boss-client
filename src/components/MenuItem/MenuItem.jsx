

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-2 px-5 items-center ">
            <img style={{
                borderRadius: '0 200px 200px 200px'
            }} className="w-28 h-28 " src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;