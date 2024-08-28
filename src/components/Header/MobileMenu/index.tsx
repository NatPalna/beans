import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/beans/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/beans/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/beans/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/beans/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/beans/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/beans/about" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/beans/review" onClick={handleLinkClick}>
              Review
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
