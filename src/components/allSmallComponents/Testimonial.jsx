import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const responsive = {
  proMax: {
    breakpoint: { max: 4000, min: 1315 },
    items: 4,
    slidesToSlide: 2,
  },
  superLargeDesktop: {
    breakpoint: { max: 1315, min: 1000 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1000, min: 650 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 650, min: 500 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};
{
}
const Testimonial = ({ testimonialData }) => {
  // const testimonialCard =
  return (
    <>
      <div className="testimonial-wrapper">
        <span className="testimonial-heading">
          Stories you wanna hear from our{" "}
          <span className="visitors">Visitors.</span>
        </span>
        <hr className="testimonial-hr testimonial-hr-top" />
        <div className="testimonial">
          <Carousel responsive={responsive} className="carousel-component">
            {testimonialData.map((item) => (
              <div className="testimonial-card" key={item.id}>
                <div>
                  <a>
                    <img className="testimonial-card-img" src={item.img} />
                  </a>
                  <div className="person-name">{item.name}</div>
                  <div className="message">{item.message}</div>
                  <p className="read-more">Read More</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <hr className="testimonial-hr testimonial-hr-bottom" />
      </div>
    </>
  );
};

export default Testimonial;

Testimonial.defaultProps = {
  testimonialData: [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "Robin Stark",
      message:
        "I am delighted to share with you how great experience this has been working with you guys so far. After several training sessions with your staff, I can tell you that I´m really impressed with the quality and depth of your solution, as well as the professional support we have been receiving from all your team members. I really enjoy the professional setup, the training methodology and personal touch. I will not hesitate to recommend you and look forward to start operating.",
    },
    {
      id: 1,
      img: "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-picture-natural-light.jpg",
      name: "Sujan Perry",
      message:
        "TravelCarma has proven to be a valuable resource for our company. The features and flexibility of the product along with the expert advice and support from the TravelCarma team has allowed us to drastically improve the efficiency of our reservation processes. We have been using TravelCarma for over two years now and the process has been simple and painless to switch from our previous systems.",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk=",
      name: "Bella Hadit",
      message:
        "The new version of the booking system of TravelCarma with various functions is great. The quotations manager, hotels de-duplication, and the map based search options are so strong functions from B2B business prospective. Their B2B system is easy to understand and saves a lot of time of our agents. I gambled peanuts and got a Boeing 407.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      name: "John Sharma",
      message:
        "We have been using TravelCarma for over 5 years for serving our large retail customer and agent base. They provide a really useful and scalable booking platform for flights, hotels and activities, developed after a lot of research in the field of tourism and includes several travel management features required by companies like ours.",
    },

    {
      id: 0,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "Robin Stark",
      message:
        "I am delighted to share with you how great experience this has been working with you guys so far. After several training sessions with your staff, I can tell you that I´m really impressed with the quality and depth of your solution, as well as the professional support we have been receiving from all your team members. I really enjoy the professional setup, the training methodology and personal touch. I will not hesitate to recommend you and look forward to start operating.",
    },
    {
      id: 1,
      img: "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-picture-natural-light.jpg",
      name: "Sujan Perry",
      message:
        "TravelCarma has proven to be a valuable resource for our company. The features and flexibility of the product along with the expert advice and support from the TravelCarma team has allowed us to drastically improve the efficiency of our reservation processes. We have been using TravelCarma for over two years now and the process has been simple and painless to switch from our previous systems.",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk=",
      name: "Bella Hadit",
      message:
        "The new version of the booking system of TravelCarma with various functions is great. The quotations manager, hotels de-duplication, and the map based search options are so strong functions from B2B business prospective. Their B2B system is easy to understand and saves a lot of time of our agents. I gambled peanuts and got a Boeing 407.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      name: "John Sharma",
      message:
        "We have been using TravelCarma for over 5 years for serving our large retail customer and agent base. They provide a really useful and scalable booking platform for flights, hotels and activities, developed after a lot of research in the field of tourism and includes several travel management features required by companies like ours.",
    },

    {
      id: 0,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "Robin Stark",
      message:
        "I am delighted to share with you how great experience this has been working with you guys so far. After several training sessions with your staff, I can tell you that I´m really impressed with the quality and depth of your solution, as well as the professional support we have been receiving from all your team members. I really enjoy the professional setup, the training methodology and personal touch. I will not hesitate to recommend you and look forward to start operating.",
    },
    {
      id: 1,
      img: "https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-picture-natural-light.jpg",
      name: "Sujan Perry",
      message:
        "TravelCarma has proven to be a valuable resource for our company. The features and flexibility of the product along with the expert advice and support from the TravelCarma team has allowed us to drastically improve the efficiency of our reservation processes. We have been using TravelCarma for over two years now and the process has been simple and painless to switch from our previous systems.",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk=",
      name: "Bella Hadit",
      message:
        "The new version of the booking system of TravelCarma with various functions is great. The quotations manager, hotels de-duplication, and the map based search options are so strong functions from B2B business prospective. Their B2B system is easy to understand and saves a lot of time of our agents. I gambled peanuts and got a Boeing 407.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      name: "John Sharma",
      message:
        "We have been using TravelCarma for over 5 years for serving our large retail customer and agent base. They provide a really useful and scalable booking platform for flights, hotels and activities, developed after a lot of research in the field of tourism and includes several travel management features required by companies like ours.",
    },
  ],
};
