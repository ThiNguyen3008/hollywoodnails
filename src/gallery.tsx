
const images = import.meta.glob("./assets/gallery/*.{jpg,jpeg,png}", {
  eager: true,
});

// path
const imageList = Object.values(images).map((img: any) => img.default);

export default function Gallery() {
  return (
    <div className="bg-black min-h-screen">
        <section className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="bg-gray-100 rounded-xl p-10 text-gray-800 shadow-sm">
            <h2 className="font-bold mb-6 text-4xl text-yellow-700 content-center-safe text-center" style={{ fontFamily: 'Noto Serif, serif' }}>GALLERY</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageList.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Gallery ${idx}`}
                className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
