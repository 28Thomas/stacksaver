# StackSaver 🚀

A Chrome extension that helps marketers save money on AI tools by showing real discounts the moment they visit AI SaaS sites.

## ✨ Features

- **Real-time Discount Detection**: Automatically finds verified discounts on AI marketing tools
- **One-Click Activation**: Simple click to activate deals without redirects
- **Transparent Pricing**: No hidden fees or shady redirects
- **Privacy-First**: No tracking, just savings

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stacksaver.git
   cd stacksaver
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

4. **Set up Supabase database**
   - Create a new Supabase project
   - Run the SQL from `supabase-schema.sql` in the SQL Editor
   - Copy your project URL and anon key to `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
stacksaver/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── privacy/        # Privacy policy page
│   │   └── logo/           # Logo download page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── landing/       # Landing page sections
│   └── lib/               # Utility functions
├── public/                # Static assets
├── supabase-schema.sql    # Database schema
└── env.example           # Environment variables template
```

## 🎨 Customization

### Colors
The project uses a green color scheme that can be customized in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - Global styles

### Content
Update the content in:
- `src/components/landing/` - Landing page sections
- `src/app/layout.tsx` - Meta tags and site title
- `src/app/privacy/page.tsx` - Privacy policy

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push to main

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📊 Database Schema

The project uses a `subscribers` table with the following structure:

```sql
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'early_access',
  status VARCHAR(20) DEFAULT 'pending',
  confirmed_at TIMESTAMP WITH TIME ZONE NULL,
  unsubscribed_at TIMESTAMP WITH TIME ZONE NULL,
  metadata JSONB DEFAULT '{}'::jsonb
);
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js and Supabase
- Icons from Lucide React
- Styling with Tailwind CSS

---

**Built with 💚 in the Netherlands**
