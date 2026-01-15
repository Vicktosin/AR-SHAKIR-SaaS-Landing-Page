# AR Shakir - SaaS Landing Page

A modern, responsive SaaS landing page built with **React** and **Tailwind CSS**. This project showcases a professional payment management platform with multiple component sections including hero, features, testimonials, dashboard showcase, and more.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern UI Components**: 
  - Hero section with dashboard mockup
  - Feature showcase cards
  - Payment flow section with profile interactions
  - Newsletter signup
  - Dashboard preview with images
  - Horizontal testimonial carousel (card-by-card scrolling)
  - Call-to-action section
  - Comprehensive footer
- **Smooth Animations**: Float effects, scroll behaviors, and transitions
- **Accessible**: Semantic HTML and ARIA labels
- **Performance Optimized**: Built with Vite for fast development and production builds

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation header
│   ├── Hero.jsx             # Hero section with dashboard
│   ├── Features.jsx         # Feature cards
│   ├── PaymentFlow.jsx      # Payment flow section
│   ├── Newsletter.jsx       # Newsletter signup
│   ├── Dashboard.jsx        # Dashboard showcase
│   ├── Testimonials.jsx     # Carousel with testimonials
│   ├── CTA.jsx              # Call-to-action section
│   └── Footer.jsx           # Footer with links
├── assets/                  # Images, icons, SVGs
├── App.jsx                  # Main app component
├── App.css                  # Global styles
├── main.jsx                 # Entry point
└── index.css                # Tailwind imports
```

## 🛠️ Tech Stack

- **React** 18+
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+**

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-landing-page.git
   cd saas-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 👁️ Preview Production Build Locally

```bash
npm run preview
```

## 📝 Components Overview

### Hero Component
Features a large dashboard mockup with floating cards, company logos carousel, and call-to-action buttons.

### Testimonials
Horizontal carousel with card-by-card navigation (no smooth scroll). Features:
- Profile images
- Star ratings
- Author information
- Previous/Next navigation buttons

### Dashboard Section
Showcases real dashboard screenshots with droplet pattern decoration and descriptive text.

### Footer
Single-row footer with:
- Brand information and social links
- Company, Product, Resources, and Contact columns
- All links are clickable

## 🎨 Customization

### Colors
Primary brand color: `#3734A9` (Purple)
Secondary: `#FF6B4A` (Coral/Orange)

Update in `App.jsx` or individual component `className` properties.

### Assets
All images and icons are located in `src/assets/`. Replace with your own:
- Dashboard mockups
- Profile pictures
- Company logos
- Decorative SVG patterns

### Content
Edit text content directly in component files:
- Headings, descriptions, and button labels
- Links in navigation and footer
- Testimonial quotes and author info

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **Any static hosting**

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📧 Contact

For questions or feedback, please reach out to shakir360@gmail.com

---

**Built with ❤️ for modern SaaS businesses**
