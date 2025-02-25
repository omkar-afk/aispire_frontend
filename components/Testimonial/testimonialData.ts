import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sudheer Reddy",
    designation: "CEO at SSIT",
    image: image1,
    content:
      "SARA has transformed how we interact with our customers. The AI capabilities are truly impressive.",
  },
  {
    id: 2,
    name: "Leela Krishna",
    designation: "Founder of Ugyan Edutech",
    image: image2,
    content:
      "The implementation was seamless, and the results were immediate. Our customer satisfaction scores have improved significantly.",
  },
  {
    id: 3,
    name: "Kyama Parthunjay",
    designation: "Co-Founder of Estudent",
    image: image1,
    content:
      "AIspire Labs has been a game-changer for our customer service operations. The AI assistant handles queries efficiently.",
  },
  // {
  //   id: 4,
  //   name: "Jhon Abraham",
  //   designation: "Founter @democompany",
  //   image: image2,
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
  // },
];
