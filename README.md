# 🧮 Web Budget Calculator

## 📖 Introduction  
**Web Budget Calculator** is a web application built with **Angular 20** that helps users estimate the total cost of building a website based on selected services and options.  
The app dynamically updates the final price according to the user’s choices and provides a smooth, interactive interface for managing multiple quotes, filtering them, and even sharing them via URL.

This project is part of a frontend learning path focused on mastering **Angular**, **Reactive Forms**, **Signals**, and **component communication** while applying real-world use cases.

---

## 🎯 Goals  
The main objectives of this project are:

- ✅ Build a dynamic price calculator for web-related services.  
- ✅ Implement reactive forms with validation for user inputs.  
- ✅ Use Angular **Signals** to manage and update the state.  
- ✅ Enable creation and storage of **multiple budgets**.  
- ✅ Add features like **sorting, searching**, and **URL sharing** for quotes.  
- ✅ Ensure scalability with a clean and modular **component architecture**.  
- ✅ Apply **SASS** for custom and maintainable styling.

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js >= 20  
- Angular CLI >= 20  
- Git  

### Installation  
```bash
# Clone the repository
git clone https://github.com/your-username/web-budget-calculator.git

# Navigate to the project folder
cd budget

# Install dependencies
npm install # or: yarn install, or: pnpm install

# Start the development server
npm start # or: yarn start, or: pnpm start

```
Then Open http://localhost:4200 in your browser.


## Testing
```bash
# Run unit tests
npm test # or: yarn test, or: pnpm test
```

##Preview
![Preview](/public/calc.gif)


## Folder Structure

```bash
budget/
├── package.json
├── package-lock.json
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── README.md
├── .gitignore
├── .editorconfig
├── node_modules/
├── dist/
├── .angular
├── .vscode
├── public/
├── src/
│   ├── app/
│   │   ├── app.html
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.scss
│   │   ├── app.spec.ts
│   │   ├── app.ts
│   │   ├── components/
│   │   │   ├── molecules/
│   │   │   │   ├── checkout-form
│   │   │   │   │   ├── checkout-form.html
│   │   │   │   │   ├── checkout-form.scss
│   │   │   │   │   ├── checkout-form.spec.ts
│   │   │   │   │   └── checkout-form.ts
│   │   │   │   ├── services-list
│   │   │   │   │   ├── services-list.html
│   │   │   │   │   ├── services-list.scss
│   │   │   │   │   ├── services-list.spec.ts
│   │   │   │   │   └── services-list.ts
│   │   │   │   ├── service-card
│   │   │   │   │   ├── service-card.html
│   │   │   │   │   ├── service-card.scss
│   │   │   │   │   ├── service-card.spec.ts
│   │   │   │   │   └── service-card.ts
│   │   │   │   ├── search-filters
│   │   │   │   │   ├── search-filters.html
│   │   │   │   │   ├── search-filters.scss
│   │   │   │   │   ├── search-filters.spec.ts
│   │   │   │   │   └── search-filters.ts
│   │   │   │   ├── hero
│   │   │   │   │   ├── hero.html
│   │   │   │   │   ├── hero.scss
│   │   │   │   │   ├── hero.spec.ts
│   │   │   │   │   └── hero.ts
│   │   │   │   ├── prospects-list
│   │   │   │   │   ├── prospects-list.html
│   │   │   │   │   ├── prospects-list.scss
│   │   │   │   │   ├── prospects-list.spec.ts
│   │   │   │   │   └── prospects-list.ts
│   │   │   ├── organisms/
│   │   │   │   ├── prospects
│   │   │   │   │   ├── prospects.html
│   │   │   │   │   ├── prospects.scss
│   │   │   │   │   ├── prospects.spec.ts
│   │   │   │   │   └── prospects.ts
│   │   │   │   ├── cart
│   │   │   │   │   ├── cart.html
│   │   │   │   │   ├── cart.scss
│   │   │   │   │   ├── cart.spec.ts
│   │   │   │   │   └── cart.ts
│   │   ├── pages/
│   │   │   │   ├── sharedbudget
│   │   │   │   │   ├── sharedbudget.html
│   │   │   │   │   ├── sharedbudget.scss
│   │   │   │   │   ├── sharedbudget.spec.ts
│   │   │   │   │   └── sharedbudget.ts
│   │   │   │   ├── home
│   │   │   │   │   ├── home.html
│   │   │   │   │   ├── home.scss
│   │   │   │   │   ├── home.spec.ts
│   │   │   │   │   └── home.ts
│   │   ├── services/
│   │   │   ├── client-order.ts
│   │   │   ├── client-order.spec.ts
│   │   │   ├── info-modal.ts
│   │   │   ├── info-modal.spec.ts
│   │   │   ├── prospects-history.ts
│   │   │   └── prospects-history.spec.ts
│   │   ├── models/
│   │   │   ├── product.ts
│   │   │   └── prospect.ts
│   ├── index.html
│   ├── main.ts
└── └── styles.scss

```

## Technologies

- [Angular](https://angular.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Css-sass](https://sass-lang.com/)
- [pnpm](https://pnpm.io/)
- [Angular CLI](https://cli.angular.io/)
- [Karma](https://karma-runner.github.io/1.0/index.html)
- [Jasmine](https://jasmine.github.io/)

## To Do

- [x] Reactive forms with validation  
- [x] Angular Signals for state management
- [x] Core calculator logic and dynamic price updates  
- [x] Multiple budgets management  
- [x] URL sharing for generated quotes  
- [x] Basic responsive UI with SASS  
- [x] Sorting and search functionality  
- [x] Dynamic URL generation for sharing budgets
- [x] Testing setup and form validation  
- [ ] Polished mobile and UX details  
