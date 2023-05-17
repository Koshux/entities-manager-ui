# entities-manager-ui

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Entities Manager UI

This is a Vue.js frontend application that interacts with an API to manage customers, sites, meters, and circuits.

## Features

- CRUD Operations: Users can create, read, update, and delete customers, sites, meters, and circuits.
- Dashboard: Users can view an overview of their entities in a visual representation.
- Vue Router: Navigation is handled using Vue Router to create different pages.
- element-plus: The app is styled using element-plus, a popular Vue.js component framework.
- Pinia: The app uses Pinia for state management.

## Project Setup

1. Clone the repository:
```bash
   git clone <repository-url>
```
2. Install the dependencies:
```bash
cd vue-frontend-app
npm install
```
3. Configure the API base URL:
    - Open src/api/config.js.
    - Replace the BASE_URL with the base URL of your API.

4. Run the development server:
```bash
npm run serve
```
The app will be accessible at http://localhost:8080.
5. Build the production-ready bundle:
```bash
    npm run build
```
The compiled assets will be located in the dist directory.

### Usage

1. Register a new account using the registration form.
2. Log in with your account credentials.
3. Explore the various pages to manage customers, sites, meters, and circuits.
4. Use the navigation sidebar to switch between pages.
5. Log out when you're done.

## API Documentation

For detailed API documentation, please refer to the API Documentation for information on available endpoints and request/response formats.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

```css
Feel free to modify and customize this `README.md` file according to your specific project requirements and details.
```
## TODO
- Use element-plus Cascader component for dropdowns with business logic.
- We want the ability to create a site.
- We want to be able to create a meter and a circuit as a direct link to the site when creating a new site.
    - If there are no meters or circuits, the user should be able to create one.
- We want to be able to create a meter.
- We want to be able to create a circuit as a direct link (child) to the new meter being created.
- We want to be able to create a circuit.
- We want to be able to create a circuit as a direct link (child) to the new circuit being created.
- We want to be able to create a circuit as a direct link (child) to the meter when creating a new circuit.
- We want to be able to create a circuit as a direct link (child) to the site when creating a new circuit.

Site
  > Create meter
  > Create circuit
  > Link to meter
  > Link to circuit

Meter
  > Create circuit
  > Link to site

Circuit
  > Create circuit
  > Link to meter
  > Link to site
