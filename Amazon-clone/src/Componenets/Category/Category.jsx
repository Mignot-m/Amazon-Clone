import React from "react";
import { categoryInfo } from "./categoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfo.map((info) => (
        <CategoryCard data={info} key={info.name} />
      ))}
    </section>
  );
}

export default Category;
