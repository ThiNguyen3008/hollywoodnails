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
import mainPic2 from "./assets/mainPic2.png"
import slogan from "./assets/slogan.png"
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
            src={mainPic2}
            alt="Hollywood Nails Main"
            className="w-full object-cover rounded-xl shadow-lg"
          />
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
                    <div className="xs:w-70 sm:w-80 w-80 mx-auto md:mx-0">
                        <div className="xs:w-70 sm:w-80 w-80">
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
