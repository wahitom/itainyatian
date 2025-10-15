import React from "react";
import land1 from "/src/assets/land1.jpg"; // placeholder image, can replace later

function AboutSection() {
  return (
    <section
      className="bg-white text-black py-20"
      style={{ paddingTop: "100px" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 max-w-6xl">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={land1}
            alt="Real estate and property management"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#698300] mb-6">
            We’ll Handle All Your Real Estate Needs
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            From cozy homes to expansive plots of land, modern buildings, and
            community infrastructure — we’ve got it all covered. Our team
            specializes in property sales, project development, and essential
            services such as well digging, borehole drilling, and septic tank
            installations.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you’re looking to invest, build, or buy, we’re here to make
            the process smooth, transparent, and rewarding. Let’s bring your
            property vision to life — one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
