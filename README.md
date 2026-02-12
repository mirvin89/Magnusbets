# MagnusBets - Professional NBA Betting Intelligence

A premium web platform for quantitative NBA picks and performance tracking, built with Next.js 15, Tailwind CSS 4, and modern design patterns.

## 🎯 Overview

MagnusBets provides professional-grade quantitative models for NBA betting with:
- **Daily quantitative picks** backed by multi-model consensus
- **Verified track record** with transparent methodology
- **Professional UI/UX** matching industry standards (RAS Picks aesthetic)
- **Real-time tracking** of picks and performance metrics
- **Community features** via Discord integration

## ✨ Features

- 📊 **Track Record Dashboard**: Live performance metrics, ROI, win rate, profit tracking
- 🎲 **Daily Picks Page**: Real-time quantitative picks with confidence scores
- 📈 **Performance Analytics**: Breakdown by bet type, monthly trends, confidence analysis
- 🎨 **Premium Design**: Professional gradient backgrounds, smooth animations, glass-morphism effects
- 📱 **Responsive Mobile**: Full functionality on all device sizes
- ✉️ **Waitlist CTA**: Signup modal with status feedback
- 💼 **Pricing Page**: Multi-tier subscription plans with feature comparison

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with PostCSS
- **Fonts**: Inter (body), Playfair Display (headers)
- **Backend**: Supabase (optional, for future features)
- **Hosting**: Vercel (recommended)

## 🎨 Design Highlights

### Color Palette
- **Primary Dark**: `#0a0e27` (Navy)
- **Secondary Dark**: `#1a1f3a` (Premium Navy)
- **Accent Gold**: `#d4af37` (Primary accent)
- **Accent Amber**: `#fbbf24` (Secondary accent)

### Key Design Elements
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Subtle radial gradients on sections
- **Smooth Animations**: 
  - `fade-in`: 0.6s ease-out
  - `slide-up`: 0.6s ease-out
  - `pulse-soft`: 3s infinite
  - `glow`: 2s infinite
- **Hover Effects**: Cards lift and glow on hover
- **Typography**: 
  - Headers: Playfair Display (serif, premium feel)
  - Body: Inter (modern, clean)
  - Letter spacing optimized for hierarchy

### Components Redesigned
1. **Navbar** - Fixed glass-morphism header with smooth transitions
2. **Hero** - Animated gradient backgrounds with trust badges
3. **Feature Cards** - Premium stat cards with hover elevation
4. **Track Record** - Multi-section performance dashboard
5. **Pricing** - Tiered cards with featured highlight
6. **Testimonials** - Avatar gradient badges with ratings
7. **Footer** - Social links and comprehensive footer
8. **CTAs** - Gradient buttons with glow effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mirvin89/Magnusbets.git
   cd magnusbets-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (hero + features + CTA)
│   ├── track-record/page.tsx # Performance dashboard
│   ├── picks/page.tsx        # Daily picks page
│   ├── about/page.tsx        # Methodology page
│   ├── pricing/page.tsx      # Pricing plans
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/
│   ├── Navbar.tsx            # Fixed navigation header
│   ├── Hero.tsx              # Hero section with stats
│   ├── TodayPicks.tsx        # Daily picks display
│   ├── Footer.tsx            # Footer with links
│   ├── CTA.tsx               # Call-to-action pricing
│   ├── Testimonials.tsx      # Member testimonials
│   ├── SignupModal.tsx       # Waitlist form
│   └── PerformanceChart.tsx  # Analytics visualization
│
└── lib/
    └── supabase.ts           # Supabase client
```

## 🎯 Pages

### Home (`/`)
- Hero section with stats
- Feature cards
- Methodology overview
- Trust metrics
- Final CTA section

### Track Record (`/track-record`)
- Key performance metrics
- Charts and graphs
- Breakdown by bet type
- Monthly performance
- Confidence analysis

### Picks (`/picks`)
- Daily quantitative picks
- Confidence scores
- Bet details and analysis
- Real-time status

### About (`/about`)
- Methodology explanation
- Data pipeline overview
- Model descriptions
- Backtesting results
- Our promise statement

### Pricing (`/pricing`)
- 3-tier subscription plans
- Feature comparison
- FAQ section
- Contact CTA

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy (automatic on push)

```bash
npm run build
npm start
```

## 📊 Future Enhancements

- [ ] Authentication system (Supabase Auth)
- [ ] User dashboard with history
- [ ] Advanced filtering and search
- [ ] Export picks to CSV/PDF
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Mobile app (React Native)
- [ ] Multi-sport support (NFL, MLB, NHL)
- [ ] Player props integration
- [ ] API for third-party integrations

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'premium-dark': '#0a0e27',
  'accent-gold': '#d4af37',
  'accent-amber': '#fbbf24',
}
```

### Fonts
Update `src/app/layout.tsx` to change typography:
```tsx
const playfair = Playfair_Display({ ... })
const inter = Inter({ ... })
```

### Animations
Modify `tailwind.config.js` keyframes section for animation timing.

## 📝 License

MIT License - Feel free to use this for commercial projects.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

- Email: support@magnusbets.com
- Discord: [Join our community]
- Twitter: [@MagnusBets]

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**