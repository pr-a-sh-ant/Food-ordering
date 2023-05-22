import classes from "./AvialableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealItem/MealsItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async function () {
    try {
      setHasError(null);
      setIsLoading(true);
      const response = await fetch(
        "https://react-test-4b06d-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Cant fetch Data");
      }
      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setIsLoading(false);
      setMeals(loadedMeals);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setHasError(err.message);
    }
  };

  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Fetching Data...</p>}
        {!isLoading && !hasError && <ul>{mealsList}</ul>}
        {hasError && <p>{hasError}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
