"use client";

import { useState, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ExpansionFill from "@/components/ui/ExpansionFill";
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", color: "bg-deepBlue" },
  { label: "About", href: "/#about", color: "bg-deepPurple" },
  { label: "Projects", href: "/#projects", color: "bg-accentYellow" },
  { label: "Contact", href: "/#contact", color: "bg-brightPurple" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expansionStates, setExpansionStates] = useState({});
  const [cascadeStates, setCascadeStates] = useState({});
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [navbarCollapsedAtTop, setNavbarCollapsedAtTop] = useState(false);

  const scrollToTopFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const updateMobile = () => setIsMobile(mediaQuery.matches);

    updateMobile();
    mediaQuery.addEventListener("change", updateMobile);

    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 100);
      setScrollToTop(scrollY > 300);

      if (scrollY > 100) {
        setNavbarExpanded(false);
      }

      if (scrollY === 0) {
        setNavbarCollapsedAtTop(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
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
          scale: 1,
          isExpanding: false,
        },
      }));
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
          isActive: false,
          isContracting: true,
          scale: 0,
        },
      }));
    },
    [getRelativePosition, isMobile]
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

  const handleNavClick = (item, event) => {
    if (pathname !== "/") {
      if (mobileMenuOpen) toggleMobileMenu();
      return;
    }

    if (item.href === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (mobileMenuOpen) toggleMobileMenu();
    } else if (item.href.startsWith("/#")) {
      event.preventDefault();
      const elementId = item.href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if (mobileMenuOpen) toggleMobileMenu();
    }
  };

  const handleNavbarMouseEnter = useCallback(() => {
    if (!isMobile) {
      if (!isScrolled && navbarCollapsedAtTop) {
        setNavbarCollapsedAtTop(false);
      }
    }
  }, [isMobile, isScrolled, navbarCollapsedAtTop]);

  const handleNavbarMouseLeave = useCallback(() => {
    if (!isMobile) {
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
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full z-50 bg-accentYellow text-black transition-opacity duration-300 opacity-100 default-cursor cursor-pointer"
          onClick={scrollToTopFunction}
        >
          <MdKeyboardArrowUp />
        </button>
      )}

      {/* Mobile */}
      {isMobile ? (
        <div>
          {/* Mobile Menu Button */}
          <motion.button
            aria-label="Toggle mobile"
            onClick={toggleMobileMenu}
            className="fixed top-8 right-8 z-50 p-3 bg-black transition-transform duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-white"
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-white"
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
                      <Link
                        href={item.href}
                        scroll={false}
                        onClick={(e) => handleNavClick(item, e)}
                        className={`
                          relative flex items-center justify-center overflow-hidden
                          transition-[width,height,padding,transform] duration-500 ease-out cursor-none
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
                            transition-[opacity,transform] duration-300
                            ${
                              isExpanding
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4"
                            }
                          `}
                        >
                          {item.label}
                        </span>
                      </Link>
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
          className="fixed top-8 right-8 z-50 transition-transform duration-500 ease-out"
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
                  <Link
                    scroll={false}
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`
                        relative flex items-center justify-center overflow-hidden
                        transition-[width,height,padding,transform] duration-500 ease-out cursor-none 
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
                            transition-[opacity,transform] duration-500 opacity-100 translate-x-0
                          `}
                        >
                          {item.label}
                        </span>
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
