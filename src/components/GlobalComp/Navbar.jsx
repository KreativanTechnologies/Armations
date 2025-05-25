



"use client"

import { Search, Globe, Mail, Menu, X, ChevronDown } from "lucide-react"
import { useState, useCallback, useMemo } from "react"
import Image from "next/image"

// Constants
const NAVIGATION_ITEMS = [
  { name: "Home", href: "/Home" },
  { name: "About", href: "/About" },
  // { name: "Product", href: "#" },
  {
    name: "Solutions",
    // href: "/Solution",
    hasDropdown: true,
    submenu: [
       { name: "Customized Solutions", href: "/Solution/CustomizedSolutions" },
    { name: "Energy Saving Solutions", href: "/Solution/EnergySaving" },
    { name: "Turnkey Systems", href: "/Solution/TurnkeySystems" },
    { name: "Distributed Control Systems", href: "/Solution/DistrictCS" },
    { name: "Switchgear Solutions", href: "/Solution/SwitcherSol" },
    {
      name: "Supervisory Control & Data Acquisition",
      href: "/Solution/SupervisoryCDA",
    },
    ],
  },
  {
    name: "Industries",
    // href: "Industry",
    hasDropdown: true,
    submenu: [
      { name: "Textile Industry", href: "/Industry/Textile" },
    { name: "Pharmaceutical Industry", href: "/Industry/Pharma" },
    { name: "Machine Tool Industry", href: "/Industry/MachineTools" },
    { name: "Automation Industry", href: "/Industry/Automation" },
    { name: "Plastic Industry", href: "/Industry/Plastic" },
    { name: "Packaging Industry", href: "/Industry/Packaging" },
    { name: "Ceramic Industry", href: "/Industry/Ceramic" },
    ],
  },
  { name: "Blog", href: "/Blog" },
  { name: "Contact Us", href: "/ContactUs" },
]

const STYLES = {
  navLink:
    "text-white hover:text-red-400 transition-all duration-200 text-sm pb-1 border-b-2 border-transparent hover:border-red-500 flex items-center gap-1",
  mobileNavLink:
    "block px-4 py-3 text-white hover:text-red-400 transition-colors duration-200 border border-red-600 rounded-md hover:border-red-400 text-center flex items-center justify-center gap-1",
  submenuLink: "block px-4 py-2 text-sm text-white hover:text-red-400 hover:bg-gray-900 transition-colors duration-200",
  dropdown: "bg-black/90 backdrop-blur-sm border border-red-600 rounded-lg shadow-lg",
  iconButton: "p-2 hover:text-red-400 transition-colors duration-200",
}

// Components
const Logo = () => (
  <div className="flex items-center">
    <Image
      src="/images/logo.png"
      alt="RarMotion Electric - Adding Values With Technology"
      width={200}
      height={60}
      className="h-12 w-auto"
      priority
    />
  </div>
)

const IconButton = ({ icon: Icon, onClick, ariaLabel }) => (
  <button className={STYLES.iconButton} onClick={onClick} aria-label={ariaLabel}>
    <Icon className="w-5 h-5" />
  </button>
)

const DropdownMenu = ({ items, onItemClick, className = "" }) => (
  <div className={`${STYLES.dropdown} ${className}`}>
    <div className="py-2">
      {items.map((item) => (
        <a key={item.name} href={item.href} className={STYLES.submenuLink} onClick={onItemClick}>
          {item.name}
        </a>
      ))}
    </div>
  </div>
)

const NavigationItem = ({ item, isActive, onMouseEnter, onMouseLeave, isDesktop = true, onItemClick }) => {
  const linkClass = isDesktop ? STYLES.navLink : STYLES.mobileNavLink

  return (
    <div
      className={isDesktop ? "relative" : ""}
      onMouseEnter={() => item.hasDropdown && onMouseEnter(item.name)}
      onMouseLeave={onMouseLeave}
    >
      <a href={item.href} className={linkClass} onClick={() => !item.hasDropdown && onItemClick?.()}>
        {item.name}
        {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
      </a>

      {/* Desktop Dropdown */}
      {isDesktop && item.hasDropdown && isActive && (
        <div
          className="absolute top-full left-0 pt-1 w-56 z-50"
          onMouseEnter={() => onMouseEnter(item.name)}
          onMouseLeave={onMouseLeave}
        >
          <DropdownMenu items={item.submenu} onItemClick={onItemClick} />
        </div>
      )}

      {/* Mobile Dropdown */}
      {!isDesktop && item.hasDropdown && isActive && (
        <div
          className="mt-2 transition-all duration-300 ease-in-out"
          onMouseEnter={() => onMouseEnter(item.name)}
          onMouseLeave={onMouseLeave}
        >
          <DropdownMenu items={item.submenu} onItemClick={onItemClick} className="mx-4" />
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Memoized handlers for better performance
  const handleMouseEnter = useCallback((itemName) => {
    setActiveDropdown(itemName)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  // Memoized navigation items
  const navigationItems = useMemo(() => NAVIGATION_ITEMS, [])

  return (
    <nav
      className="text-white px-4 py-3 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/image 87.png')",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="border border-red-600 rounded-full px-6 py-2 flex items-center space-x-6 bg-black/30 backdrop-blur-sm">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.name}
                item={item}
                isActive={activeDropdown === item.name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                isDesktop={true}
              />
            ))}
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <IconButton icon={Search} ariaLabel="Search" />
          <IconButton icon={Globe} ariaLabel="Language" />
          <IconButton icon={Mail} ariaLabel="Contact" />
          <IconButton
            icon={isMobileMenuOpen ? X : Menu}
            onClick={toggleMobileMenu}
            ariaLabel={isMobileMenuOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 relative z-10">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.name}
                item={item}
                isActive={activeDropdown === item.name}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                isDesktop={false}
                onItemClick={closeMobileMenu}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
