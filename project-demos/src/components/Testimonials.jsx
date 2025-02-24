import "../style.css";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { quote: "This is the best product I've ever used!", author: "Jane Doe" },
    { quote: "This is the  recomddnd I've ever used!", author: " Doe" },
    {
      quote: "This is the ok done product I've ever used!",
      author: "rahi Doe",
    },
    {
      quote: "This is the best heaavy product  I've ever used!",
      author: "Imran Doe",
    },
    { quote: "I* also recommend this product !!", author: "Asif Doe" },
  ];
  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  console.log(testimonials[currentIndex].quote);
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
export default Testimonials;
