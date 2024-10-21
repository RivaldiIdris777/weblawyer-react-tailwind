# Weblawyer React + TailwindCss

This template based on law service with tailwindcss frameworkcss

Screenshot :

![alt text](https://github.com/RivaldiIdris777/weblawyer-react-tailwind/blob/main/src/assets/scweb01.png?raw=true)

![alt text](https://github.com/RivaldiIdris777/weblawyer-react-tailwind/blob/main/src/assets/scweb02.png?raw=true)

### How to install

- Type command in cmd command/terminal: `git clone https://github.com/RivaldiIdris777/weblawyer-react-tailwind.git`
- then run command `npm install`
- next run command `npm run dev`

### Basic Install React + Vite + TailwindCss

- Run `npm create vite@latest my-react-app`
- then run command `npm install`
- next run command `npm install -D tailwindcss postcss autoprefixer`
- then next run command `npx tailwindcss init -p`
- copy all code below in `tailwind.config.js`
```yaml
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Roboto"]
      },
      colors: {
        bluePrimary: "#0c2461",
        redSecondary: "#b71540"
      },
    },
  },
  plugins: [],
}
```
- delete all text in `index.css` and then copy the code below
```yaml
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Then try make text in `app.jsx` like hello world. if the font change then you success install tailwind.

