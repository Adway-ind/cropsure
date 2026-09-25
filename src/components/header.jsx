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

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}
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

            ${
              scrolled
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
            <div className="flex items-center justify-center">
              <img
                src={Logo}
                alt="CropSure Logo"
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
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
              const isActive = location.pathname === item.href;

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
                  <span>{item.name}</span>

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

                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
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
              <span>Get in Touch</span>

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
            onClick={() => setMenuOpen(true)}
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
            <Menu size={21} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE SIDEBAR OVERLAY
      ===================================================== */}
      <div
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/40
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-dvh
          w-[82%]
          max-w-[380px]
          flex-col
          border-l
          border-white/10
          bg-[#0B2F20]/95
          shadow-[-15px_0_50px_rgba(0,0,0,0.3)]
          backdrop-blur-2xl
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden

          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* =====================================================
            SIDEBAR HEADER
        ===================================================== */}
        <div
          className="
            flex
            h-[88px]
            shrink-0
            items-center
            justify-between
            border-b
            border-white/10
            px-6
          "
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center"
          >
            <img
              src={Logo}
              alt="CropSure Logo"
              className="h-12 w-12 object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <X size={21} strokeWidth={1.8} />
          </button>
        </div>

        {/* =====================================================
            SIDEBAR NAVIGATION
        ===================================================== */}
        <nav className="flex flex-1 flex-col px-5 py-8">
          <p
            className="
              mb-5
              px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white/35
            "
          >
            Navigation
          </p>

          <div className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-4
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-[#E9EF9B] text-[#172019]"
                        : "text-white/75 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`
                        text-[10px]
                        font-medium
                        ${
                          isActive
                            ? "text-[#172019]/50"
                            : "text-white/25"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    <span className="text-[15px] font-medium">
                      {item.name}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* =====================================================
            SIDEBAR FOOTER
        ===================================================== */}
        <div className="border-t border-white/10 p-5">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              bg-[#E9EF9B]
              px-5
              py-4
              text-[12px]
              font-semibold
              text-[#172019]
              transition-all
              duration-300
              hover:bg-[#F1F5B5]
              hover:shadow-[0_8px_30px_rgba(233,239,155,0.18)]
            "
          >
            <span>Get in Touch</span>

            <ArrowUpRight
              size={17}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          <p className="mt-5 text-center text-[10px] text-white/25">
            CropSure
          </p>
        </div>
      </aside>
    </>
  );
};

export default Header;