# 🚀 Astro Clean Template

A minimal, SEO-ready Astro template with Tailwind CSS integration to kickstart your web projects.

## ✨ Features

- ⚡️ **Astro** - The modern web framework for building fast, content-focused websites
- 🎨 **Tailwind CSS** - A utility-first CSS framework packed with classes
- 🔎 **SEO Optimized** - Includes essential meta tags for better search engine visibility
- 📝 **Clean Code** - Well-structured and maintainable codebase

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)

## 🚀 Getting Started

1. Create a new project using this template:
   ```bash
   npm create astro  -- --template SofiDevO/pantilla-astro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── portada.png
├── src/
│   ├── components/
│   │   └── BaseHead.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🔧 Configuration

### SEO Configuration

The template includes a `BaseHead.astro` component that handles all SEO-related meta tags. It supports:

- Title and description meta tags
- Open Graph meta tags for social sharing
- Twitter Card meta tags
- Canonical URL
- Favicon

### Tailwind Configuration

Tailwind CSS is pre-configured and ready to use. Customization can be done through the Astro configuration file (`astro.config.mjs`).

## 📝 License

MIT License - feel free to use this template for any project!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
