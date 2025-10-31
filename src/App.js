import './App.css';
import Navbar from './repetitiveComponents/Navbar';
import HeroSection from './non-repetitiveComponents/HeroSection';
import NEWdropsHeading from './non-repetitiveComponents/NEWdropsHeading';
import Categories from './non-repetitiveComponents/Categories'
import Reviews from './non-repetitiveComponents/Reviews';
import Footer from './repetitiveComponents/Footer';


function App() {
  return (
    <div className='Home_page'>
      <div className="container mx-auto px-4 sm:px-6 xs:px-3 lg:px-12">
        <Navbar />
        <HeroSection />
        <NEWdropsHeading />
      </div>

      <div>
        <Categories />
      </div>
      <div className="container mx-auto px-4 sm:px-6 xs:px-4  lg:px-12">
        <Reviews />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-[12%]">
        <Footer />
      </div>

    </div>



  );
}

export default App;
