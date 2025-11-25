import Acrylic from "../src/assets/acrylic.png"
import Dipping from "../src/assets/dipping.jpg"
import GelX from "../src/assets/gelX.png"
import Builder from "../src/assets/builder.png"
const Help = () => {
    return (
      <div className="bg-black min-h-screen">
        <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
              <h2 className="font-bold mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>CONFUSED ABOUT NAIL ENHANCERS?</h2>
              <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}><strong>Acrylic nails</strong> are created by combining a liquid monomer and a powder polymer to form a durable layer. Perfect for those who want long, strong nails that can be shaped and styled easily for any nail art.</p>
              <img src={Acrylic} className="w-80 h-auto mx-auto p-6"></img>
              <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}><strong>S.N.S </strong>is a dipping powder system that does not require liquid or UV light to harden like gel. It gives your nails a glossy, smooth finish with minimal drying time and lasts long. S.N.S products also help your natural nails grow faster and stronger over time.</p>
              <img src={Dipping} className="w-80 h-auto mx-auto p-6"></img>
              <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}><strong>Gel X </strong>is a modern nail extension system that combines soft gel and full-coverage tips. The result is light, natural-looking nails that are long-lasting but also easy to remove and gentler on your natural nails than traditional acrylics.</p>
              <img src={GelX} className="w-90 h-auto mx-auto p-6"></img>
              <p className="text-lg text-justify" style={{ fontFamily: 'Noto Serif, serif' }}><strong>Builder Gel </strong>is a thick gel used to add strength and structure to natural nails. It’s ideal for short nail extensions or to reinforce weak nails, providing a lightweight yet durable finish.</p>
              <img src={Builder} className="w-90 h-auto mx-auto p-6"></img>
            </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
  )
}
export default Help