import './App.css';
import CourseCard from './components/courseCard';
import HeroCarousel from './components/heroCarousel';
import CarouselImage1 from './assets/images/carousel-image1.png';
import CarouselImage2 from './assets/images/carousel-image2.jpg';
import CarouselImage3 from './assets/images/carousel-image3.jpg';
import CourseImage1 from './assets/images/course-image.jpg';
import CourseImage2 from './assets/images/course-image2.png';
import CourseImage3 from './assets/images/course-image3.png';
import CourseImage4 from './assets/images/course-image4.png';

const App = () => {
  const imagesArray = [CarouselImage1, CarouselImage2, CarouselImage3];

  return (
    <div className="container">
      <HeroCarousel images={imagesArray} />

      <div className="coursesContainer">
        {CourseInfoArray.length > 0 &&
          CourseInfoArray.map((courseDetails, index) => (
            <CourseCard key={index} courseDetails={courseDetails} />
          ))}
      </div>
    </div>
  );
};

export default App;

const CourseInfoArray = [
  {
    courseImage: CourseImage1,
    courseTitle: 'ChatGPT AI Voice Chatbot Build with React and FAST API Combo',
    author: 'Shaun McDonogh',
    ratings: 4.8,
    price: 4500,
    discountPrice: 5000,
    courseType: 'best seller',
    veiwerCount: 500,
  },
  {
    courseImage: CourseImage2,
    courseTitle: 'ChatGPT AI Voice Chatbot Build with React and FAST API Combo',
    author: 'Shaun McDonogh',
    ratings: 3.5,
    price: 4500,
    discountPrice: 5000,
    courseType: 'hot',
    veiwerCount: 500,
  },
  {
    courseImage: CourseImage3,
    courseTitle: 'ChatGPT AI Voice Chatbot Build with React and FAST API Combo',
    author: 'Shaun McDonogh',
    ratings: 4.9,
    price: 4500,
    discountPrice: 5000,
    courseType: 'new',
    veiwerCount: 500,
  },
  {
    courseImage: CourseImage4,
    courseTitle: 'Laravel 10 - Build Multi Vendor Ecommerce Website (2023)',
    author: 'Shaun McDonogh',
    ratings: 4.5,
    price: 4500,
    discountPrice: 5000,
    veiwerCount: 500,
  },
  {
    courseImage: CourseImage1,
    courseTitle: 'React course with Webpack and ES6 complete Guide',
    author: 'Shaun McDonogh',
    ratings: 4.6,
    price: 4500,
    discountPrice: 5000,
    courseType: 'Highest Rated',
    veiwerCount: 500,
  },
  {
    courseImage: CourseImage2,
    courseTitle: 'ChatGPT AI Voice Chatbot Build with React and FAST API Combo',
    author: 'Shaun McDonogh',
    ratings: 3.5,
    price: 4500,
    discountPrice: 5000,
    courseType: 'best seller',
    veiwerCount: 500,
  },
];
