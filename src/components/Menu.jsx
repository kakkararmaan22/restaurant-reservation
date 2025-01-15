// Menu.js
import React from 'react';

const Menu = ({ items }) => {
const menuItems = [
  { id: 1, name: 'Pasta Carbonara', description: 'Creamy pasta with bacon and Parmesan cheese', price: '₹999', image: require('../menu-img/pasta_carbonara.jpg'), quantity: 3 },
  { id: 2, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil', price: '₹799', image: require('../menu-img/margherita_pizza.jpg'), quantity: 2 },
  { id: 3, name: 'Chicken Tikka Masala', description: 'Tender chicken in a creamy spiced tomato sauce', price: '₹899', image: require('../menu-img/chicken_tikka_masala.jpg'), quantity: 5 },
  { id: 4, name: 'Caesar Salad', description: 'Crisp romaine lettuce with croutons, Parmesan cheese, and Caesar dressing', price: '₹599', image: require('../menu-img/caesar_salad.jpg'), quantity: 1 },
  { id: 5, name: 'Sushi Platter', description: 'Assorted sushi rolls with soy sauce and pickled ginger', price: '₹1299', image: require('../menu-img/sushi_platter.jpg'), quantity: 4 },
  { id: 6, name: 'BBQ Ribs', description: 'Tender ribs glazed with barbecue sauce, served with coleslaw', price: '₹1099', image: require('../menu-img/bbq_ribs.jpg'), quantity: 2 },
  { id: 7, name: 'Vegetable Stir-Fry', description: 'Fresh mixed vegetables sautéed with soy sauce', price: '₹749', image: require('../menu-img/vegetable_stir_fry.jpg'), quantity: 3 },
  { id: 8, name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese', price: '₹649', image: require('../menu-img/tiramisu.jpg'), quantity: 2 },
  { id: 9, name: 'Beef Burger', description: 'Juicy beef patty with lettuce, tomato, and cheese in a sesame seed bun', price: '₹899', image: require('../menu-img/beef_burger.jpg'), quantity: 4 },
  { id: 10, name: 'Pad Thai Noodles', description: 'Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce', price: '₹849', image: require('../menu-img/pad_thai_noodles.jpg'), quantity: 3 },
  { id: 11, name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze', price: '₹699', image: require('../menu-img/caprese_salad.jpg'), quantity: 1 },
  { id: 12, name: 'Chicken Alfredo', description: 'Creamy pasta with grilled chicken, Parmesan cheese, and Alfredo sauce', price: '₹999', image: require('../menu-img/chicken_alfredo.jpg'), quantity: 5 },
  { id: 13, name: 'Mushroom Risotto', description: 'Creamy Italian rice dish with mushrooms and Parmesan cheese', price: '₹799', image: require('../menu-img/mushroom_risotto.jpg'), quantity: 2 },
  { id: 14, name: 'Cheese Platter', description: 'Assorted cheeses with crackers and fruits', price: '₹1199', image: require('../menu-img/cheese_platter.jpg'), quantity: 3 },
  { id: 15, name: 'Chocolate Fondue', description: 'Rich melted chocolate with fruits and marshmallows for dipping', price: '₹699', image: require('../menu-img/chocolate_fondue.jpg'), quantity: 4 },
  { id: 16, name: 'Lasagna', description: 'Layered pasta with Bolognese sauce and melted cheese', price: '₹949', image: require('../menu-img/lasagna.jpg'), quantity: 5 },
];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
