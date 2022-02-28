import { categories } from "./jobCategories";

export default function arrayGroups() {
  const groups = [];
  categories.forEach((category, index) => {
    if (index % 8 === 0) {
      groups.push([]);
    }
    groups[groups.length - 1].push(category);
  });

  //   const categoriesGroupOne = groups[0];
  //   const categoriesGroupTwo = groups[1];
  //   const categoriesGroupThree = groups[2];
  //   const categoriesGroupFour = groups[3];

  //   return {
  //     categoriesGroupOne,
  //     categoriesGroupTwo,
  //     categoriesGroupThree,
  //     categoriesGroupFour,
  //   };
  return groups;
}
