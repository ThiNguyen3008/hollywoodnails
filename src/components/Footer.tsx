import React from "react"
import instagram from "../assets/Instagram.png"
import facebook from "../assets/facebook.png"
const Footer: React.FC = () => {
    return (
        <footer className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Left column */}
                    <div className="flex-1">
                        <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>FOLLOW US:</h2>
                        <div className="flex items-center gap-5 mb-4">
                            <a href="https://www.instagram.com/hollywoodnails05?igsh=MXQ0Z2U5MGx5azc4cw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300">
                                <img src={instagram} alt="Instagram" className="w-9 h-9 object-cover"></img>
                            </a>
                            <a href="https://www.facebook.com/p/Hollywood-Nails-61583166482288/?_rdr" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300">
                                <img src={facebook} alt="Facebook" className="w-8 h-8 object-cover"></img>
                            </a>
                        </div>

                        <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Noto Serif, serif' }}>HOURS:</h2>
                        <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>Mon – Fri: 10:30am – 7:00pm</p>
                        <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>Sat: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9:30am – 5:00pm</p>
                        <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>Sun: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Closed</p>

                        <div className="mt-4">
                            <h2 className="text-lg font-bold mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>CONTACT US:</h2>
                            <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>(227) 277 - 9917</p>
                            <a href="mailto:hollywoodnails05@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors duration-300">
                                <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>hollywoodnails05@gmail.com</p>
                            </a>
                            <p className="text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>
                                5720 Deale Churchton Rd, Deale, MD 20751
                            </p>
                        </div>
                    </div>

                    {/* Right column — map placeholder */}
                    <div className="w-full md:w-1/2 bg-white rounded border overflow-hidden">
                        <div className="w-full h-80 md:h-80">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12438.430144590975!2d-76.55483293942358!3d38.79563057182775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b78bf90cae4aa1%3A0x9f98d4e6c4e55ea!2s5720%20Deale%20Churchton%20Rd%2C%20Deale%2C%20MD%2020751!5e0!3m2!1sen!2sus!4v1763348555635!5m2!1sen!2sus"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map" ></iframe>
                        </div>
                    </div>

                </div>

                <hr className="border-t border-black-300 my-6 mt-10" />

                <p className="text-sm text-black text-center">
                Copyright © 2025 Hollywood Nails. All rights reserved. Designed and developed by{' '}
                <a href="https://www.linkedin.com/in/kristen-nguyen-96100a252/" className="text-gray-800 hover:text-gray-400 transform transition duration-300"> Kristen Nguyen
                </a>
  .
</p>

            </div>
        </footer>
    )
}

export default Footer