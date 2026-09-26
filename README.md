# Aditya Raj — Personal Portfolio

> Personal portfolio of **Aditya Raj** — Software Developer, Competitive Programmer & ECE undergrad at IIIT Tiruchirappalli.

---

## ✨ Features

| Section | What's inside |
|---|---|
| **Hero** | Animated typewriter role titles, live Codeforces rating pulled from the API, animated stat counters (LeetCode · Codeforces · CodeChef ratings) |
| **About** | Brief bio and quick-info cards |
| **Skills** | Categorised skill tags — Languages, Frontend, Backend, DSA, DevOps, and CS Concepts |
| **Competitive Coding** | Live rating cards for LeetCode, Codeforces, CodeChef & AtCoder; contest highlight feed |
| **Projects** | Featured project cards + live GitHub repo grid fetched from the GitHub API |
| **Contact** | Email, location, and social links (LinkedIn · GitHub · LeetCode · Codeforces) |

### UI / UX highlights

- 🌌 Animated mesh-gradient background blob
- 🖱️ Smooth 6-dot cursor trail effect
- 🎞️ Scroll-reveal animations on every section
- 🌐 Live data from Codeforces, AtCoder & GitHub APIs
- 📱 Fully responsive layout
- ♿ Semantic HTML with ARIA labels throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | **React 19** |
| Build tool | **Vite 8** |
| Styling | **CSS Modules** + Vanilla CSS |
| Linting | **Oxlint** |
| Package manager | npm / Bun |
| APIs | GitHub REST API · Codeforces API · AtCoder history JSON |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar/          # Sticky navigation bar
│   ├── Hero/            # Landing section with typewriter & live stats
│   ├── About/           # Bio and quick-info cards
│   ├── Skills/          # Skill category grid
│   ├── Competitive/     # CP platform cards + contest highlights
│   ├── Projects/        # Featured projects + live GitHub repos
│   ├── Contact/         # Contact card with socials
│   └── Footer/          # Footer
├── hooks/
│   ├── useTypewriter.js     # Rotating typewriter effect
│   ├── useCounter.js        # Animated number counter
│   ├── useScrollReveal.js   # IntersectionObserver scroll reveal
│   ├── useCodeforces.js     # Live Codeforces profile fetch
│   ├── useAtCoder.js        # Live AtCoder contest history fetch
│   └── useGitHub.js         # Live GitHub profile & repos fetch
├── assets/              # Static images & SVG logos
├── App.jsx              # Root layout with CursorTrail + section order
├── index.css            # Global design tokens & utilities
└── main.jsx             # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js ≥ 18** or **Bun**

### Install & run

```bash
# Clone the repo
git clone https://github.com/Megatron144/portfolio_.git
cd portfolio_

# Install dependencies
npm install        # or: bun install

# Start the dev server
npm run dev        # or: bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build      # Output goes to /dist
npm run preview    # Preview the production build locally
```

---

## 🔗 Links

| | |
|---|---|
| 💼 **LinkedIn** | [linkedin.com/in/aditya-raj26](https://www.linkedin.com/in/aditya-raj26/) |
| 🐙 **GitHub** | [github.com/Megatron144](https://github.com/Megatron144) |
| 🏆 **LeetCode** | [leetcode.com/u/adityaaarajjj](https://leetcode.com/u/adityaaarajjj/) *(Guardian · 2192)* |
| ⚡ **Codeforces** | [codeforces.com/profile/adityaraj18](https://codeforces.com/profile/adityaraj18) *(Candidate Master)* |
| ⭐ **CodeChef** | [codechef.com/users/adityaaa_rajjj](https://www.codechef.com/users/adityaaa_rajjj) *(4★ · 1837)* |
| 📧 **Email** | adityarajj6811@gmail.com |

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).  
Feel free to fork and customise it for your own portfolio.
