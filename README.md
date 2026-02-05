# MyStore (template)

This is a starter file structure for a small storefront app.

Structure
- public/: Static assets served to the browser (HTML, CSS, JS, images)
- src/: Component fragments and page templates
- server/: Express backend serving API endpoints and static files
- package.json: Node project metadata

Quick start (local)
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   npm start
   ```

3. Open http://localhost:3000

Notes
- Components in src/components are simple HTML fragments for easy prototyping.
- Replace the 1x1 placeholder `public/images/logo.png` with your real logo.
- Integrate a database (e.g., MongoDB) and replace the demo product route with real data for production.
- Add a build step (esbuild/webpack/Vite) if you want to bundle the front-end modules.
