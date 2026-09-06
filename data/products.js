// Chadiz Pizza and Restaurant Product Catalog

const products = {
  pizza: [
    { id: 'pizza_001', name: 'HAM & CHEESE', category: 'Pizza', prices: { thin: 250, regular: 240, family: 300 } },
    { id: 'pizza_002', name: 'HAWAIIAN HAM', category: 'Pizza', prices: { thin: 260, regular: 250, family: 330 } },
    { id: 'pizza_003', name: 'BACON', category: 'Pizza', prices: { thin: 300, regular: 270, family: 340 } },
    { id: 'pizza_004', name: 'OVERLOAD', category: 'Pizza', prices: { thin: 300, regular: 260, family: 350 } },
    { id: 'pizza_005', name: 'BACON N MUSHROOM', category: 'Pizza', prices: { thin: 300, regular: 260, family: 350 } },
    { id: 'pizza_006', name: 'HAM & BACON', category: 'Pizza', prices: { thin: 290, regular: 260, family: 350 } },
    { id: 'pizza_007', name: 'CHEESY MUSHROOM', category: 'Pizza', prices: { thin: 300, regular: 260, family: 350 } },
    { id: 'pizza_008', name: 'CHEESY PEPPERONI', category: 'Pizza', prices: { thin: 300, regular: 260, family: 350 } },
    { id: 'pizza_009', name: 'CHEESY HAM & MUSHROOM', category: 'Pizza', prices: { thin: 300, regular: 260, family: 350 } },
    { id: 'pizza_010', name: 'CHEESY HAWAIIAN MUSHROOM', category: 'Pizza', prices: { thin: 300, regular: 260, family: 350 } },
    { id: 'pizza_011', name: 'CHEESY HAWAIIAN BACON', category: 'Pizza', prices: { thin: 300, regular: 260, family: 350 } },
    { id: 'pizza_012', name: 'CHEESY BURGER PIZZA', category: 'Pizza', prices: { thin: 330, regular: 300, family: 390 } },
    { id: 'pizza_013', name: 'CHEESY HAWAIIAN PEPPERONI', category: 'Pizza', prices: { thin: 310, regular: 270, family: 360 } },
    { id: 'pizza_014', name: 'CHEESY BEEF & MUSHROOM', category: 'Pizza', prices: { thin: 350, regular: 310, family: 400 } },
    { id: 'pizza_015', name: 'CHEESY BEEF WITH BACON', category: 'Pizza', prices: { thin: 330, regular: 300, family: 390 } },
    { id: 'pizza_016', name: 'CHEESY BEEF,BACON & MUSHROOM', category: 'Pizza', prices: { thin: 350, regular: 350, family: 400 } }
  ],
  addOns: [
    { id: 'addon_001', name: 'Mozzarella', price: 60 },
    { id: 'addon_002', name: 'Cheddar Cheese', price: 50 },
    { id: 'addon_003', name: 'Ground Beef', price: 50 },
    { id: 'addon_004', name: 'Ham', price: 30 },
    { id: 'addon_005', name: 'Mushroom', price: 50 },
    { id: 'addon_006', name: 'Pepperoni', price: 50 },
    { id: 'addon_007', name: 'Pineapple', price: 25 },
    { id: 'addon_008', name: 'Bacon', price: 50 },
    { id: 'addon_009', name: 'Burger Patty', price: 50 }
  ],
  beverages: [
    { id: 'beverage_001', name: 'Wintermelon', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_002', name: 'Okinawa', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_003', name: 'Double Dutch', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_004', name: 'Matcha', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_005', name: 'Dark Choco', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_006', name: 'Salted Caramel', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_007', name: 'Classic', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_008', name: 'Taro', category: 'Drinks', sizes: { small: 60, large: 80 } },
    { id: 'beverage_009', name: 'Bottled Water', price: 30 },
    { id: 'beverage_010', name: 'Ice Tea Pitcher', price: 90 },
    { id: 'beverage_011', name: '1.5 LTR. COKE/ROYAL/SPRITE', price: 100 },
    { id: 'beverage_012', name: '2 LTR. COKE/ROYAL/SPRITE', price: 150 }
  ],
  mainCourse: [
    { id: 'main_001', name: 'GARLIC CHICKEN', category: 'Main Course', prices: { riceMeal: 120, platter: 200 } },
    { id: 'main_002', name: 'BUFFALO WINGS', category: 'Main Course', prices: { riceMeal: 120, platter: 200 } },
    { id: 'main_003', name: 'CORDON BLUE', category: 'Main Course', prices: { riceMeal: 120, platter: 200 } },
    { id: 'main_004', name: 'TONGKATSU', category: 'Main Course', prices: { riceMeal: 149, platter: 300 } },
    { id: 'main_005', name: 'BUTTERED CHICKEN', category: 'Main Course', prices: { riceMeal: 120, platter: 200 } },
    { id: 'main_006', name: 'FISH FILLET', category: 'Main Course', prices: { riceMeal: 100, platter: 150 } },
    { id: 'main_007', name: 'SIZZILLING TOFU', category: 'Main Course', prices: { riceMeal: 100, platter: 150 } },
    { id: 'main_008', name: 'TUNA SISIG', category: 'Main Course', prices: { riceMeal: 99, platter: 150 } },
    { id: 'main_009', name: 'PORK SISIG', category: 'Main Course', prices: { riceMeal: 120, platter: 200 } },
    { id: 'main_010', name: 'PORKCHOP PESTO SAUCE', category: 'Main Course', prices: { riceMeal: 140, platter: 300 } },
    { id: 'main_011', name: 'LECHON KAWALI', category: 'Main Course', prices: { riceMeal: 120, platter: 300 } }
  ],
  studentMeal: [
    { id: 'student_001', name: '3PC SKINLESS W/ RICE', price: 90 },
    { id: 'student_002', name: 'CHICKEN FILLET', price: 80 }
  ],
  sides: [
    { id: 'side_001', name: 'FRIES', price: 100 }
  ],
  pasta: [
    { id: 'pasta_001', name: 'CHADIZ MEATY SPAGHETTI', category: 'Pasta', prices: { solo: 150, family: 400 } },
    { id: 'pasta_002', name: 'CHADIZ CARBONARA', category: 'Pasta', prices: { solo: 160, family: 450 } }
  ],
  coffee: [
    { id: 'coffee_001', name: 'BREWED COFFEE', category: 'Coffee', sizes: { '12oz': 70, '16oz': 85 } },
    { id: 'coffee_002', name: "MATTHEW'S ICED BLACK COFFEE", category: 'Coffee', sizes: { '12oz': 70, '16oz': 85 } },
    { id: 'coffee_003', name: "MATTHEW'S MILKY COFFEE", category: 'Coffee', sizes: { '12oz': 70, '16oz': 85 } },
    { id: 'coffee_004', name: "MATTHEW'S CARAMEL MACCHIATO", category: 'Coffee', sizes: { '12oz': 120, '16oz': 145 } },
    { id: 'coffee_005', name: "MATTHEW'S HAZELNUT COFFEE", category: 'Coffee', sizes: { '12oz': 120, '16oz': 145 } },
    { id: 'coffee_006', name: "MAT'Z ORIGINAL", category: 'Coffee', sizes: { '12oz': 70, '16oz': 80 } },
    { id: 'coffee_007', name: "MAT'Z LATTE", category: 'Coffee', sizes: { '12oz': 70, '16oz': 80 } },
    { id: 'coffee_008', name: "MAT'Z CAPPUCCINO", category: 'Coffee', sizes: { '12oz': 70, '16oz': 80 } },
    { id: 'coffee_009', name: "MAT'Z SUGAR FREE COFFEE", category: 'Coffee', sizes: { '12oz': 70, '16oz': 180 } },
    { id: 'coffee_010', name: 'BEST BARLEY', category: 'Coffee', sizes: { '12oz': 70, '16oz': 80 } }
  ]
};

module.exports = products;
