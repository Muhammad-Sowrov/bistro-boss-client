import SectionTitle from "../../SectionTitle/SectionTitle";
import img from ".././../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FEATURED ITEM"}
      ></SectionTitle>


      <div className="md:flex justify-center text-whit pb-20 pt-12  items-center px-16">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            tempore maxime doloribus cumque aspernatur dolor ab error?
            Architecto, rem harum?
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
