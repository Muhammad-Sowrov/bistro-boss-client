import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../../MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularItem = data.filter((item) => item.category === "popular");
        setMenu(PopularItem);
      });
  }, [setMenu]);
  // console.log(menu);
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 px-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
