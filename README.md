# Portfolio

My personal portfolio site. **Live:** [adivikramp.github.io/portfolio](https://adivikramp.github.io/portfolio)

Built with Next.js, [shadcn/ui](https://ui.shadcn.com/), and [Magic UI](https://magicui.design/). Statically exported and deployed to GitHub Pages via GitHub Actions.

## Tech Stack

- Next.js 16 (static export, `output: "export"`)
- React 19, TypeScript
- Tailwind CSS 4, shadcn/ui, Magic UI
- Motion (Framer Motion) for animations
- Biome for lint/format

## Features

- Single config file drives the whole site: [`src/data/resume.tsx`](./src/data/resume.tsx)
- Responsive across devices
- Light/dark theme
- Deployed automatically on every push to `master`

## Getting Started Locally

1. Clone:

   ```bash
   git clone https://github.com/adivikramp/portfolio
   ```

2. Move into the directory:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Edit [`src/data/resume.tsx`](./src/data/resume.tsx) to update content.

## Deployment

Pushes to `master` trigger [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds the static export and publishes it to GitHub Pages. Repo **Settings → Pages → Source** must be set to **GitHub Actions**.

## Acknowledgements

Based on the [portfolio template](https://github.com/dillionverma/portfolio) by Dillion Verma.

## License

Licensed under the [MIT license](./LICENSE).
