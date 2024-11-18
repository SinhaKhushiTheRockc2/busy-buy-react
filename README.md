# Busy-Buy
Devloped an e-commerce application to showcase my skills in frontend development and UI/UX design using React.js.


## Hosted Link:
### 

## Features:
* Home Page: Displays a catalog of available products with details like name, price, and an Add to Cart button.
* Search: Integrated a search bar for easy product lookup.
* Filter: Implemented filtering options to allow users to refine products based on their preferences (e.g., price range, categories).
* User Authentication: SignUp->Allows new users to create account and SignIn->Enables existing users to login in their account.
* Dual theme Mode: Integrated light and dark themes to allow users to switch modes for personalized user experience.

## Tools Used:
* React
* Javascript
* CSS
* React Hooks
* Firebase

## Folder Structure:
```bash
busy-buy/
├── public/
│   ├── index.html
│   ├── 404.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── authentication/
│   │   │    └── Auth.jsx
│   │   ├── nav/
│   │   │    ├── Navbar.jsx
│   │   │    └── Navbar.module.css
│   │   ├── product/
│   │   │    ├── ProductCard.jsx
│   │   │    ├── FilterProductCard.jsx
│   │   │    └── Product.module.css
│   │   └── theme/
│   │        └── ThemeContext.jsx
│   ├── error/
│   │   └── ErrorPage.jsx
│   ├── pages/
│   │   ├── cart/
│   │   │    ├── Cart.jsx
│   │   │    └── Cart.module.css
│   │   ├── home/
│   │   │    ├── Home.jsx
│   │   │    └── Home.module.css
│   │   ├── loginOptions/
│   │   │    ├── SignUp.jsx
│   │   │    ├── SignIn.jsx
│   │   │    └── SignIn.module.css
│   │   └── orders/
│   │        ├── Order.jsx
│   │        └── Order.module.css
│   ├── App.js
│   ├── firebaseInit.js
│   ├── index.css
│   ├── index.js
│   └── productContext.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── ...
```

## Installation On Local Machine:
Follow these steps to get the project up and running on your local system:

1. Clone the repository to your local machine:
```bash
  https://github.com/SinhaKhushiTheRockc2/busy-buy-react
```
2. Navigate to the root directory of the project:

3. Install all the dependencies:
```bash
    npm install
```
4. Start the development server
```bash 
    npm run start
```
5. Open your web browser and go to http://localhost:3000 to see the application in action.


