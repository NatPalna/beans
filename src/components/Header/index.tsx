import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>Jelly Belly</span>
        </Link>
        <nav>
          <Link to="/beans">Beans</Link>
          <Link to="/facts">Facts</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/combinations">Combinations</Link>
          <Link to="/history">History</Link>
        </nav>
      </div>
    </header>
  );
};
