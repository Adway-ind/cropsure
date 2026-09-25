import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Logo from "../assets/image/logo/logo2.png";

const navigation = ["Home", "About Us", "Products", "Contact Us"];

const solutions = [
  "Crop Protection",
  "Plant Nutrition",
  "Bio Solutions",
  "Soil Health",
  "Specialty Agri-Tech",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#06170E] text-white">
      {/* =====================================================
                MAIN FOOTER
            ===================================================== */}
      <div
        className="
                    mx-auto
                    max-w-[1440px]
                    px-6
                    py-20
                    sm:px-8
                    lg:px-10
                    lg:py-24
                "
      >
        <div
          className="
                        grid
                        gap-14
                        lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]
                        lg:gap-10
                        xl:gap-16
                    "
        >
          {/* =================================================
                        BRAND
            ================================================= */}
          <div>
            <a
              href="/"
              className="
            inline-flex
            items-center
            gap-3
        "
            >
              <div
                className="
                flex
                h-full
                w-full
                items-center
                justify-center
                rounded-[7px]
               
            "
              >
                <img
                  src={Logo}
                  alt="CropSure Logo"
                  className="h-full w-60 object-contain"
                />
              </div>
            </a>

            {/* =====================================================
        DESCRIPTION
    ===================================================== */}
            <p
              className="
            mt-2
            max-w-[360px]
            text-[14px]
            leading-[1.8]
            text-white/65
        "
            >
              Advanced agricultural solutions designed to support healthier
              crops, stronger yields and a more sustainable future.
            </p>

            {/* =====================================================
        CERTIFICATION
    ===================================================== */}

            {/* =====================================================
        SOCIAL
    ===================================================== */}
            <div className="mt-8">
              <p
                className="
                mb-4
                text-[10px]
                font-medium
                tracking-[0.18em]
                text-white/45
            "
              >
                CONNECT & SOCIAL
              </p>

              <div className="flex items-center gap-2">
                {/* INSTAGRAM */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-white/10
                    bg-white/5
                    text-white/60
                    transition-all
                    duration-200
                    hover:border-[#E9EF9B]/40
                    hover:bg-[#E9EF9B]/10
                    hover:text-[#E9EF9B]
                "
                >
                  <FaInstagram size={14} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-white/10
                    bg-white/5
                    text-white/60
                    transition-all
                    duration-200
                    hover:border-[#E9EF9B]/40
                    hover:bg-[#E9EF9B]/10
                    hover:text-[#E9EF9B]
                "
                >
                  <FaLinkedinIn size={14} />
                </a>

                {/* FACEBOOK */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-white/10
                    bg-white/5
                    text-white/60
                    transition-all
                    duration-200
                    hover:border-[#E9EF9B]/40
                    hover:bg-[#E9EF9B]/10
                    hover:text-[#E9EF9B]
                "
                >
                  <FaFacebookF size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
                        NAVIGATION
                    ================================================= */}
          <div>
            <p
              className="
                                mb-6
                                text-[11px]
                                font-semibold
                                tracking-[0.18em]
                                text-[#E9EF9B]
                            "
            >
              NAVIGATION
            </p>

            <nav className="space-y-4">
              {navigation.map((item, index) => (
                <a
                  key={item}
                  href={
                    index === 0
                      ? "/"
                      : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className={`
                                        group
                                        flex
                                        w-fit
                                        items-center
                                        gap-1.5
                                        text-[13px]
                                        transition-colors
                                        duration-200
                                        ${
                                          index === 0
                                            ? "font-medium text-[#E9EF9B]"
                                            : "text-white/70 hover:text-white"
                                        }
                                    `}
                >
                  <span>{item}</span>

                  <ArrowUpRight
                    size={11}
                    strokeWidth={1.8}
                    className="
                                            opacity-0
                                            transition-all
                                            duration-200
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                            group-hover:opacity-100
                                        "
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
                        SOLUTIONS
                    ================================================= */}
          <div>
            <p
              className="
                                mb-6
                                text-[11px]
                                font-semibold
                                tracking-[0.18em]
                                text-[#E9EF9B]
                            "
            >
              SOLUTIONS
            </p>

            <nav className="space-y-4">
              {solutions.map((item) => (
                <a
                  key={item}
                  href="#solutions"
                  className="
                                        block
                                        w-fit
                                        text-[13px]
                                        text-white/70
                                        transition-colors
                                        duration-200
                                        hover:text-white
                                    "
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
                        CONTACT
                    ================================================= */}
          <div>
            <p
              className="
                                mb-6
                                text-[11px]
                                font-semibold
                                tracking-[0.18em]
                                text-[#E9EF9B]
                            "
            >
              CONTACT & GLOBAL HQ
            </p>

            {/* PHONE */}
            <a
              href="tel:+1800492767"
              className="
                                group
                                flex
                                items-center
                                gap-3
                                text-[13px]
                                text-white/75
                                transition-colors
                                duration-200
                                hover:text-white
                            "
            >
              <Phone
                size={15}
                strokeWidth={1.7}
                className="shrink-0 text-[#E9EF9B]"
              />

              <span>+1 (800) 492-CROP</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@cropsure-agri.com"
              className="
                                mt-5
                                flex
                                items-center
                                gap-3
                                text-[13px]
                                text-white/75
                                transition-colors
                                duration-200
                                hover:text-white
                            "
            >
              <Mail
                size={15}
                strokeWidth={1.7}
                className="shrink-0 text-[#E9EF9B]"
              />

              <span>info@cropsure-agri.com</span>
            </a>

            {/* LOCATION */}
            <div
              className="
                                mt-5
                                flex
                                items-start
                                gap-3
                                text-[13px]
                                leading-[1.7]
                                text-white/70
                            "
            >
              <MapPin
                size={15}
                strokeWidth={1.7}
                className="
                                    mt-0.5
                                    shrink-0
                                    text-[#E9EF9B]
                                "
              />

              <span>
                Global Agri-Center HQ,
                <br />
                Geneva & Des Moines
              </span>
            </div>

            {/* SOCIAL TITLE */}

            {/* SOCIAL ICONS */}
          </div>
        </div>

        {/* =====================================================
                    BOTTOM DIVIDER
                ===================================================== */}
        <div
          className="
                        mt-16
                        border-t
                        border-white/10
                        pt-7
                    "
        >
          <div
            className="
                            flex
                            flex-col
                            justify-between
                            gap-5
                            sm:flex-row
                            sm:items-center
                        "
          >
            {/* COPYRIGHT */}
            <p
              className="
                                text-[11px]
                                leading-[1.6]
                                tracking-[0.02em]
                                text-white/50
                            "
            >
              © {new Date().getFullYear()} CropSure. All rights reserved.
            </p>

            {/* LEGAL LINKS */}
            <div
              className="
                                flex
                                flex-wrap
                                items-center
                                gap-x-5
                                gap-y-3
                            "
            >
              <a
                href="#"
                className="
                                    text-[10px]
                                    text-white/45
                                    transition-colors
                                    hover:text-white
                                "
              >
                Privacy Policy
              </a>

              <span className="text-white/15">•</span>

              <a
                href="#"
                className="
                                    text-[10px]
                                    text-white/45
                                    transition-colors
                                    hover:text-white
                                "
              >
                Terms of Service
              </a>

              <span className="text-white/15">•</span>

              <a
                href="#"
                className="
                                    text-[10px]
                                    text-white/45
                                    transition-colors
                                    hover:text-white
                                "
              >
                Environmental Compliance
              </a>

              <span className="text-white/15">•</span>

              <a
                href="#"
                className="
                                    text-[10px]
                                    text-[#E9EF9B]/75
                                    transition-colors
                                    hover:text-[#E9EF9B]
                                "
              >
                Sustainable Ag Alliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
