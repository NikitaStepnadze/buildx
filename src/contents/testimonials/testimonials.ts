

// home one
import testimonialImg1 from "../../../public/assets/images/testimonial/testimonial-1-1.jpg";
import testimonialImg2 from "../../../public/assets/images/testimonial/testimonial-1-2.jpg";
import testimonialImg3 from "../../../public/assets/images/testimonial/testimonial-1-3.jpg";
import testimonialTwoImg1 from '../../../public/assets/images/testimonial/testimonial-2-1.png';
import img1 from "../../../public/assets/images/testimonial/testimonial-1-1.jpg";
import img2 from "../../../public/assets/images/testimonial/testimonial-1-2.jpg";
import img3 from "../../../public/assets/images/testimonial/testimonial-1-3.jpg";
import img4 from "../../../public/assets/images/testimonial/testimonial-1-4.jpg";
import img5 from "../../../public/assets/images/testimonial/testimonial-1-5.jpg";
import img6 from "../../../public/assets/images/testimonial/testimonial-1-6.jpg";
import type { Testimonial, TestimonialPage, TestimonialTwo } from "./type";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: testimonialImg1,
    name: "Olivia Rose",
    position: "Marketing Director",
    text: "Exceptional service and attention to detail! The team went above and beyond to ensure our project was a success. Highly recommend!",
    rating: 5
  },
  {
    id: 2,
    image: testimonialImg2,
    name: "Michael James",
    position: "Operations Officer",
    text: "The product exceeded my expectations. Great quality and fast delivery. I'll definitely be a returning customer!",
    rating: 5
  },
  {
    id: 3,
    image: testimonialImg3,
    name: "Liam Alexander",
    position: "Senior Software Engineer",
    text: "Customer support was fantastic. They were responsive and resolved my issue quickly. Overall, a wonderful experience!",
    rating: 5
  },
  {
    id: 4,
    image: testimonialImg1,
    name: "Olivia Rose",
    position: "Marketing Director",
    text: "Exceptional service and attention to detail! The team went above and beyond to ensure our project was a success. Highly recommend!",
    rating: 5
  },
  {
    id: 5,
    image: testimonialImg2,
    name: "Michael James",
    position: "Operations Officer",
    text: "The product exceeded my expectations. Great quality and fast delivery. I'll definitely be a returning customer!",
    rating: 5
  },
  {
    id: 6,
    image: testimonialImg3,
    name: "Liam Alexander",
    position: "Senior Software Engineer",
    text: "Customer support was fantastic. They were responsive and resolved my issue quickly. Overall, a wonderful experience!",
    rating: 5
  },
  {
    id: 7,
    image: testimonialImg1,
    name: "Olivia Rose",
    position: "Marketing Director",
    text: "Exceptional service and attention to detail! The team went above and beyond to ensure our project was a success. Highly recommend!",
    rating: 5
  },
  {
    id: 8,
    image: testimonialImg2,
    name: "Michael James",
    position: "Operations Officer",
    text: "The product exceeded my expectations. Great quality and fast delivery. I'll definitely be a returning customer!",
    rating: 5
  },
  {
    id: 9,
    image: testimonialImg3,
    name: "Liam Alexander",
    position: "Senior Software Engineer",
    text: "Customer support was fantastic. They were responsive and resolved my issue quickly. Overall, a wonderful experience!",
    rating: 5
  }
];

// home one

//testimonials two





export const testimonialsTwo: TestimonialTwo[] = [
  {
    id: 1,
    name: 'ანა ხარაიშვილი',
    title: 'კერძო სახლის მფლობელი',
    image: testimonialTwoImg1,
    link: '/about',
    text: `"ეზოს ჭიშკარი და ღობე ზუსტად ისე დაამზადეს, როგორც ვისურვებდი. გუნდი იყო პროფესიონალი, სამუშაო დროულად დასრულდა. გულწრფელად გირჩევთ!"`,
  },
  {
    id: 2,
    name: 'ლაშა წიკლაური',
    title: 'დეველოპერი',
    image: testimonialTwoImg1,
    link: '/about',
    text: `"აივნის მოაჯირები მთელი კორპუსისთვის შევუკვეთეთ. ხარისხი და მონტაჟი უმაღლეს დონეზე იყო, შედეგით ძალიან კმაყოფილები ვართ."`,
  },
  {
    id: 3,
    name: 'მარიამ ჯაფარიძე',
    title: 'ინტერიერის დიზაინერი',
    image: testimonialTwoImg1,
    link: '/about',
    text: `"შიდა კიბის მოაჯირები იდეალურად მოერგო ინტერიერს. დეტალებისადმი ყურადღებამ ყველაფერი შეცვალა."`,
  },
];


// Testimonials page

export const testimonialsPage: TestimonialPage[] = [
  {
    id: 1,
    name: "Olivia Rose",
    role: "Marketing Director",
    image: img1,
    text: `"Exceptional service and attention to detail! The team went above and beyond to ensure our project was a success. Highly recommend!"`,
    rating: 5,
  },
  {
    id: 2,
    name: "Michael James",
    role: "Operations Officer",
    image: img2,
    text: `"The product exceeded my expectations. Great quality and fast delivery. I'll definitely be a returning customer!"`,
    rating: 4,
  },
  {
    id: 3,
    name: "Liam Alexander",
    role: "Senior Software Engineer",
    image: img3,
    text: `"Customer support was fantastic. They were responsive and resolved my issue quickly. Overall, a wonderful experience!"`,
    rating: 5,
  },
  {
    id: 4,
    name: "Alex Hales",
    role: "Marketing Director",
    image: img4,
    text: `"Exceptional service and attention to detail! The team went above and beyond to ensure our project was a success. Highly recommend!"`,
    rating: 5,
  },
  {
    id: 5,
    name: "Michael Golf",
    role: "Operations Officer",
    image: img5,
    text: `"The product exceeded my expectations. Great quality and fast delivery. I'll definitely be a returning customer!"`,
    rating: 4,
  },
  {
    id: 6,
    name: "Lima Rose",
    role: "Senior Software Engineer",
    image: img6,
    text: `"Customer support was fantastic. They were responsive and resolved my issue quickly. Overall, a wonderful experience!"`,
    rating: 5,
  },
];
