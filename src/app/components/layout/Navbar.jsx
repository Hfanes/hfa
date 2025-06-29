"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ExpansionFill from "@/components/ui/ExpansionFill";
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import LeftNavbar from "./LeftNavbar";

const navItems = [
  { label: "Home", href: "#home", color: "bg-deepBlue" },
  { label: "About", href: "#about", color: "bg-deepPurple" },
  { label: "Projects", href: "#projects", color: "bg-accentYellow" },
  { label: "Contact", href: "#contact", color: "bg-brightPurple" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isOverNavbar, setIsOverNavbar] = useState(false);
  const [expansionStates, setExpansionStates] = useState({});
  const [cascadeStates, setCascadeStates] = useState({});
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [navbarCollapsedAtTop, setNavbarCollapsedAtTop] = useState(false);
  const elementRefs = useRef([]);
  const navbarRef = useRef(null);

  const scrollToTopFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      // If we scroll and navbar was expanded, collapse it
      if (window.scrollY > 100 && navbarExpanded) {
        setNavbarExpanded(false);
      }
      // If we return to the top, expand the navbar
      if (window.scrollY === 0) {
        setNavbarCollapsedAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarExpanded]);

  //scroll to top
  useEffect(() => {
    const toggleVisibility = () => {
      setScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Mouse position relative to a nav item (for animation origin).
  const getRelativePosition = useCallback((element, clientX, clientY) => {
    const rect = element.getBoundingClientRect();
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;
    return {
      relativeX: Math.max(0, Math.min(1, relativeX)),
      relativeY: Math.max(0, Math.min(1, relativeY)),
    };
  }, []);

  const handleMouseEnter = useCallback(
    (index, event) => {
      if (isMobile) return;

      const element = event.currentTarget;
      const { relativeX, relativeY } = getRelativePosition(
        element,
        event.clientX,
        event.clientY
      );

      setIsOverNavbar(true);

      // If navbar is collapsed and not yet expanded, expand it first
      if (isScrolled && !navbarExpanded) {
        setNavbarExpanded(true);
      }

      setExpansionStates((prev) => ({
        ...prev,
        [index]: {
          isActive: true,
          originX: relativeX,
          originY: relativeY,
          scale: 0,
          isExpanding: true,
        },
      }));

      // Animate expansion
      let progress = 0;
      const animate = () => {
        //"anim speed"
        progress += 0.08;
        if (progress >= 1) {
          progress = 1;
          setExpansionStates((prev) => ({
            ...prev,
            [index]: { ...prev[index], isExpanding: false, scale: 1 },
          }));
        } else {
          setExpansionStates((prev) => ({
            ...prev,
            [index]: { ...prev[index], scale: progress },
          }));
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    },
    [getRelativePosition, isMobile, isScrolled, navbarExpanded]
  );

  const handleMouseLeave = useCallback(
    (index, event) => {
      if (isMobile) return;

      const element = event.currentTarget;
      const { relativeX, relativeY } = getRelativePosition(
        element,
        event.clientX,
        event.clientY
      );

      setExpansionStates((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          exitX: relativeX,
          exitY: relativeY,
          isContracting: true,
        },
      }));

      // Animate contraction
      let progress = expansionStates[index]?.scale || 1;
      const animate = () => {
        progress -= 0.12;
        if (progress <= 0) {
          progress = 0;
          setExpansionStates((prev) => ({
            ...prev,
            [index]: {
              ...prev[index],
              isActive: false,
              isContracting: false,
              scale: 0,
            },
          }));
        } else {
          setExpansionStates((prev) => ({
            ...prev,
            [index]: { ...prev[index], scale: progress },
          }));
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    },
    [getRelativePosition, expansionStates, isMobile]
  );

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      // Close animation - collapse to circles
      navItems.forEach((_, index) => {
        setTimeout(() => {
          setCascadeStates((prev) => ({
            ...prev,
            [index]: { isCollapsing: true },
          }));
        }, index * 100);
      });

      setTimeout(() => {
        setMobileMenuOpen(false);
        setCascadeStates({});
      }, navItems.length * 100 + 300);
    } else {
      // Open animation - expand from circles
      setMobileMenuOpen(true);
      navItems.forEach((_, index) => {
        setTimeout(() => {
          setCascadeStates((prev) => ({
            ...prev,
            [index]: { isExpanding: true },
          }));
        }, index * 150);
      });
    }
  };

  const handleNavbarMouseEnter = useCallback(() => {
    if (!isMobile) {
      if (!isScrolled && navbarCollapsedAtTop) {
        setNavbarCollapsedAtTop(false);
      }
      setIsOverNavbar(true);
    }
  }, [isMobile, isScrolled, navbarCollapsedAtTop]);

  const handleNavbarMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsOverNavbar(false);
      if (!isScrolled) {
        setNavbarCollapsedAtTop(true);
      } else {
        setNavbarExpanded(false);
      }
    }
  }, [isMobile, isScrolled]);

  return (
    <>
      {/* Scroll to top button - always rendered but conditionally visible */}
      {scrollToTop && (
        <button
          className="fixed bottom-6 right-6 p-3 rounded-full z-50 bg-accentYellow text-black transition-opacity duration-300 opacity-100"
          onClick={scrollToTopFunction}
        >
          <MdKeyboardArrowUp />
        </button>
      )}

      {/* Main navbar content */}
      {isMobile ? (
        <div className="flex justify-center items-center">
          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="fixed top-8 right-8 z-50 text-black p-3 transition-all duration-300"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="fixed top-24 right-8 z-40">
              <ul className="flex flex-col space-y-4 items-end">
                {navItems.map((item, index) => {
                  const cascadeState = cascadeStates[index];
                  const isExpanding = cascadeState?.isExpanding;
                  const isCollapsing = cascadeState?.isCollapsing;

                  return (
                    <li key={index} className="relative self-end">
                      <a
                        href={item.href}
                        className={`
                          relative flex items-center justify-center overflow-hidden
                          transition-all duration-500 ease-out cursor-none
                          text-white
                          ${isExpanding ? "h-12 px-6" : "h-12"}
                          ${isCollapsing ? "h-12" : ""}
                          ${item.color}
                          transform ${isExpanding ? "scale-100" : "scale-0"}
                          ${isCollapsing ? "scale-0" : ""}
                        `}
                        style={{
                          width: `${Math.max(item.label.length * +12, 80)}px`,
                          animationDelay: `${index * 150}ms`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <span
                          className={`
                            font-bold text-sm whitespace-nowrap
                            transition-all duration-300
                            ${
                              isExpanding
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4"
                            }
                          `}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      ) : (
        //DESKTOP
        <nav
          ref={navbarRef}
          className="fixed top-8 right-8 z-50 transition-all duration-500 ease-out"
          onMouseEnter={handleNavbarMouseEnter}
          onMouseLeave={handleNavbarMouseLeave}
        >
          <ul className="flex flex-col space-y-3 items-end">
            {navItems.map((item, index) => {
              const expansionState = expansionStates[index];
              const isActive = expansionState?.isActive || false;
              const scale = expansionState?.scale || 0;
              const isContracting = expansionState?.isContracting || false;

              const currentOriginX = isContracting
                ? expansionState?.exitX ?? expansionState?.originX ?? 0.5
                : expansionState?.originX ?? 0.5;
              const currentOriginY = isContracting
                ? expansionState?.exitY ?? expansionState?.originY ?? 0.5
                : expansionState?.originY ?? 0.5;

              // Determine if this element should be expanded or collapsed
              const shouldBeExpanded =
                (isScrolled && navbarExpanded) ||
                (!isScrolled && !navbarCollapsedAtTop);

              return (
                <li key={item.label} className="relative self-end">
                  <a
                    ref={(el) => (elementRefs.current[index] = el)}
                    href={item.href}
                    className={`
                        relative flex items-center justify-center overflow-hidden
                        transition-all duration-500 ease-out cursor-none 
                        ${shouldBeExpanded ? "h-12 px-6" : "h-12"}
                        ${item.color}
                        transform hover:scale-110 
                      `}
                    style={{
                      width: shouldBeExpanded
                        ? `${Math.max(item.label.length * 10 + 16, 80)}px`
                        : "42px",
                      height: "42px",
                    }}
                    onMouseEnter={(e) => handleMouseEnter(index, e)}
                    onMouseLeave={(e) => handleMouseLeave(index, e)}
                  >
                    {/* Black expansion fill */}
                    <ExpansionFill
                      isActive={isActive}
                      scale={scale}
                      originX={currentOriginX}
                      originY={currentOriginY}
                      fillColor="bg-black"
                    />

                    {/* Only show icon and text when expanded */}
                    {shouldBeExpanded && (
                      <>
                        <span
                          className={`
                            text-white font-bold text-lg whitespace-nowrap relative z-10
                            transition-all duration-500 opacity-100 translate-x-0
                          `}
                        >
                          {item.label}
                        </span>
                      </>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
