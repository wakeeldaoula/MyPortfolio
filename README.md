# Muhammad Wakeel - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, aesthetic UI with dark theme
- **Fully Responsive**: Works seamlessly on all devices
- **Animated**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Performance**: Optimized for Core Web Vitals
- **TypeScript**: Full type safety throughout the codebase
- **Accessible**: WCAG compliant components

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wakeeldaoula/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx            # Navigation component
│   │   └── index.ts              # Layout exports
│   ├── sections/
│   │   ├── hero.tsx              # Hero section
│   │   ├── about.tsx             # About section
│   │   ├── skills.tsx            # Skills section
│   │   ├── projects.tsx          # Projects section
│   │   ├── contact.tsx           # Contact section
│   │   ├── footer.tsx            # Footer component
│   │   └── index.ts              # Section exports
│   └── ui/
│       ├── button.tsx            # Button component
│       ├── card.tsx              # Card component
│       ├── input.tsx             # Input component
│       ├── textarea.tsx          # Textarea component
│       ├── label.tsx             # Label component
│       ├── badge.tsx             # Badge component
│       ├── toast.tsx             # Toast component
│       └── toaster.tsx           # Toaster provider
├── hooks/
│   └── use-toast.ts              # Toast hook
├── lib/
│   └── utils.ts                  # Utility functions
├── public/
│   └── resume.pdf                # Your resume (add this file)
├── components.json               # ShadCN configuration
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Customization

### Colors

Edit the CSS variables in `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 217 91% 60%;       /* Blue */
  --accent: 262 83% 58%;        /* Purple */
  --background: 222 47% 11%;    /* Dark blue */
  /* ... more variables */
}
```

### Content

Update the following files to customize the content:
- `components/sections/hero.tsx` - Name, role, and intro
- `components/sections/about.tsx` - Education and bio
- `components/sections/skills.tsx` - Skills list
- `components/sections/projects.tsx` - Projects data
- `components/sections/contact.tsx` - Contact information

### Resume

Add your resume as `public/resume.pdf` for the download button to work.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📧 Contact Form Setup

The contact form API is set up at `/api/contact`. To receive emails:

1. Sign up for [Resend](https://resend.com) or similar service
2. Add your API key to `.env.local`:
```
RESEND_API_KEY=your_api_key
```
3. Uncomment the email sending code in `app/api/contact/route.ts`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ by Muhammad Wakeel
