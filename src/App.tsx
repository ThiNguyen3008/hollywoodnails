import Navbar from "./components/Navbar"
//import Hero from "./components/Hero"
import Services from "./services"
import Gallery from "./gallery"
import Specials from "./specials"
import Policies from "./policies"
import Help from "./help"
import { Routes, Route } from "react-router-dom"; 
import Footer from "./components/Footer"
import Flower from "./components/Flower"
import mainPic from "./assets/mainPic.png"
import picNails from "./assets/picNails.png"

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
      <section className="relative max-w-7xl mx-auto px-6 py-10 pt-0 z-10">
        <div className="relative w-full">
          <img
            src={mainPic}
            alt="Hollywood Nails Main"
            className="w-full object-cover rounded-xl shadow-lg"
          />

          {/* Overlay box */}
          {/*<div className="absolute inset-0 flex items-center">
            <div className="bg-white/40 rounded-xl ml-3 sm:ml-5 md:ml-7 lg:ml-10 xl:ml-10 mt-1 shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* backdrop-blur-md (like glass!) */}
             {/* <img src={slogan} alt="Slogan" className="w-full h-auto text-center "></img>
              <h2 className="font-bold text-sm sm:text-lg md:text-xl ml-5" style={{ fontFamily: 'Noto Serif, serif' }}>HOURS:</h2>
               <p className="text-sm sm:text-lg md:text-xl ml-5" style={{ fontFamily: 'Noto Serif, serif' }}>Mon – Fri: 10:30am – 7:00pm</p>
               <p className="text-sm sm:text-lg md:text-xl ml-5" style={{ fontFamily: 'Noto Serif, serif' }}>Sat: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9:30am – 5:00pm</p>
               <p className="text-sm sm:text-lg md:text-xl mb-2 sm:mb-2 md:mb-2 lg:mb-5 xl:mb-10 ml-5" style={{ fontFamily: 'Noto Serif, serif' }}>Sun: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Closed</p>
                            <h2 className="font-bold mb-1 text-sm sm:text-lg md:text-xl ml-5" style={{ fontFamily: 'Noto Serif, serif' }}>CALL US TO BOOK AN APPOINTMENT:</h2>
                            <p className="text-sm sm:text-lg md:text-xl mb-2 sm:mb-2 md:mb-2 lg:mb-5 xl:mb-10 ml-5" style={{ fontFamily: 'Noto Serif, serif' }}>(227) 277 - 9917</p>
                            <h2 className="font-bold mb-1 text-sm sm:text-lg md:text-xl ml-5" style={{ fontFamily: 'Noto Serif, serif' }}>ADDRESS:</h2>
                            <p className="text-sm sm:text-lg md:text-xl ml-5 mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                                5720 Deale Churchton Rd, Deale, MD 20751
                            </p>
            </div>
          </div> */}
        </div>
      </section>
      <br></br>
      <br></br>
      <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left column */}
                    <div className="flex-1 w-full">
                        <h2 className="font-bold mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>ABOUT US</h2>
                        <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>Nestled in the heart of Deale, Maryland, Hollywood Nails is your go-to destination for beauty, relaxation, and self-care. Our mission is simple - to help you look and feel your best with nails that truly sparkle.</p>
                        <br></br>
                        <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>At Hollywood Nails, we take pride in providing professional nail care services in a clean, comfortable, and friendly environment. Our skilled technicians use high-quality products and the latest techniques to ensure that every visit leaves you feeling pampered and confident.</p>
                        <br></br>
                        <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>Whether you are preparing for a special occasion or just treating yourself, Hollywood Nails is the perfect place to unwind and let your nails shine like a star. Come visit us and experience the Hollywood Nails difference - where beauty meets relaxation!</p>

                    </div>

                    {/* Right column */}
                    <div className="w-80 mx-auto md:mx-0">
                        <div className="w-80">
                        <img src={picNails} alt="Picture of Nail"></img>
                        </div>
                    </div>

                </div>



            </div>
        </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </>
      } />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/specials" element={<Specials />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
      <Flower />
    </div>
  )
}

export default App
