import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/BeansProject/beans">Beans</Link>
            <Link to="/BeansProject/facts">Facts</Link>
            <Link to="/BeansProject/recipes">Recipes</Link>
            <Link to="/BeansProject/combinations">Combinations</Link>
            <Link to="/BeansProject/history">History</Link>
          </nav>
        </div>
      )}
    </div>
  );
};
