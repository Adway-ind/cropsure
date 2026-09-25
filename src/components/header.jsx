import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/image/logo/logo2.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contacts", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-5 sm:px-6 lg:px-8">
      <div
        className={`
                    mx-auto
                    flex
                    h-[68px]
                    max-w-[1320px]
                    items-center
                    rounded-[18px]
                    border
                    px-4
                    sm:px-5
                    lg:px-6
                    transition-all
                    duration-500
                    ease-out
                    ${scrolled
            ? `
                                border-white/10
                                bg-[#0B2F20]/85
                                shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                                backdrop-blur-2xl
                            `
            : `
                                border-white/20
                                bg-white/10
                                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                                backdrop-blur-xl
                            `
          }
                `}
      >

        {/* =====================================================
                    LOGO
                ===================================================== */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <div
            className="
        flex
        h-full  
        w-full
        items-center
        justify-center
        rounded-[9px]
    "
          >
            <img
              src={Logo}
              alt="CropSure Logo"
              className="h-50 w-50 object-contain"
            />
          </div>

          
        </Link>


        {/* =====================================================
                    DESKTOP NAVIGATION
                ===================================================== */}
        <nav
          className="
                        absolute
                        left-1/2
                        hidden
                        -translate-x-1/2
                        items-center
                        gap-8
                        lg:flex
                    "
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className="
                                    group
                                    relative
                                    flex
                                    h-[68px]
                                    items-center
                                    text-[12px]
                                    font-medium
                                    text-white/75
                                    transition-colors
                                    duration-300
                                    hover:text-white
                                "
              >
                <span>
                  {item.name}
                </span>

                {/* Center-out underline */}
                <span
                  className={`
                                        absolute
                                        bottom-[17px]
                                        left-1/2
                                        h-[1.5px]
                                        -translate-x-1/2
                                        bg-[#E9EF9B]
                                        transition-all
                                        duration-300
                                        ease-out
                                        ${isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }
                                    `}
                />
              </Link>
            );
          })}
        </nav>


        {/* =====================================================
                    GET IN TOUCH
                ===================================================== */}
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="
                            group
                            flex
                            h-10
                            items-center
                            gap-2
                            rounded-full
                            bg-[#E9EF9B]
                            px-5
                            text-[11px]
                            font-semibold
                            text-[#172019]
                            transition-all
                            duration-300
                            hover:bg-[#F1F5B5]
                            hover:shadow-[0_6px_20px_rgba(233,239,155,0.25)]
                        "
          >
            <span>
              Get in Touch
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
            />
          </Link>
        </div>


        {/* =====================================================
                    MOBILE MENU BUTTON
                ===================================================== */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
                        ml-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        transition-all
                        duration-300
                        hover:border-white/30
                        hover:bg-white/15
                        md:hidden
                    "
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.8} />
          ) : (
            <Menu size={21} strokeWidth={1.8} />
          )}
        </button>
      </div>


      {/* =====================================================
                MOBILE NAVIGATION
            ===================================================== */}
      {menuOpen && (
        <div
          className="
                        mx-4
                        mt-3
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-white/10
                        bg-[#0B2F20]/95
                        p-3
                        shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                        backdrop-blur-2xl
                        md:hidden
                        sm:mx-6
                    "
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    px-4
                                    py-3.5
                                    text-[13px]
                                    font-medium
                                    transition-colors
                                    ${isActive
                    ? "bg-white/10 text-[#E9EF9B]"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                  }
                                `}
              >
                {item.name}

                <ArrowUpRight size={14} />
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;