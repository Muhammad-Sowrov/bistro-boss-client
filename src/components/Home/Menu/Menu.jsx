import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import img from "../../../assets/menu/menu-bg.jpg";
import imgD from "../../../assets/menu/dessert-bg.jpeg";
import imgP from "../../../assets/menu/pizza-bg.jpg";
import imgS from "../../../assets/menu/salad-bg.jpg";
import imgSo from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../../pages/shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Cover img={img} title="our menu"></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory items={dessert} title={"Desert"} img={imgD}></MenuCategory>
      {/* pizza */}
      <MenuCategory items={pizza} title={"Pizza"} img={imgP}></MenuCategory>
      {/*  */}
      <MenuCategory items={salad} title={"Salad"} img={imgS}></MenuCategory>
      {/*  */}
      <MenuCategory items={soup} title={"Soup"} img={imgSo}></MenuCategory>
      {/*  */}
    </div>
  );
};

export default Menu;
