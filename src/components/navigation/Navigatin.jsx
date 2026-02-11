import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import Logo from "../../assets/ilefund-Logo-long.png";
import right_arrow from "../../assets/arrow-long-right.png";
import angle_down from "../../assets/angle-down-small.png";
import { Sling as Hamburger } from "hamburger-react";
import {
  BulbOutlined,
  EyeOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const resourcesMenu = (
  <Menu className="w-84 p-2 !py-5">
    <div className="grid grid-cols-2 gap-2">
      {/* <Menu.Item key="3" icon={<BulbOutlined />}>
        <Link to="/blog">Blog</Link>
      </Menu.Item> */}
      <Menu.Item key="4" icon={<EyeOutlined />}>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<EyeOutlined />}>
        <Link to="/terms-of-use">Terms of Use</Link>
      </Menu.Item>
      <Menu.Item key="7" icon={<ContactsOutlined />}>
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </div>
  </Menu>
);

const moveToPage = () => {
  window.location.href = "https://app.ilefund.com";
};

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [showResourcesDropdownMobile, setShowResourcesDropdownMobile] =
    useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileNavClick = () => {
    setOpen(false);
    setShowResourcesDropdownMobile(false);
  };

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-black hover:text-blue-600"
    }`;

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"} 
      `}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center w-11/12  max-w-[75rem]  2xl:max-w-[110rem]
    3xl:max-w-[130rem]  mx-auto py-4">
        <Link to="/">
          <img src={Logo} alt="ilefund-logo" className="w-36 sm:w-40" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <NavLink to="/about-us" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/properties" className={navLinkClass}>
            Properties
          </NavLink>
          <NavLink to="/how-it-works" className={navLinkClass}>
            How It Works
          </NavLink>
          <NavLink to="/faqs" className={navLinkClass}>
            FAQs
          </NavLink>

          <Dropdown overlay={resourcesMenu} trigger={["click"]}>
            <span className="cursor-pointer inline-flex items-center">
              Resources
              <img src={angle_down} alt="down" className="h-4 ml-1 mt-1" />
            </span>
          </Dropdown>
        </div>

        {/* CTA */}
         <div></div>
        {/* <button
          onClick={moveToPage}
          className="hidden md:flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          <span>Get Started</span>
          <img src={right_arrow} alt="arrow" />
        </button> */}

        {/* HAMBURGER */}
        <div className="md:hidden z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.6} />
        </div>
      </div>

      {/* MOBILE MENU – VERTICAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35 }}
            className="
              fixed top-0 left-0
              h-full
              w-[85%]
              max-w-[360px]
              bg-white
              z-50
              px-6
              py-8
              flex
              flex-col
            "
          >
            {/* LOGO */}
            <Link to="/" onClick={handleMobileNavClick}>
              <img src={Logo} alt="logo" className="w-32 mb-10" />
            </Link>

            {/* LINKS */}
            <div className="flex flex-col gap-6 text-base font-medium">
              <Link to="/about-us" onClick={handleMobileNavClick}>
                About
              </Link>

              <Link to="/properties" onClick={handleMobileNavClick}>
                Properties
              </Link>

              <Link to="/how-it-works" onClick={handleMobileNavClick}>
                How It Works
              </Link>

              <Link to="/faqs" onClick={handleMobileNavClick}>
                FAQs
              </Link>

              {/* RESOURCES DROPDOWN */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() =>
                    setShowResourcesDropdownMobile(
                      !showResourcesDropdownMobile
                    )
                  }
                  className="flex items-center justify-between"
                >
                  <span>Resources</span>
                  <img
                    src={angle_down}
                    alt="down"
                    className={`h-5 transition ${
                      showResourcesDropdownMobile ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {showResourcesDropdownMobile && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 flex flex-col gap-3 text-sm"
                    >
                      {/* <Link to="/blog" onClick={handleMobileNavClick}>
                        Blog
                      </Link> */}
                      <Link
                        to="/privacy-policy"
                        onClick={handleMobileNavClick}
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        to="/terms-of-use"
                        onClick={handleMobileNavClick}
                      >
                        Terms of Use
                      </Link>
                      <Link to="/contact" onClick={handleMobileNavClick}>
                        Contact
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <></>
              {/* <button
                onClick={moveToPage}
                className="mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-4 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Get Started
                <img src={right_arrow} alt="arrow" />
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={handleMobileNavClick}
        />
      )}
    </nav>
  );
};

export default Navigation;
