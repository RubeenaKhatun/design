export default function Component() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <img
          alt="Abstract Background"
          className="absolute inset-0 h-full w-full object-cover"
          src="/background.png"
        />
        <div className="relative mx-auto max-w-4xl rounded-lg border border-white/10 bg-white/10 p-8 hover:border-gray-500/100 hover:shadow-white">
          <h1 className="mb-4 text-center font-serif text-6xl font-bold">
            About Us
          </h1>
          <p className="mb-6 text-sm">
            We specialize in cutting-edge advertising and product sales,
            committed to delivering high-quality services at affordable prices.
            Equipped with precision core UV printers for intricate detailing, we
            ensure top-notch printing. Our dedicated team operates
            round-the-clock to serve our valued customers.
          </p>
          <p className="mb-6 rounded-[12px] p-2 text-center font-serif text-2xl font-bold">
            Count on us for peak performance – it's where we shine.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <img
                alt="Precision Core UV Printers"
                className="mb-4 h-48 w-48 rounded-full object-cover"
                height="200"
                src="/2.png"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h2 className="text-xl font-semibold">
                State-of-the-Art Printing
              </h2>
              <p className="mt-2 text-center text-sm">
                Our advanced precision core UV printers deliver exceptional
                detail and quality for all your printing needs.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                alt="Dedicated Team"
                className="mb-4 h-48 w-48 rounded-full object-cover"
                height="200"
                src="/2.png"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h2 className="text-xl font-semibold">24/7 Customer Support</h2>
              <p className="mt-2 text-center text-sm">
                Our team is dedicated to providing round-the-clock support to
                ensure the best service for our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
