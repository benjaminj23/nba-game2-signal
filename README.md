# Game 2 Signal: NBA Playoff Series Predictor

A static GitHub Pages project for an NBA playoff analytics portfolio case study.

## What it includes

- Project landing page
- Key dashboard metrics
- Power BI embed placeholder
- Logistic regression model explanation
- JavaScript prediction calculator
- 2026 validation summary
- Limitations section

## How to use

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `.nojekyll`, and this `README.md`.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save and wait for GitHub Pages to publish.

Your site will usually appear at:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Add your Power BI dashboard

Open `index.html` and replace:

```html
src="about:blank"
```

with your Power BI embed URL.

## Model formula

The prediction calculator uses the logistic regression coefficients from the Python model:

- Intercept: `-0.39579645`
- 2-0 state: `1.5815`
- Home location: `0.4787`
- Game 2 margin: `0.0335`
- First Round: `0.0346`
- Eastern Conference Finals: `-0.5276`
- Western Conference Finals: `-0.0194`
- Finals: `-0.7355`

The baseline categories are:

- Series state: `1-1`
- Location: `Away`
- Round: `Conference Semifinals`
