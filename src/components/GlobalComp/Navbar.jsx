"use client"

import { Search, HandHeart, Mail, Menu, X, ChevronDown } from "lucide-react"
import { useState, useCallback, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SEARCHABLE_TOPICS } from "../searchdata"
import Link from "next/link"
const NAVIGATION_ITEMS = [
  { name: "Home", href: "/Home" },
  { name: "About", href: "/about" },
  {
    name: "Solutions",
    hasDropdown: true,
    submenu: [
      { name: "Customized Solutions", href: "/solution/customizedSolutions" },
      { name: "Energy Saving Solutions", href: "/solution/energySaving" },
      { name: "Turnkey Systems", href: "/solution/turnkeySystems" },
      { name: "Distributed Control Systems", href: "/solution/distributedControlSystems" },
      { name: "Switchgear Solutions", href: "/solution/switchgearSolutions" },
      {
        name: "Supervisory Control & Data Acquisition",
        href: "/solution/supervisoryControlDataAcquisition",
      },
    ],
  },
  {
    name: "Industries",
    hasDropdown: true,
    submenu: [
      { name: "Textile Industry", href: "/industry/textile" },
      { name: "Pharmaceutical Industry", href: "/industry/pharma" },
      { name: "Machine Tool Industry", href: "/industry/machineTools" },
      { name: "Automation Industry", href: "/industry/automation" },
      { name: "Plastic Industry", href: "/industry/plastic" },
      { name: "Packaging Industry", href: "/industry/packaging" },
      { name: "Ceramic Industry", href: "/industry/ceramic" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contactUs" },
]

const STYLES = {
  navLink:
    "text-white hover:text-[#00bfff] transition-all duration-200 text-md pb-1 border-b-2 border-transparent hover:border-gray-500 flex items-center gap-1",
  mobileNavLink:
    "block px-4 py-3 text-white hover:text-gray-600 transition-colors duration-200 border border-gray-600 rounded-md hover:border-gray-400 text-center flex items-center justify-center gap-1",
  submenuLink:
    "block px-4 py-2 text-md text-[#f5f5f5] hover:text-[#00bfff] hover:bg-[#3a3a3a] transition-colors duration-200",
  dropdown: "bg-black/90 backdrop-blur-sm border border-gray-600 rounded-lg shadow-lg",
  iconButton: "p-2 hover:text-[#00bfff] transition-colors duration-200",
  searchInput: "w-full bg-transparent text-white placeholder-gray-400 focus:outline-none",
  searchResultsContainer:
    "absolute top-full left-0 right-0 mt-1 bg-black/90 backdrop-blur-sm border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50",
  searchResultItem:
    "block px-4 py-2 text-sm text-white hover:text-gray-600 hover:bg-gray-900 transition-colors duration-200",
}

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex items-center"
  >
    <Image
      src="/images/logo.png"
      alt="RarMotion Electric - Adding Values With Technology"
      width={200}
      height={60}
      className="h-16 w-auto"
      priority
    />
  </motion.div>
)

const IconButton = ({ icon: Icon, onClick, ariaLabel }) => (
  <motion.button
    className={STYLES.iconButton}
    onClick={onClick}
    aria-label={ariaLabel}
    whileHover={{ scale: 1.2, rotate: 20 }}
    whileTap={{ scale: 0.8, y: 5 }}
    transition={{ type: "spring", stiffness: 500, damping: 10 }}
  >
    <Icon className="w-5 h-5" />
  </motion.button>
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

export default function TransparentNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleMouseEnter = useCallback((itemName) => {
    setActiveDropdown(itemName)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    setIsSearchOpen(false)
    setSearchTerm("")
    setSearchResults([])
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
    if (isMobileMenuOpen) {
      setIsSearchOpen(false)
      setSearchTerm("")
      setSearchResults([])
    }
  }, [isMobileMenuOpen])

  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev)
    setSearchTerm("")
    setSearchResults([])
    if (!isSearchOpen && window.innerWidth < 1024) {
      setIsMobileMenuOpen(true)
    }
  }, [isSearchOpen])

  const handleSearchChange = useCallback((event) => {
    const term = event.target.value
    setSearchTerm(term)
    if (term.length > 0) {
      const filtered = SEARCHABLE_TOPICS.filter(
        (topic) =>
          topic.title.toLowerCase().includes(term.toLowerCase()) ||
          topic.description.toLowerCase().includes(term.toLowerCase()),
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [])

  const handleSearchResultClick = useCallback(() => {
    setIsSearchOpen(false)
    setSearchTerm("")
    setSearchResults([])
    closeMobileMenu()
  }, [closeMobileMenu])

  const navigationItems = useMemo(() => NAVIGATION_ITEMS, [])

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white px-4 py-3 bg-black/20">
      {/* // backdrop-blur-sm */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        {isSearchOpen ? (
          <div className="flex-1 mx-4 hidden lg:flex items-center relative">
            <div className="w-full border border-gray-600 rounded-full px-4 py-2 bg-black/70 backdrop-blur-md">
              <input
                type="text"
                placeholder="Search topics..."
                className={STYLES.searchInput}
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search topics"
              />
            </div>
            {searchTerm.length > 0 && searchResults.length > 0 && (
              <div className={STYLES.searchResultsContainer}>
                {searchResults.map((result) => (
                  <a
                    key={result.href}
                    href={result.href}
                    className={STYLES.searchResultItem}
                    onClick={handleSearchResultClick}
                  >
                    <span className="font-semibold">{result.title}</span>
                    <p className="text-xs text-gray-400">{result.description}</p>
                  </a>
                ))}
              </div>
            )}
            {searchTerm.length > 0 && searchResults.length === 0 && (
              <div className={STYLES.searchResultsContainer}>
                <div className="px-4 py-2 text-sm text-gray-400">No results found.</div>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden lg:flex items-center">
            <div className="border border-[#ec3337] rounded-full px-6 py-2 flex items-center space-x-6 bg-black/70 backdrop-blur-md">
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
        )}
        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <IconButton
            icon={isSearchOpen ? X : Search}
            onClick={toggleSearch}
            ariaLabel={isSearchOpen ? "Close search" : "Open search"}
          />
          <Link href="/social">
            <IconButton icon={HandHeart} ariaLabel="Language" />
          </Link>
          <Link href="/contactUs">
            <IconButton icon={Mail} ariaLabel="Contact" />
          </Link>
          <div className="lg:hidden">
            <IconButton
              icon={isMobileMenuOpen ? X : Menu}
              onClick={toggleMobileMenu}
              ariaLabel={isMobileMenuOpen ? "Close menu" : "Open menu"}
            />
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 bg-black/80 backdrop-blur-md rounded-lg mx-4">
          {isSearchOpen && (
            <div className="p-4 relative">
              <input
                type="text"
                placeholder="Search topics..."
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search topics"
              />
              {searchTerm.length > 0 && searchResults.length > 0 && (
                <div className={`${STYLES.searchResultsContainer} static mt-2`}>
                  {searchResults.map((result) => (
                    <a
                      key={result.href}
                      href={result.href}
                      className={STYLES.searchResultItem}
                      onClick={handleSearchResultClick}
                    >
                      <span className="font-semibold">{result.title}</span>
                      <p className="text-xs text-gray-400">{result.description}</p>
                    </a>
                  ))}
                </div>
              )}
              {searchTerm.length > 0 && searchResults.length === 0 && (
                <div className={`${STYLES.searchResultsContainer} static mt-2`}>
                  <div className="px-4 py-2 text-sm text-gray-400">No results found.</div>
                </div>
              )}
            </div>
          )}
          <div className="flex flex-col space-y-2 p-4">
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
