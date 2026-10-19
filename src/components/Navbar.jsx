
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
    const [hidden, setHidden] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
    ];

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollDifference = currentScrollY - lastScrollY;

                // Navbar visible near the top
                if (currentScrollY < 80) {
                    setHidden(false);
                }
                // Hide while scrolling down
                else if (scrollDifference > 5) {
                    setHidden(true);
                }
                // Show while scrolling up
                else if (scrollDifference < -5) {
                    setHidden(false);
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${hidden
                    ? "pointer-events-none -translate-y-full"
                    : "translate-y-0"
                }`}
        >
            <nav className="mx-auto flex max-w-[1300px] items-center justify-between gap-3">

                {/* Logo */}
                <Link
                    to="/"
                    aria-label="Go to home"
                    className="flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-black"
                >
                    <img
                        src="/Logo.png"
                        alt="VanCode Logo"
                        className="w-28 h-auto object-contain sm:w-36 md:w-44 lg:w-30 z-9999"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-[24px] border border-black/5 bg-neutral-200/90 p-1.5 shadow-sm backdrop-blur-xl md:flex">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={({ isActive }) =>
                                `rounded-[18px] px-7 py-4 text-base transition-all duration-300 lg:text-lg ${isActive
                                    ? "bg-white text-black shadow-sm"
                                    : "text-neutral-500 hover:text-black"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Contact CTA */}
                <a
                    href="mailto:vanshweb73@gmail.com"
                    className="hidden shrink-0 items-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-medium text-white transition hover:bg-neutral-800 sm:flex sm:text-base"
                >
                    Let's Talk
                    <ArrowUpRight size={18} />
                </a>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-2 md:hidden">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={({ isActive }) =>
                                `rounded-full px-4 py-2.5 text-sm font-medium transition ${isActive
                                    ? "bg-black text-white"
                                    : "bg-neutral-100 text-neutral-600"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
