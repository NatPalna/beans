import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to="/BeansProject" className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>Jelly Belly</span>
        </Link>
        <nav>
          <Link to="/BeansProject/beans">Beans</Link>
          <Link to="/BeansProject/facts">Facts</Link>
          <Link to="/BeansProject/recipes">Recipes</Link>
          <Link to="/BeansProject/combinations">Combinations</Link>
          <Link to="/BeansProject/history">History</Link>
        </nav>
      </div>
    </header>
  );
};
