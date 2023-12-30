import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header>
        <nav>
          <a href="/" className="flex items-center text-2xl gap-2 text-primary">
            <svg
              width="29"
              height="30"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.5 14.3H28.1V0H14.3C14.3 7.9 7.9 14.3 0 14.3V28.1H14.3V42.4H28.1C28.1 34.5 34.6 28.1 42.5 28.1V14.3Z"
                fill="#239852"
              />
            </svg>
            <span>Hire</span>
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
