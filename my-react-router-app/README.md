# React Router Pattern Example

This project demonstrates modern routing patterns in React using React Router v6, showcasing protected routes, navigation, and route parameters.

## Features

- **Route Protection**: Implementation of protected routes with authentication
- **Nested Routes**: Demonstration of route nesting
- **Dynamic Routes**: Usage of URL parameters
- **Active Link Styling**: Visual indication of current route
- **Type-Safe Routing**: Full TypeScript support

## Key Concepts Demonstrated

### Route Configuration
- Basic routing setup
- Protected route implementation
- 404 handling
- Route parameters

### Navigation
- Link and NavLink usage
- Programmatic navigation
- Active route styling
- Location-based UI updates

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx       # Dashboard with nested routes
│   ├── Home.tsx           # Home page component
│   ├── Product.tsx        # Dynamic route example
│   ├── Profile.tsx        # Protected route example
│   ├── NotFound.tsx       # 404 page
│   └── ProtectedRoute.tsx # Route protection wrapper
└── App.tsx               # Main routing configuration
```

## Usage Example

```tsx
// Protected Route Example
<Route 
  path="/profile" 
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
/>

// Dynamic Route Example
<Route path="/product/:id" element={<Product />} />
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173` in your browser

## Key Learnings
- Modern React Router v6 patterns
- Route protection strategies
- Navigation best practices
- TypeScript integration with routing
- Route-based code splitting
