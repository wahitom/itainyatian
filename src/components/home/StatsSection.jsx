// src/components/home/StatsSection.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function StatsSection() {
  const stats = [
    { end: 10, label: "Years of Experience" },
    { end: 250, label: "Properties Sold" },
    { end: 100, label: "Happy Clients" },
    { end: 50, label: "Projects Completed" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) =>
      setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < stat.end) {
            // smoother and faster counting
            newCounts[i] += Math.ceil(stat.end / 50);
            if (newCounts[i] > stat.end) newCounts[i] = stat.end;
          }
          return newCounts;
        });
      }, 30)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-[#f8faf7] text-black py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-white shadow-md border border-[#c5d1b2] 
                       hover:shadow-lg hover:-translate-y-2 hover:border-[#698300] 
                       transition-all duration-300"
          >
            <h2 className="text-5xl font-extrabold text-[#698300]">
              {counts[i]}+
            </h2>
            <p className="mt-3 text-xl font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
