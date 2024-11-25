## Tailwind

```sh
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
```

## Flowbite

```sh
<link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
```

## Icons

```sh
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
```

## Animaciones

https://animate.style/

https://www.youtube.com/watch?v=hnf-bIsZnVQ

```sh
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
```

# Iniciar Astro

```sh
npm create astro@latest
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## GitHub

Pasos para la actualización del repositorio:

### Cargar un proyecto nuevo a un repositorio

```text
git init
```

```text
git add .
```

```text
git commit -m "feat: Proyecto subido a github"
```

```text
git branch -M main
```

```text
git remote add origin https://github.com/enlace-del-repositorio
```

```text
git push -u origin main
```

### Cargar cambios realizados en el proyecto

**Siempre realizar un "pull" como primer paso.**

```text
git pull origin main
```

```text
git init
```

```text
git status
```

```text
git add .
```

```text
git commit -m "Describir el cambio que se hace"
```

```text
git branch -M main
```

```text
**Opcional:** git remote add origin https://github.com/killthmxall/Curso-Angular.git
```

```text
git push -u origin main --force
```

### Clonar repositorio
```text
>>cd D:/
```

```text
git clone https://github.com/killthmxall/Curso-Angular.git
```
