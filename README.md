# Michael Shekwolo — Portfolio

My personal portfolio as a backend and full-stack software engineer focused on Golang, scalable APIs, event-driven services, and cloud architecture.

**Website:** [michaelshekwolo.com](https://michaelshekwolo.com/)

## About the site

The portfolio brings together my selected projects, professional experience, education, resume, and contact details. Featured work includes ZenerLink, Needbanc, Redd, Cofikra, ZumaOS, PCE, ServAfri, Aebello, and Dhylapse. Each project card opens a dedicated detail page with a product overview, features, technology stack, and a product link where a public URL is available.

Built with HTML, CSS, and vanilla JavaScript, the site includes responsive layouts, a mobile navigation menu, social sharing metadata, structured data, and a sitemap. There are no package dependencies or build steps. Fonts are loaded from Google Fonts.

## Run locally

Clone the repository:

```sh
git clone https://github.com/heismyke/shekwolomichael.git
cd shekwolomichael
```

Open `index.html` in your browser, or serve the folder using Python 3:

```sh
python3 -m http.server 8000
```

Then visit [localhost:8000](http://localhost:8000).

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio content, page metadata, and structured data |
| `projects/` | Standalone product detail pages |
| `assets/logos/` | Product brand assets from the respective project repositories |
| `styles.css` | Layout, typography, colors, and responsive styles |
| `script.js` | Mobile navigation behavior |
| `myke.png` | Site icon and social preview image |
| `resume.pdf` | Linked resume |
| `robots.txt` | Crawler guidance and sitemap location |
| `sitemap.xml` | Site URL and update metadata |

## Update and deploy

Edit `index.html` to update projects, experience, and contact details. Edit the matching page in `projects/` for product details and outbound links. Adjust `styles.css` for visual changes and replace `resume.pdf` when publishing a new resume.

Deploy the repository root to a static web host; no build command is required. If the domain changes, update the URLs in `index.html`, `robots.txt`, and `sitemap.xml`. Keep the sitemap's `lastmod` date aligned with substantive site updates.

## Contact

- **Email:** [mickienorman5@gmail.com](mailto:mickienorman5@gmail.com)
- **GitHub:** [heismyke](https://github.com/heismyke)
- **LinkedIn:** [Michael Shekwolo](https://linkedin.com/in/michael-shekwolo)
