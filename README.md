# Sustainable Geospatial

An interactive, responsive single-page site showcasing Sustainable Geospatial’s mission and turnkey geospatial services—built with React, Vite, TailwindCSS, and deployed on Netlify.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Environment Variables](#environment-variables)  
  - [Running Locally](#running-locally)  
  - [Building for Production](#building-for-production)  
- [Folder Structure](#folder-structure)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)

---

## Demo

Live site: https://sustainable-geo.netlify.app

---

## Features

- **Hero & Mission** — Clear mission statement and call-to-action.  
- **Services Overview** — Site identification, LiDAR & photogrammetry, remote sensing, etc.  
- **Contact Form** — Google reCAPTCHA-protected inquiries form.  
- **Responsive Design** — Mobile, tablet, and desktop-ready.  
- **Accessibility** — Semantic HTML, ARIA attributes, and keyboard navigable.

---

## Tech Stack

- **Framework:** React  
- **Bundler:** Vite  
- **Styling:** TailwindCSS  
- **Forms:** React Hook Form + Google reCAPTCHA  
- **Deployment:** Netlify

---

## Getting Started

### Prerequisites

- Node.js ≥ 16.x  
- npm or Yarn  

### Installation

```bash
git clone https://github.com/your-username/sustainable-geo.git
cd sustainable-geo
npm install
# or
yarn
```
### Folder Structure


```
.
├── public/                # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/            # Images, icons, logos
│   ├── components/        # Reusable UI components (Header, Footer, Gallery, etc.)
│   ├── pages/             # Sections (Home, Projects, Story, Connect)
│   ├── styles/            # Tailwind config, global CSS
│   ├── App.jsx            # Routes & layout
│   └── main.jsx           # Application entrypoint
├── .gitignore             # Ignore rules
├── tailwind.config.js
├── vite.config.js
└── README.md


