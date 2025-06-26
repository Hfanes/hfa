"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
  //custom cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverNavbar, setIsOverNavbar] = useState(false);
  const [expansionStates, setExpansionStates] = useState({});
  const [cascadeStates, setCascadeStates] = useState({});
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [navbarCollapsedAtTop, setNavbarCollapsedAtTop] = useState(false);
  const elementRefs = useRef([]);
  const navbarRef = useRef(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
      //TODO: Add feature to close navbar when hovered on top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarExpanded]);

  // Track global mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
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

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="fixed top-8 right-8 z-50 bg-black text-white p-3 shadow-lg transition-all duration-300"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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
                        ${isExpanding ? "h-12 px-6" : "h-12"}
                        ${isCollapsing ? "h-12" : ""}
                        ${item.color}
                        shadow-lg
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
      </>
    );
  }

  //DESKTOP
  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-[100] transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: `scale(${isOverNavbar ? 0.5 : 1})`,
          opacity: isOverNavbar ? 0.3 : 1,
        }}
      >
        <div className="w-3 h-3 bg-black shadow-lg" />
      </div>

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
                    shadow-lg hover:shadow-xl
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
                  <div
                    className="absolute inset-0 bg-black transition-all duration-100 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `scale(${scale})`,
                      transformOrigin: `${currentOriginX * 100}% ${
                        currentOriginY * 100
                      }%`,
                      clipPath: `circle(${Math.max(
                        scale * 120,
                        scale * Math.sqrt(2) * 100
                      )}% at ${currentOriginX * 100}% ${
                        currentOriginY * 100
                      }%)`,
                    }}
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
    </>
  );
}
