import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contacts", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <a
          href="/"
          className="
            flex
            shrink-0
            items-center
            gap-2.5
          "
        >
          {/* Logo Icon */}
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-[9px]
              bg-white/90
              text-[#174D32]
              transition-all
              duration-300
            "
          >
            <span className="text-sm font-bold">
              ◉
            </span>
          </div>

          {/* Logo Text */}
          <div className="flex flex-col leading-none">
            <span
              className="
                text-[14px]
                font-bold
                tracking-[-0.02em]
                text-white
              "
            >
              CROPSURE
            </span>

            <span
              className="
                mt-1
                text-[6px]
                font-medium
                tracking-[0.18em]
                text-white/70
              "
            >
              AGRI-SCIENCE
            </span>
          </div>
        </a>

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
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
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

              {/* =================================================
                  CENTER-OUT UNDERLINE
              ================================================= */}
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
                  ${
                    index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </a>
          ))}
        </nav>

        {/* =====================================================
            RIGHT ACTION
        ===================================================== */}
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <a
            href="/contact"
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
          </a>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <button
          type="button"
          aria-label="Open menu"
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
          <Menu
            size={21}
            strokeWidth={1.8}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;