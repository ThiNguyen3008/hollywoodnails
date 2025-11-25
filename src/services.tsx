import Flower from "./components/Flower"
import menu1 from "./assets/menu1.png"
import menu2 from "./assets/menu2.png"
import menu3 from "./assets/menu3.png"
import menu4 from "./assets/menu4.png"
import menu5 from "./assets/menu5.png"
import menu6 from "./assets/menu6.png"
import menu7 from "./assets/menu7.png"
import menu8 from "./assets/menu8.png"
import menu9 from "./assets/menu9.png"

const Services = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
            <h2 className="font-bold mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>OUR SERVICES</h2>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left column */}
                    <div className="hidden md:block md:w-1/3 ">
                    <div className="w-full pt-10 flex flex-col items-center">
                        <img src={menu1} alt="Menu 1" className="w-70 h-auto "></img>
                        <br></br>
                        <br></br>
                        <img src={menu2} alt="Menu 2" className="w-70 h-auto pb-3"></img>
                        </div> 
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-2/3 pr-5">
                      <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>PEDICURE</h2>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Classic Pedicure (25 min)</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$38</p>
                        </div>
                      </div>
                      <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>Includes nail trimming and shaping, cuticle care, and a rejuvenating sugar scrub to exfoliate dead skin cells. Relax with a warm towel and a gentle foot massage, finished with a polish of your choice.</p>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Spa Pedicure (45 min)</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$50</p>
                        </div>
                      </div>
                      <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>Includes everything in our Classic Pedicure, plus callus treatment, a refreshing mask wrap with hot towels, paraffin wax, and an intensive foot massage to relax and rejuvenate your muscles.</p>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Organic Volcano Spa Pedicure (60 min)</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$60</p>
                        </div>
                      </div>
                      <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>Indulge in a luxurious 5-step organic spa experience. This treatment features a volcano crystal with activator, exfoliating sugar scrub, callus treatment, a collagen cream mask wrap with hot towels, paraffin wax, and a deep collagen lotion massage. Complete the treatment with a polish of your choice.</p>
                      <br></br>
                      <div className="text-lg text-center text-white font-bold p-3 w-80 mx-auto" style={{ backgroundColor: "#885900", fontFamily: 'Noto Serif, serif'}} >GEL POLISH: Pedicure + $17</div>
                    </div>
                </div>
            </div>
        </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left column */}
                    <div className="hidden md:block md:w-1/3 ">
                    <div className="w-full pt-10 flex flex-col items-center">
                        <img src={menu3} alt="Menu 3" className="w-70 h-auto pb-3"></img>
                        </div> 
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-2/3 pr-5">
                      <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>CHILDREN (10 and under)</h2>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Classic Manicure/Gel</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$12/$30</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Classic Pedicure/Gel</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$28/$40</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Polish Change - Hands</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$7</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Polish Change - Toes</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$12</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left column */}
                    <div className="hidden md:block md:w-1/3 ">
                      <div className="w-full pt-10 flex flex-col items-center">
                        <img src={menu4} alt="Menu 4" className="w-70 h-auto "></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <img src={menu5} alt="Menu 5" className="w-70 h-auto "></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <img src={menu6} alt="Menu 6" className="w-70 h-auto pb-3"></img>
                      </div> 
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-2/3 pr-5">
                      <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>MANICURE</h2>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Classic Manicure (20 min)</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$23</p>
                        </div>
                      </div>
                      <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>Includes nail trimming, shaping, cuticle care, and a gentle hand massage, finished with a polish of your choice.</p>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Spa Manicure (30 min)</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$40</p>
                        </div>
                      </div>
                      <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}>Includes everything in our Classic Manicure, plus sugar scrub, mask, paraffin wax, hot towel, and an intensive hand massage.</p>
                      <br></br>
                      <br></br>
                      <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>GEL MANICURE / PEDICURE</h2>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Manicure </p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$40</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Polish Change - Hands</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$30</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Pedicure</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$55</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Polish Change - Toes</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$35</p>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>NAIL ENHANCERS</h2>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Acrylic Full Set Overlay</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$45 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Acrylic Full Set with Tips</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$55 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Acrylic Fill-in</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$35 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Full Set Overlay</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$50 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Full Set with Tips</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$60 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Fill-in</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$45 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Dip Powder Overlay</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$55 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Dip Powder with Tips</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$65 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel X Full Set</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$65 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel X/Builder Gel Refill</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$50 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Builder/Hard Gel Full Set Overlay</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$55 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Builder/Hard Gel with Tips</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$65 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <p className="text-lg font-bold text-yellow-700" style={{ fontFamily: 'Noto Serif, serif' }}>An additional charge may apply for various LENGTHS, SHAPES, FRENCH TIPS, and DESIGNS (2D or 3D).</p>
                    </div>
                </div>
            </div>
        </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left column */}
                    <div className="hidden md:block md:w-1/3 ">
                    <div className="w-full pt-50 flex flex-col items-center">
                        <img src={menu7} alt="Menu 7" className="w-70 h-auto pb-3"></img>
                        </div> 
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-2/3 pr-5">
                      <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>ADDITIONAL  SERVICES</h2>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Acrylic/Gel X/Builder Gel/Dip Powder Nail Removal</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$15 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Gel Manicure Removal</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$10 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>French Tips</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$10 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Cut Down</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$10 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Nail Design</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$5 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Nail Buff Shine</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$7</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Nail Repair</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$5 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Callus Treatment</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$7</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Paraffin Treatment</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$8</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Ombre Design</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$20 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Cat eye Design</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$15 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Chrome Design</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$15 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Extra Massage (10 min)</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$15</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Polish Change - Hands</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$12</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Polish Change - Toes</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$17</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Acrylic Polish Change Regular/Gel</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$25/$35 & up</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left column */}
                    <div className="hidden md:block md:w-1/3 ">
                    <div className="w-full pt-50 flex flex-col items-center">
                        <img src={menu8} alt="Menu 8" className="w-70 h-auto pb-3"></img>
                        </div> 
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-2/3 pr-5">
                      <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>WAXING  SERVICES</h2>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Eyebrows</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$12</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Eyebrow Tint (Dye)</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$30</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Upper Lip</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$10</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Under Lip</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$8</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Chin/Cheeks</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$15 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Sideburns</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$20 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Full Face</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$50</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Neck/Underarms</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$20 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Half Arms</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$30 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Full Arms</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$40 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Hands/Fingers/Toes</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$10 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Half Legs</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$40 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Full Legs</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$60 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Back/Chest</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$60 & up</p>
                        </div>
                      </div>
                      <br></br>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>Stomach</p>
                        </div>
                        <div className="flex-none text-right font-bold">
                          <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>$25 & up</p>
                        </div>
                      </div>
                      <br></br>
                    </div>
                </div>
            </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">  
              <h2 className="font-light mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>GIFT CERTIFICATE</h2>
              <p className="text-lg font-bold text-black text-center" style={{ fontFamily: 'Noto Serif, serif' }}>Please visit our salon in person and stop by at the check-out station to purchase a gift certificate.</p>  
              <img src={menu9} alt="Menu 9" className="sm:w-full md:w-90 lg:w-95 h-auto pb-3 pt-10 mx-auto block"></img> 
            </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Flower />
    </div>
  )
}

export default Services
