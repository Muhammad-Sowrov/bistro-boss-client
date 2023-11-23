import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
    },[])
  return (
    <section>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            review.map(review => <SwiperSlide key={review._id}>
                <div className="mt-16 px-12 items-center text-center">
                    <p>{review.details}</p>
                    <p>Rating: {review.rating}/5</p>
                    <h2 className="text-2xl">{review.name}</h2>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
