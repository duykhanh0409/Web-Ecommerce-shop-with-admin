import Image from "next/image";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GiftSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const gifts = [
    {
      id: 1,
      name: "Set 06",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/447/333/products/qua-tang-doanh-nghiep-damas-candles42.jpg?v=1702464243717",
      hoverImage:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/447/333/products/qua-tang-doanh-nghiep-damas-candles12.jpg?v=1702462823837",
      description: "Set nến thơm cao cấp với hộp quà sang trọng",
    },
    {
      id: 2,
      name: "Set 05",
      image:
        "https://bizweb.dktcdn.net/100/447/333/products/qua-tang-doanh-nghiep-damas-candles24.jpg?v=1702463645897",
      hoveredItem:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/447/333/products/qua-tang-doanh-nghiep-damas-candles42.jpg?v=1702464243717",
      description: "Set nến thơm với túi/ hộp mây tre đan",
    },
    {
      id: 3,
      name: "Set 04",
      image:
        "https://bizweb.dktcdn.net/100/447/333/products/qua-tang-doanh-nghiep-damas-candles24.jpg?v=1702463645897",
      hoveredItem:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/447/333/products/qua-tang-doanh-nghiep-damas-candles42.jpg?v=1702464243717",
      description: "Set quà tặng với giỏ mây tre đan",
    },
    {
      id: 4,
      name: "Set 03",
      image:
        "https://bizweb.dktcdn.net/100/447/333/products/qua-tang-doanh-nghiep-damas-candles24.jpg?v=1702463645897",
      hoverImage:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/447/333/products/qua-tang-doanh-nghiep-damas-candles12.jpg?v=1702462823837",
      description: "Set nến thơm, trà, bánh với giỏ cói thủ công",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  interface Gift {
    id: number;
    name: string;
    image: string;
    hoverImage?: string;
    description: string;
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isDragging.current = true;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftStart.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging.current) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2;
      scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative">
      <h2 className="text-center text-3xl font-bold mb-8">GIFTS</h2>
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition"
          onClick={scrollLeft}
        >
          <IoIosArrowBack className="text-2xl" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hover:bg-gray-100 transition"
          onClick={scrollRight}
        >
          <IoIosArrowForward className="text-2xl" />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-2 overflow-x-auto p-4 cursor-grab active:cursor-grabbing no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="relative min-w-[320px] bg-white  overflow-hidden p-1"
              onMouseEnter={() => setHoveredItem(gift?.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative">
                <Image
                  src={
                    hoveredItem === gift.id
                      ? gift.hoverImage || gift.image
                      : gift.image
                  }
                  alt={gift.name}
                  width={320}
                  height={320}
                  className="w-full h-72 object-cover transition-all duration-500 ease-in-out"
                />
                {hoveredItem === gift.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300">
                    <button className="px-6 py-2 bg-white text-black rounded-md font-semibold shadow-md">
                      Chi tiết
                    </button>
                  </div>
                )}
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-bold text-lg uppercase text-gray-900">
                  {gift.name}
                </h3>
                <p className="text-sm text-gray-600 leading-tight mt-1 font-bold">
                  Liên hệ
                </p>
                <p className="text-sm text-gray-600 leading-tight mt-1">
                  {gift.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
