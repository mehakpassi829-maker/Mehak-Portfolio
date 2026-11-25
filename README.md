# ✦ Mehak · 3D Portfolio

An interactive 3D portfolio website built with plain HTML, CSS and JavaScript, plus Three.js for the 3D effects.

**🌐 Live site:** https://mehakpassi829-maker.github.io/Mehak-Portfolio/

## About

I'm Mehak, a B.Tech student in Computer Science Engineering (AI & Data Science) at CT University, Ludhiana, graduating in 2028. This portfolio showcases my projects, skills, experience and achievements as I look for AI/ML and software engineering internships.

## Features

- **3D floating background** that follows the mouse and shifts as you scroll (Three.js)
- **Interactive skill balls**: a small physics playground where you can push the skills around with your cursor or finger
- **3D tilt project cards** that react to the pointer
- **VisionCrafter AI showcase**: a gallery with the real app screenshots and AI-generated artwork, with click-to-zoom images and a back button
- **Scroll-reveal animations** on every section
- **Automatic light and dark mode** based on the visitor's device settings
- **Fully responsive** on desktop, tablet and mobile
- **Contact form** that opens the visitor's email app with the message filled in

## Projects

| Project | Description | Status |
| --- | --- | --- |
| [GitGauge AI](https://gitgauge.vercel.app/) | Full-stack platform that analyses GitHub profiles (commits, languages, engineering practices, documentation, growth) and produces a Hireability Score. Built with Python, FastAPI and the GitHub API. | Live on Vercel |
| VisionCrafter AI | Text-to-image app powered by Stable Diffusion, with prompt enhancement, negative prompts, 16 art styles and adjustable settings. Built with Python and Flask. | Runs locally, showcased in the gallery |
| This portfolio | Interactive 3D portfolio built with HTML, CSS, JavaScript and Three.js. | Live on GitHub Pages |

## Tech stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, glassmorphism, animations)
- Vanilla JavaScript
- [Three.js](https://threejs.org/) r128 (loaded from the cdnjs CDN)
- Google Fonts: Cormorant Garamond, DM Sans, Syne
- Hosted on GitHub Pages

## Project structure

```
Mehak-Portfolio/
├── index.html        # Page structure and content
├── style.css         # Styling, layout, animations, responsive rules
├── scripts/
│   └── main.js       # 3D scenes, skill-ball physics, card tilt, gallery, contact form
├── images/           # Screenshots and artwork used in the project showcase
└── README.md
```

## Run locally

No installation or build step is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/mehakpassi829-maker/Mehak-Portfolio.git
   cd Mehak-Portfolio
   ```
2. Start a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open http://localhost:8000 in your browser.

An internet connection is needed because Three.js and the fonts load from CDNs.

## Customise

- **Colours:** edit the variables in the `:root` block at the top of `style.css`.
- **Skill balls:** edit the `names` array in `scripts/main.js`.
- **Project links and text:** edit the `<section id="work">` block in `index.html`.
- **Showcase images:** replace the files in `images/`, keeping the same file names.

## Deployment

The site is deployed with GitHub Pages from the `main` branch (root folder). Every push to `main` updates the live site automatically within a minute or two.

## Contact

- **Email:** mehakpassi829@gmail.com
- **GitHub:** [mehakpassi829-maker](https://github.com/mehakpassi829-maker)

---

Designed and built with ♥ by Mehak
