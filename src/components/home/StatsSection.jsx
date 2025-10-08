// components/StatsSectionB.jsx
import React from "react";

function StatsSectionB() {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "250+", label: "Properties Sold" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Projects Completed" },
  ];

  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 border border-[#1F3F00] rounded-xl">
            <h2 className="text-5xl font-extrabold text-[#698300]">
              {stat.number}
            </h2>
            <p className="mt-3 text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSectionB;
