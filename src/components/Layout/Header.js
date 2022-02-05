import {Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "./meals.jpeg"

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src={mealsImage}
          alt="Table with lots of delicious meals"
        />
      </div>
    </Fragment>
  );
};

export default Header;