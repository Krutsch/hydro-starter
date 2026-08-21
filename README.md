<p align="center"><img src="https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="Project Logo"></p>

This project was bootstrapped with [Create Hydro App](https://github.com/Krutsch/create-hydro-app).

# hydro-starter ⚡️

A simple set-up.<br>
➡ This contains:

- hydro-js
- Comlink
- PWA
- Image optimization
- TailwindCSS with PostCSS
- JSX & TypeScript
- Bundler with Hot Module Replacement
- Prettier & ESLint
- Playwright with Accessibility Tests

## Build security

`npm run build` computes CSP SHA-256 hashes from every final HTML document,
including the dynamic `build/app/index.html` fragment, and writes them to
`build/_headers`. Deploy the generated HTML and headers from the same build.
