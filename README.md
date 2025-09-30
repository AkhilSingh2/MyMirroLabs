# MyMirro Labs - B2B SaaS Fashion Recommendation Platform

A modern, sleek Next.js website for MyMirro Labs, an AI-powered B2B SaaS platform for fashion recommendations.

## 🚀 Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern utility-first styling
- **Framer Motion** - Beautiful animations and transitions
- **React** - Component-based UI

## 📁 Project Structure

```
mymirro-labs/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   └── Footer.tsx        # Footer component
├── data/                  # Data files (CSV files go here)
│   └── README.md         # Instructions for CSV placement
├── lib/                   # Utility functions
├── public/               # Static assets
│   └── images/          # Image assets
└── package.json          # Project dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

1. Navigate to the project directory:
```bash
cd mymirro-labs
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Adding Your Content

Place your CSV file with page content and sections in the `/data` folder. The CSV should contain:
- Page names
- Section information
- Content for each section
- Any additional metadata

Once you add the CSV file, additional pages and sections can be generated based on that data.

## 🎨 Design Features

- **Modern & Sleek** - Clean, professional B2B SaaS aesthetic
- **Animated** - Smooth Framer Motion animations throughout
- **Responsive** - Mobile-first design that works on all devices
- **Dark Mode** - Automatic dark mode support
- **Performance** - Optimized with Next.js best practices

## 📄 Current Pages

- **Home** - Landing page with hero, features, and stats
- Additional pages will be created based on your CSV data

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📝 License

Copyright © 2025 MyMirro Labs. All rights reserved.