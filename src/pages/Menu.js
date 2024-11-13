import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../core/config';
import { useNavigate } from 'react-router-dom';
import './Menu.css'; // Add your custom CSS for extra styling

const Menu = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample ingredients for each category
  const ingredients = {
    Beef: ['Steak', 'Ground Beef', 'Ribs'],
    Chicken: ['Breast', 'Drumsticks', 'Thighs'],
    Dessert: ['Sugar', 'Flour', 'Cocoa Powder'],
    Lamb: ['Lamb Chops', 'Lamb Shank'],
    Miscellaneous: ['Olives', 'Spices', 'Herbs'],
    Pasta: ['Spaghetti', 'Penne', 'Fusilli'],
    Pork: ['Pork Belly', 'Sausages', 'Bacon'],
    Seafood: ['Shrimp', 'Salmon', 'Lobster'],
    Side: ['Salad', 'Rice', 'Mashed Potatoes'],
    Starter: ['Soup', 'Bruschetta', 'Stuffed Mushrooms'],
    Vegan: ['Tofu', 'Tempeh', 'Lentils'],
    Vegetarian: ['Cheese', 'Vegetables', 'Grains'],
    Breakfast: ['Eggs', 'Bacon', 'Toast'],
    Goat: ['Goat Meat', 'Goat Cheese']
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/1/categories.php`);
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const getMeals = (category) => {
    navigate('/meals', { state: { category } });
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="menu-container">
      <h2 className="text-center">Menu</h2>
      <div className="categories-list">
        {categories.length === 0 ? (
          <div>No categories available</div>
        ) : (
          categories.map(({ idCategory, strCategory }) => (
            <div
              className="category-card"
              key={idCategory}
              onClick={() => getMeals({ idCategory, strCategory })}
            >
              <div className="category-title">{strCategory}</div>
              <div className="ingredients-list">
                <strong>Ingredients:</strong>
                <ul>
                  {ingredients[strCategory]?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
