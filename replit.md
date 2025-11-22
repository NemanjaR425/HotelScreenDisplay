# Hotel Digital Signage Application

## Overview

This is a React-based hotel digital signage application designed for lobby displays. The system provides an elegant, professional interface that showcases hotel information, amenities, local attractions, weather updates, and multilingual content. The application follows a hospitality-focused design system optimized for readability from 6-15 feet viewing distances, with automatic content rotation and smooth transitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build System**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design tokens following hospitality industry standards
- **Component Library**: Radix UI primitives with shadcn/ui components for accessible, customizable UI elements
- **State Management**: React Context API for global language state, React hooks for local state, TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing with stable component references to preserve state across language changes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development**: Hot module replacement via Vite integration for seamless development experience
- **Session Management**: Built-in session handling with connect-pg-simple for PostgreSQL session storage

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database provider
- **Schema**: Centralized schema definitions in `/shared` directory for consistent data types across frontend and backend
- **Migrations**: Drizzle-kit for database schema migrations and version control

### Component Design System
- **Design Philosophy**: Professional hospitality aesthetic with exceptional readability
- **Color Palette**: Sophisticated navy and neutral tones with light/dark mode support
- **Typography**: Inter font family with clear hierarchy (hero, section headers, body content)
- **Layout System**: Grid-based spacing using Tailwind's consistent unit system
- **Interactive Elements**: Hover states and smooth transitions optimized for touch and display interaction

### Content Management
- **Multilingual Support**: Built-in internationalization with support for 6 languages (Montenegrin, English, Russian, Spanish, French, German)
  - **LanguageContext**: Global language state managed via React Context (`client/src/contexts/LanguageContext.tsx`)
  - **useLanguage Hook**: All pages and components access language state through `useLanguage()` hook
  - **State Persistence**: Language changes update UI in-place without remounting components or losing page state
  - **Translation System**: Centralized translations in `client/src/utils/translations.ts` with type-safe access
- **Content Categories**: Modular system for dining, shopping, excursions, entertainment, and spa services
- **Asset Management**: Integrated image handling for service categories and resort photography
- **Auto-rotation**: Timed content slides with configurable intervals for dynamic information display

### Data Architecture
- **Shared Types**: Common TypeScript interfaces between client and server for data consistency
- **API Layer**: RESTful endpoints with structured error handling and logging
- **Memory Storage**: Development-ready in-memory storage interface with database migration path
- **Real-time Updates**: Architecture prepared for live data updates (weather, events, announcements)

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild for production bundling
- **Development Tools**: TSX for TypeScript execution, Replit-specific plugins for development environment

### UI and Styling
- **Component Library**: Complete Radix UI suite (40+ primitive components)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Inter, DM Sans, Geist Mono, Architects Daughter)

### Database and Backend
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with Drizzle-kit for migrations
- **Validation**: Zod for runtime type validation and schema parsing
- **Session**: Connect-pg-simple for PostgreSQL session storage

### State Management and Data Fetching
- **Query Management**: TanStack React Query for server state, caching, and synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation
- **Date Handling**: date-fns for date manipulation and formatting

### Development and Production
- **HTTP Client**: Native Fetch API with custom query functions
- **Error Handling**: Custom error boundaries and logging utilities
- **Performance**: Class Variance Authority for efficient CSS-in-JS styling
- **Utilities**: clsx and tailwind-merge for conditional styling