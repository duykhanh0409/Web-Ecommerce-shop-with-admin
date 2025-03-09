"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const HeaderHome = () => {
  const [dropdown, setDropdown] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  interface MenuItem {
    name: string;
    link?: string;
    subMenu?: string[];
  }

  const toggleDropdown = (index: number): void => {
    setDropdown(dropdown === index ? null : index);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Mobile Menu Button (Left Side) */}

        {/* Left Section: Hotline */}
        <div className="hidden md:flex text-sm text-gray-600 font-semibold">
          HOTLINE: <span className="font-bold">088.999.3513</span>
        </div>

        <button className="md:hidden text-2xl" onClick={toggleDrawer}>
          <FiMenu />
        </button>

        {/* Center Section: Logo */}
        <Link href="/" className="flex-grow text-center">
          <h1 className="text-3xl font-bold tracking-wide">DAMAS</h1>
        </Link>

        {/* Right Section: Account & Cart for Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
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

      {/* Search Bar (Always Visible) */}
      <div className="px-6 py-2">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Bạn cần tìm gì hôm nay?"
            className="border rounded-full px-4 py-2 text-sm w-full focus:outline-none shadow-sm"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch />
          </button>
        </div>
      </div>

      {/* Navigation Menu for Desktop */}
      <nav className="hidden md:block border-t border-gray-200">
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
            { name: "DỊCH VỤ", link: "#" },
            { name: "VỀ DAMAS", link: "#" },
            { name: "CHUYỆN TRÒ", link: "#" },
            { name: "LIÊN HỆ", link: "#" },
            { name: "ƯU ĐÃI", link: "#" },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.link}
                className="hover:text-gray-500 flex items-center gap-1"
              >
                {item.name}{" "}
                {item.subMenu && item.subMenu.length > 0 && (
                  <IoIosArrowDown className="text-xs" />
                )}
              </Link>
              {item.subMenu && item.subMenu.length > 0 && (
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

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleDrawer}
        >
          <FiX />
        </button>

        {/* Drawer Menu */}
        <div className="p-6 pt-12">
          {[
            { name: "NẾN", subMenu: ["Nến thơm", "Nến cốc", "Nến trang trí"] },
            {
              name: "TINH DẦU",
              subMenu: [
                "Tinh dầu tự nhiên",
                "Dầu thơm khuếch tán",
                "Tinh dầu xe ô tô",
              ],
            },
            {
              name: "GIFTS 🎁",
              subMenu: [
                "Quà tặng cao cấp",
                "Set quà tặng",
                "Hộp quà sang trọng",
              ],
            },
            {
              name: "PHỤ KIỆN",
              subMenu: ["Bộ đốt nến", "Đế nến", "Dụng cụ khuếch tán"],
            },
            { name: "DỊCH VỤ" },
            { name: "VỀ DAMAS" },
            { name: "CHUYỆN TRÒ" },
            { name: "LIÊN HỆ" },
            { name: "ƯU ĐÃI" },
            { name: "Đăng Nhập" },
            { name: "Đăng Ký" },
          ].map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left py-3 px-4 text-lg font-semibold border-b flex justify-between items-center"
              >
                {item.name}
                {item.subMenu && (
                  <IoIosArrowDown
                    className={`text-lg transition ${
                      dropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {item.subMenu && dropdown === index && (
                <div className="pl-6 bg-gray-50">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href="#"
                      className="block py-2 px-4 text-gray-700"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop when Drawer is Open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
};

export default HeaderHome;
