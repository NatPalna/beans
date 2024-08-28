import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/beans/beans">Beans</Link>
      <Link to="/beans/facts">Facts</Link>
      <Link to="/beans/recipes">Recipes</Link>
      <Link to="/beans/combinations">Combinations</Link>
      <Link to="/beans/history">History</Link>
      <Link to="/beans/about">About</Link>
      <Link to="/beans/review">Review</Link>
    </nav>
  );
};
