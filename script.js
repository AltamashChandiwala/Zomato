$(document).ready(function() {
    let menuItems = []; 
    var additionalRestaurants = [
        {
            name: "La Pino'z Pizza",
            stars: "4.0&star;",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/1.jpg",
            menu: [
                {
                    name: "Banana Bread With Butter & Milk",
                    price: "$25.00",
                    category: "Featured",
                    image: "foods/banana-bread-with-butter-and-milk.jpg",
                },
                {
                    name: "Barbecue",
                    price: "$20.00",
                    category: "Today's Special",
                    image: "foods/barbecue.jpg",
                },
                {
                    name: "Barbecued Roasted Duck Ramen",
                    price: "$35.00",
                    category: "New Arrivals",
                    image: "foods/barbecued-roasted-duck-ramen.jpg",
                },
                {
                    name: "Bread With Seeds & Butter",
                    price: "$27.00",
                    category: "Featured",
                    image: "foods/bread-with-seeds-and-butter.jpg",
                },
                {
                    name: "Breadfast Sandwich",
                    price: "$15.00",
                    category: "Today's Special",
                    image: "foods/breakfast-sandwich-with-hummus-spread-and-fresh-vegetables.jpg",
                },
                {
                    name: "Chicken Breast Steaks",
                    price: "$15.00",
                    category: "Featured",
                    image: "foods/chicken-breast-steaks-with-beetroot.jpg",
                },
                {
                    name: "Chicken Legs",
                    price: "$29.00",
                    category: "Today's Special",
                    image: "foods/chicken-legs-with-tomatoes-peppers-and-oranges.jpg",
                },
                {
                    name: "Eggplant Cannelloni",
                    price: "$35.00",
                    category: "New Arrivals",
                    image: "foods/eggplant-cannelloni.jpg",
                },
                {
                    name: "French Fries",
                    price: "$9.00",
                    category: "Featured",
                    image: "foods/french-fries-with-steak-and-beer.jpg",
                },
                {
                    name: "Fried Rice",
                    price: "$5.00",
                    category: "Today's Special",
                    image: "foods/fried-rice-with-shrimps.jpg",
                },
                {
                    name: "King Prawns",
                    price: "$11.00",
                    category: "New Arrivals",
                    image: "foods/king-prawns-with-green-lettuce.jpg",
                },
                {
                    name: "Noodles",
                    price: "$5.00",
                    category: "Featured",
                    image: "foods/noodles-with-egg-and-vegetables.jpg",
                },
                {
                    name: "Cheese Pizza",
                    price: "$12.00",
                    category: "Today's Special",
                    image: "foods/pizza-with-a-lot-of-cheese.jpg",
                },
                {
                    name: "Juicy beef burger",
                    price: "$14.00",
                    category: "New Arrivals",
                    image: "foods/summer-juicy-beef-burger.jpg",
                },
                {
                    name: "Tacos with pulled pork",
                    price: "$22.00",
                    category: "Featured",
                    image: "foods/tacos-with-pulled-pork-fresh-vegetables-and-cream.jpg",
                },
                {
                    name: "tiny pickles",
                    price: "$7.00",
                    category: "Today's Special",
                    image: "foods/tiny-pickles-on-top-of-burger.jpg",
                },
                {
                    name: "tortilla chips",
                    price: "$26.00",
                    category: "New Arrivals",
                    image: "foods/tortilla-chips-with-salsa.jpg",
                },
            ]
        },
        {
            name: "Smokin' Joe's Pizza",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/2.jpg",
        },
        {
            name: "Domino's Pizza",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/3.jpg",
        },
        {
            name: "MOJO Pizza - 2X Toppings",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/4.jpg",
        },
        {
            name: "Sbarro - New York Pizza",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/5.jpg",
        },
        {
            name: "Francesco's Pizzeria",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/6.jpg",
        },
        {
            name: "Nomad Pizza- Traveller Series",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/7.jpg",
        },
        {
            name: "Starboy Pizza & Shakes",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/8.jpg",
        },
        {
            name: "Lil Gamby Pizza Shop",
            stars: "4.0",
            cuisine: "Italian, Pizza, Pasta, Fast Food",
            cost: "150 for one",
            info: "6300+ orders are placed from here",
            image: "images/9.jpg",
        },
    ];

    function createRestaurantCard(restaurant) {
        var card = $('<div class="card col-xs-12 col-sm-6 col-md-4"></div>');
        // Only add the href link if the restaurant has a menu
        var anchor = $('<a></a>');
        if (restaurant.menu && restaurant.menu.length > 0) {
            anchor.attr('href', './MenuPage.html');
            anchor.attr('target', '_blank');
        }
        anchor.append('<img src="' + restaurant.image + '" alt="' + restaurant.name + '" class="cards img-fluid">');
        anchor.append('<div class="name">' + restaurant.name + '</div>');
        anchor.append('<div class="star">' + restaurant.stars + '&star;</div>');
        anchor.append('<div class="text">' + restaurant.cuisine + '</div>');
        anchor.append('<div class="rtext">' + restaurant.cost + '</div>');
        anchor.append('<hr/>');
        anchor.append('<div class="info">' + restaurant.info + '</div>');
        anchor.append('<div class="safety"><img src="images/safety.png" alt="safety label"/></div>');

        card.append(anchor);
        return card;
    }

    var container = $('#restaurant-container');
    var row;

    additionalRestaurants.forEach(function(restaurant, index) {
        if (index % 3 === 0) {
            row = $('<div class="row"></div>');
            container.append(row);
        }
        var card = createRestaurantCard(restaurant);
        row.append(card);
    });

    function displayMenuItems(category) {
            // Clear existing food items in the menu-container
    $(".menu-container").empty();
        if (additionalRestaurants && Array.isArray(additionalRestaurants)) {
            additionalRestaurants.forEach(function(restaurant) {
                if (restaurant.menu && Array.isArray(restaurant.menu)) {
                    restaurant.menu.forEach(function(item) {
                        console.log("Item Category:", item.category); // Log the category for each item
                        if (item.category && item.category.toLowerCase() === category.toLowerCase()) {
                            var foodItem = $('<div class="food-item ' + category.toLowerCase() + '"></div>');
                            var foodImg = $('<div class="food-img"></div>').append('<img src="' + item.image + '" alt="' + item.name + '">');
                            var foodContent = $('<div class="food-content"></div>');
                            foodContent.append('<h2 class="food-name">' + item.name + '</h2>');
                            foodContent.append('<div class="line"></div>');
                            foodContent.append('<h3 class="food-price">' + item.price + '</h3>');
                            foodContent.append('<ul class="rating">' +
                                '<li><i class="fas fa-star"></i></li>'.repeat(Math.floor(parseFloat(restaurant.stars))) +
                                '<li><i class="far fa-star"></i></li>'.repeat(5 - Math.floor(parseFloat(restaurant.stars))) +
                                '</ul>');
                            foodContent.append('<p class="category">Categories: <span>' + item.category + '</span></p>');

                            foodItem.append(foodImg);
                            foodItem.append(foodContent);

                               // Append the created food item to the menu-container
                        $(".menu-container").append(foodItem);
                        }
                    });
                }
            });
        }
        // Update the menuItems variable after adding new elements
        const updatedMenuItems = document.querySelectorAll('.food-item');
        menuItems = Array.from(updatedMenuItems);
        console.log("Category:", category);
    console.log("Menu Items:", menuItems.length);
    }
   // Show the featured items by default
   displayMenuItems("Featured");

   const menuBtns = document.querySelectorAll('.menu-btn');
   const foodItems = document.querySelectorAll('.food-item');

   let activeBtn = "Featured"; // Default to "Featured" category

   showFoodMenu(activeBtn);

   menuBtns.forEach((btn) => {
       btn.addEventListener('click', () => {
           resetAndShow(btn.id);
       });
   });

   function resetAndShow(newMenuBtn) {
       resetActiveBtn();
       showFoodMenu(newMenuBtn);
       document.getElementById(newMenuBtn).classList.add('active-btn');
   }

   function resetActiveBtn() {
       menuBtns.forEach((btn) => {
           btn.classList.remove('active-btn');
       });
   }

   function showFoodMenu(newMenuBtn) {
       activeBtn = newMenuBtn;
       foodItems.forEach((item) => {
           if (item.classList.contains(activeBtn.toLowerCase())) {
               item.style.display = "grid";
           } else {
               item.style.display = "none";
           }
       });
   }


});
