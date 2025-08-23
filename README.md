# Kamran Portfolio & Blog

A modern, responsive portfolio and blog website built with Next.js 14, TypeScript, and Tailwind CSS. Features server-side rendering (SSR), dark/light mode toggle, and a beautiful user interface.

## Features

- 🚀 **Next.js 14** with App Router and SSR
- 🎨 **Tailwind CSS** for modern, responsive design
- 🌙 **Dark/Light Mode** toggle with persistent storage
- 📱 **Fully Responsive** design for all devices
- 📝 **Blog System** with individual post pages
- 💼 **Portfolio** showcasing projects and skills
- 📧 **Contact Form** for easy communication
- ⬆️ **Scroll to Top** button for better UX
- 🔍 **SEO Optimized** with proper metadata

## Pages

- **Home** - Hero section, about me, and featured content
- **Projects** - Portfolio showcase with project details
- **Blog** - Blog listing with excerpts and tags
- **Blog Posts** - Individual blog post pages
- **Contact** - Contact form and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kamran-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
kamran-website/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── ScrollToTop.tsx    # Scroll to top button
│   └── ThemeProvider.tsx  # Theme context provider
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  // ... more colors
}
```

### Content
- Update personal information in the components
- Modify blog posts in `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`
- Edit project details in `app/projects/page.tsx`
- Update contact information in `app/contact/page.tsx`

### Styling
- Modify `app/globals.css` for custom CSS
- Update component classes for layout changes
- Add new Tailwind utilities as needed

## Technologies Used

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## Performance Features

- Server-side rendering (SSR)
- Optimized images and assets
- Efficient CSS with Tailwind
- Lazy loading for better performance
- Responsive design for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me through the website
- Send me an email

---

Built with ❤️ by Kamran
