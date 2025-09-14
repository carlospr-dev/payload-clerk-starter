# Payload + Clerk Starter

A production-ready starter template combining [Payload CMS](https://payloadcms.com/) 3.0 with [Clerk](https://clerk.com/) authentication, built with Next.js 15 and TypeScript.

## ✨ Features

- **🔐 Clerk Authentication** - Complete user management with sign-up, sign-in, and role-based access
- **📝 Payload CMS 3.0** - Modern headless CMS with admin panel
- **⚡ Next.js 15** - Latest React framework with App Router
- **🗄️ SQLite Database (easily swappable)** - Lightweight database for development
- **🎨 Custom Admin UI** - Enhanced Payload admin with Clerk integration
- **🔒 Role-Based Access Control** - Admin, user roles with granular permissions
- **📱 Responsive Design** - Mobile-first admin interface
- **🧪 Testing Setup** - Vitest + Playwright for unit and E2E tests
- **🐳 Docker Support** - Containerized development and deployment
- **📦 TypeScript** - Full type safety throughout the application

## 🚀 Quick Start

### Prerequisites

- Node.js 18.20.2+ or 20.9.0+
- pnpm 9+ (recommended) or npm/yarn or Bun
- Clerk account ([sign up free](https://clerk.com/))

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/payload-clerk-starter.git
cd payload-clerk-starter
pnpm install
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Update `.env` with your configuration:

```env
# Database
DATABASE_URI=file:./payload-clerk-starter.db

# Payload
PAYLOAD_SECRET=your-super-secret-key-here

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL="/admin"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/admin"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/admin"
```

### 3. Set Up Clerk

1. Create a new application in your [Clerk Dashboard](https://dashboard.clerk.com/)
2. Copy your publishable and secret keys to `.env`
3. Configure redirect URLs in Clerk Dashboard to match your environment

### 4. Run Development Server

```bash
pnpm dev
```

Visit:

- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (frontend)/        # Public frontend routes
│   ├── (payload)/         # Payload admin routes
│   └── my-route/          # Custom API routes
├── collections/           # Payload collections
│   ├── access/           # Access control functions
│   ├── strategies/       # Auth strategies
│   ├── Media.ts          # Media collection
│   └── Users.ts          # Users collection
├── components/           # React components
│   ├── BeforeLogin/      # Login page components
│   └── payload/          # Payload admin components
├── lib/                  # Utility functions
├── providers/            # React context providers
└── types/               # TypeScript definitions
```

## 🔐 Authentication & Authorization

This starter implements a sophisticated auth system combining Clerk and Payload:

### User Roles

- **Super Admin**: Full system access
- **Admin**: Content management access
- **User**: Basic authenticated access

### Access Control

The starter includes comprehensive access control patterns:

- `isAdminRoles`: Admin-only access
- `isSuperAdminRoles`: Super admin-only access
- `isAdminRolesOrSelf`: Admin or own records
- `isAuthenticated`: Any authenticated user

### Clerk Integration

- Automatic user sync between Clerk and Payload
- Role management through Payload admin
- Custom admin UI components for user management

## 🛠️ Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm devsafe          # Clean start (removes .next)

# Building
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm generate:types   # Generate Payload types

# Testing
pnpm test             # Run all tests
pnpm test:int         # Run integration tests
pnpm test:e2e         # Run E2E tests

# Payload CLI
pnpm payload          # Access Payload CLI commands
```

## 🐳 Docker Development

Run with Docker Compose:

```bash
docker-compose up -d
```

This starts the application with all dependencies in containers.

## 🚀 Deployment

### Environment Variables

Ensure these are set in production:

- `DATABASE_URI`: Your production database URL
- `PAYLOAD_SECRET`: Strong secret key
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key
- `CLERK_SECRET_KEY`: Clerk secret key
- Clerk redirect URLs configured for your domain

### Deployment Platforms

This starter works with:

- **Vercel**: Deploy with zero configuration
- **Railway**: One-click deployment
- **Docker**: Use included Dockerfile
- **Payload Cloud**: Native Payload hosting

## 🧪 Testing

The starter includes comprehensive testing setup:

- **Unit Tests**: Vitest with React Testing Library
- **E2E Tests**: Playwright for full user flows
- **Test Database**: Separate test environment

Run tests:

```bash
pnpm test:int    # Unit/integration tests
pnpm test:e2e    # End-to-end tests
```

## 🔧 Customization

### Adding Collections

1. Create new collection in `src/collections/`
2. Add to `payload.config.ts`
3. Generate types: `pnpm generate:types`

### Custom Access Control

Extend access patterns in `src/collections/access/`

### Admin UI Customization

Modify components in `src/components/payload/`

## 📚 Documentation

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Payload CMS](https://payloadcms.com/) for the amazing headless CMS
- [Clerk](https://clerk.com/) for seamless authentication
- [Next.js](https://nextjs.org/) for the React framework

---

**Need help?** Open an issue or check the [discussions](https://github.com/yourusername/payload-clerk-starter/discussions).
