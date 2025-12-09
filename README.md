# ASTRNTBRND E-commerce Website

A modern e-commerce website built with React, JavaScript, and Tailwind CSS, replicating the ASTRNTBRND brand design.

## Features

- **Home Page**: Hero section with "AFTER PARTY DROP" collection
- **Product Catalog**: Browse all available products
- **Product Details**: View detailed information about each product
- **New Arrivals Section**: Featured products on the homepage
- **Newsletter Subscription**: Discount signup form
- **Responsive Design**: Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
project-13/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   └── ProductDetail.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18**: UI library
- **React Router**: Navigation and routing
- **Tailwind CSS**: Styling
- **Vite**: Build tool and dev server

## Pages

- `/` - Home page with hero section and new arrivals
- `/catalog` - Full product catalog
- `/product/:id` - Individual product detail page


