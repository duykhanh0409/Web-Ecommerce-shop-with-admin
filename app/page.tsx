// import {
//   CategoryMenu,
//   Hero,
//   Incentives,
//   IntroducingSection,
//   Newsletter,
//   ProductsSection,
// } from "@/components";

// export default function Home() {
//   return (
//     <>
//     <Hero />
//     <IntroducingSection />
//     <CategoryMenu />
//     <ProductsSection />
//     </>
//   );
// }

"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [bgImage, setBgImage] = useState(
    "https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/slider_1.jpg?1740551716867"
  );

  const handleHover = (newBg) => {
    setBgImage(newBg);
  };

  return (
    <div className="relative bg-white min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[600px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[600px] mt-16 flex items-center justify-center">
        <Image
          src="https://bizweb.dktcdn.net/100/447/333/themes/850272/assets/slider_1.jpg?1740551716867"
          alt="Candle Gift Set"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-90"
        />
      </div>

      {/* Featured Categories */}
      <GiftSection />

      {/* Product Slider */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-3xl font-bold mb-8">
          Sản Phẩm Nổi Bật
        </h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="min-w-[300px] bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <Image
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/447/333/products/qua-tang-doanh-nghiep-damas-candles24.jpg?v=1702463645897"
                alt="Product"
                width={300}
                height={300}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Sản phẩm {item}</h3>
                <p className="text-sm text-gray-600">Mô tả sản phẩm nổi bật</p>
                <p className="text-lg font-bold">185.000₫</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12 relative z-10">
        <p className="text-gray-600">
          &copy; 2025 DAMAS Candles & Gifts. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Left Section: Hotline */}
        <div className="text-sm text-gray-600 font-semibold">
          HOTLINE: <span className="font-bold">088.999.3513</span>
        </div>

        {/* Center Section: Logo and Search Bar */}
        <div className="flex flex-col items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold tracking-wide">DAMAS</h1>
          </Link>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Bạn cần tìm gì hôm nay?"
              className="border rounded-full px-4 py-2 text-sm w-96 focus:outline-none shadow-sm"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </button>
          </div>
        </div>

        {/* Right Section: Account and Cart */}
        <div className="flex items-center gap-6 text-sm font-semibold">
          <Link
            href="/account"
            className="flex items-center gap-1 hover:text-gray-500"
          >
            <FiUser className="text-lg" /> TÀI KHOẢN
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1 hover:text-gray-500 relative"
          >
            <FiShoppingCart className="text-lg" /> GIỎ HÀNG
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 py-0.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Menu with Hover Dropdowns */}
      <nav className="border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 text-sm font-semibold py-2">
          {[
            {
              name: "NẾN",
              link: "#",
              subMenu: ["Nến thơm", "Nến cốc", "Nến trang trí"],
            },
            {
              name: "TINH DẦU",
              link: "#",
              subMenu: [
                "Tinh dầu tự nhiên",
                "Dầu thơm khuếch tán",
                "Tinh dầu xe ô tô",
              ],
            },
            {
              name: "GIFTS 🎁",
              link: "#",
              subMenu: [
                "Quà tặng cao cấp",
                "Set quà tặng",
                "Hộp quà sang trọng",
              ],
            },
            {
              name: "PHỤ KIỆN",
              link: "#",
              subMenu: ["Bộ đốt nến", "Đế nến", "Dụng cụ khuếch tán"],
            },
            { name: "DỊCH VỤ", link: "#", subMenu: [] },
            { name: "VỀ DAMAS", link: "#", subMenu: [] },
            { name: "CHUYỆN TRÒ", link: "#", subMenu: [] },
            { name: "LIÊN HỆ", link: "#", subMenu: [] },
            { name: "ƯU ĐÃI", link: "#", subMenu: [] },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.link}
                className="hover:text-gray-500 flex items-center gap-1"
              >
                {item.name}{" "}
                {item.subMenu.length > 0 && (
                  <IoIosArrowDown className="text-xs" />
                )}
              </Link>
              {item.subMenu.length > 0 && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

const GiftSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
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
      description: "Set nến thơm với túi/ hộp mây tre đan",
    },
    {
      id: 3,
      name: "Set 04",
      image:
        "https://bizweb.dktcdn.net/100/447/333/products/qua-tang-doanh-nghiep-damas-candles24.jpg?v=1702463645897",
      description: "Set quà tặng với giỏ mây tre đan",
    },
    {
      id: 4,
      name: "Set 03",
      image:
        "https://bizweb.dktcdn.net/100/447/333/products/qua-tang-doanh-nghiep-damas-candles24.jpg?v=1702463645897",
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
          className="flex space-x-6 overflow-x-auto p-4 cursor-grab active:cursor-grabbing scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="relative min-w-[320px] bg-white  overflow-hidden p-1"
              onMouseEnter={() => setHoveredItem(gift.id)}
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
