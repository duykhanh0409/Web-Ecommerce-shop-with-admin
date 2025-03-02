import Image from "next/image";
import { useState } from "react";

const MoreSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      name: "Nến thơm",
      image:
        "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/ant_index_banner_3.jpg?1740551716867",
    },
    {
      id: 2,
      name: "Quà tặng",
      image:
        "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/ant_index_banner_2.jpg?1740551716867",
    },
    {
      id: 3,
      name: "Tinh dầu",
      image:
        "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/ant_index_banner_3.jpg?1740551716867",
    },
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative overflow-hidden group"
            onMouseEnter={() => setHoveredItem(feature.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.name}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="px-6 py-2 bg-white text-black rounded-md font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Xem Thêm
                </button>
              </div>
            </div>
            <h3 className="text-white text-lg font-semibold absolute bottom-5 left-5 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
              {feature.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreSection;
