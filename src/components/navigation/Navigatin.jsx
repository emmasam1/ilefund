import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import Logo from "../../assets/ilefund-Logo-long.png";
import right_arrow from "../../assets/arrow-long-right.png";
import angle_down from "../../assets/angle-down-small.png";
import { Sling as Hamburger } from "hamburger-react";
import { BulbOutlined, EyeOutlined, ContactsOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const goalsMenu = (
  <Menu className="w-48 p-2 !py-5">
    <Menu.Item key="1" icon={<BulbOutlined />}>
      <Link to="/lands">Lands</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<EyeOutlined />}>
      <Link to="/homes">Homes</Link>
    </Menu.Item>
  </Menu>
);

const moveToPage = () => {
  window.location.href = "https://app.ilefund.com";
};
const resourcesMenu = (
  <Menu className="w-74 p-2 !py-5">
    <div className="grid grid-cols-2 gap-2">
      <Link to="/blog">
        <Menu.Item key="3" icon={<BulbOutlined />} className="!bg-white">
          {" "}
          Blog
        </Menu.Item>
      </Link>
      {/* <Link to="/">
        <Menu.Item key="4" icon={<EyeOutlined />} className="!bg-white">
          {" "}
          Home
        </Menu.Item>
      </Link> */}
      <Link to="/privacy-policy">
        <Menu.Item key="4" icon={<EyeOutlined />} className="!bg-white">
          {" "}
          Privacy Policy's
        </Menu.Item>
      </Link>
      <Menu.Item key="5" icon={<BulbOutlined />} className="!bg-white">
        <Link to="/how-to-save">How to Save</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<EyeOutlined />} className="!bg-white">
        <Link to="/terms-of-use">Terms of Use</Link>
      </Menu.Item>
      {/* <Menu.Item key="7" icon={<EyeOutlined />} className="!bg-white">
        <Link to="/team">Team</Link>
      </Menu.Item> */}
      <Menu.Item key="7" icon={<ContactsOutlined />} className="!bg-white">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </div>
  </Menu>
);

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const [showGoalsDropdownMobile, setShowGoalsDropdownMobile] = useState(false);
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
    setShowGoalsDropdownMobile(false);
    setShowResourcesDropdownMobile(false);
  };
const navLinkClass = ({ isActive }) =>
  `cursor-pointer transition ${
    isActive
      ? "text-blue-600 font-semibold"
      : "text-black hover:text-blue-600"
  }`;

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 py-4 transition-shadow
  ${scrolled ? "shadow-md bg-white" : "bg-transparent"}
  bg-[url(https://res.cloudinary.com/da1mxvbx2/image/upload/v1767944328/ilefund/ilefund-land-nigeria-bg-2_fymozq.png)]`}
>


      <div className="flex justify-between items-center m-auto w-11/12">
        <Link to="/">
          <img src={Logo} alt="ilefund-logo" className="w-40" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-black font-medium">
           <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/how-it-works" className={navLinkClass}>
            How It Works
          </NavLink>
          <NavLink to="/faqs" className={navLinkClass}>
            FAQs
          </NavLink>
          {/* 
          <Dropdown
            overlay={goalsMenu}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <span className="cursor-pointer inline-flex items-center">
              Real Estate{" "}
              <img src={angle_down} alt="down" className="h-4 ml-1 mt-1" />
            </span>
          </Dropdown>

          <Link to="/properties" className="cursor-pointer">
            Properties
          </Link> */}

          <Dropdown
            overlay={resourcesMenu}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <NavLink>
            <span className="cursor-pointer inline-flex items-center">
              Resources{" "}
              <img src={angle_down} alt="down" className="h-4 ml-1 mt-1" />
            </span>
            </NavLink>
          </Dropdown>
        </div>

        {/* CTA */}
        
        
        <button
          onClick={moveToPage}
          className="hidden md:flex items-center space-x-2 bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer"
        >
          <span>Get Started</span>
          <img src={right_arrow} alt="arrow" />
        </button>

        {/* Hamburger */}
        <div className="md:hidden z-30">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 h-full w-3/4 bg-white z-50 p-6"
          >
           <Link to='/' onClick={handleMobileNavClick}>
            <div className="flex justify-between items-center mb-8">
              <img src={Logo} alt="logo" className="w-32" />
            </div>
           </Link>

            <div className="space-y-6 text-black font-medium">
              <Link
                to="/about-us"
                onClick={handleMobileNavClick}
                className="block"
              >
                About
              </Link>

              {/* Mobile Dropdown for Goals */}
              {/* <div>
                <span
                  className="cursor-pointer flex items-center"
                  onClick={() =>
                    setShowGoalsDropdownMobile(!showGoalsDropdownMobile)
                  }
                >
                  Goals{" "}
                  <img src={angle_down} alt="down" className="h-5 ml-1 mt-1" />
                </span>
                <AnimatePresence>
                  {showGoalsDropdownMobile && (
                    <motion.div
                      key="goals-dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-3 space-y-3 text-sm"
                    >
                      <Link
                        to="/lands"
                        onClick={handleMobileNavClick}
                        className="block flex items-center"
                      >
                        <BulbOutlined className="mr-2 text-blue-600" /> Lands
                      </Link>
                      <Link
                        to="/homes"
                        onClick={handleMobileNavClick}
                        className="block flex items-center"
                      >
                        <EyeOutlined className="mr-2 text-green-600" /> Homes
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              <Link
                to="/properties"
                onClick={handleMobileNavClick}
                className="block"
              >
                Real Estate
              </Link>
              {/* <Link
                to="/properties"
                onClick={handleMobileNavClick}
                className="block"
              >
                Properties
              </Link> */}
              <Link to="/faqs" onClick={handleMobileNavClick} className="block">
                FAQs
              </Link>

              {/* Mobile Dropdown for Resources */}
              <div>
                <span
                  className="cursor-pointer flex items-center"
                  onClick={() =>
                    setShowResourcesDropdownMobile(!showResourcesDropdownMobile)
                  }
                >
                  Resources{" "}
                  <img src={angle_down} alt="down" className="h-5 ml-1 mt-1" />
                </span>
                <AnimatePresence>
                  {showResourcesDropdownMobile && (
                    <motion.div
                      key="resources-dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-3 space-y-3 text-sm"
                    >
                      <Link
                        to="/blog"
                        onClick={handleMobileNavClick}
                        className="block flex items-center"
                      >
                        <BulbOutlined className="mr-2 text-blue-600" /> Blog
                      </Link>
                      <Link
                        to="/real-estate"
                        onClick={handleMobileNavClick}
                        className="block flex items-center"
                      >
                        <EyeOutlined className="mr-2 text-green-600" /> Real
                        Estate
                      </Link>
                      <Link
                        to="/how-to-save"
                        onClick={handleMobileNavClick}
                        className="block flex items-center"
                      >
                        <BulbOutlined className="mr-2 text-blue-600" /> How to
                        Save
                      </Link>
                      <Link
                        to="/fmb"
                        onClick={handleMobileNavClick}
                        className="block flex items-center"
                      >
                        <EyeOutlined className="mr-2 text-green-600" /> FMB
                      </Link>
                      <Link
                        to="/team"
                        onClick={handleMobileNavClick}
                        className="block flex items-center"
                      >
                        <EyeOutlined className="mr-2 text-green-600" /> Team
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/get-started" onClick={handleMobileNavClick}>
                <button className="flex items-center space-x-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition">
                  <span>Get Started</span>
                  <img src={right_arrow} alt="arrow" />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0000006b] bg-opacity-20 z-40 md:hidden"
          onClick={handleMobileNavClick}
        />
      )}
    </nav>
  );
};

export default Navigation;
