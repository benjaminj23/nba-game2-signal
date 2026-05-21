# Game 2 Signal: NBA Playoff Series Predictor

**Game 2 Signal** is a sports analytics portfolio project that investigates whether winning Game 2 predicts the eventual winner of an NBA playoff series.

The project combines:

- a cleaned NBA playoff series dataset
- Power BI dashboard views
- a logistic regression prediction model
- an interactive JavaScript prediction calculator
- a GitHub Pages portfolio website

Because apparently “Game 2 matters” deserved a full analytics pipeline. Naturally.

---

## Live Project

**GitHub Pages site:**  
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

Replace the link above with your actual GitHub Pages URL.

---

## Project Question

**Does winning Game 2 predict the NBA playoff series winner?**

More specifically, the project asks:

> Is winning Game 2 important by itself, or is the effect mainly driven by teams taking a 2-0 series lead?

---

## Key Findings

Using **330 completed best-of-seven NBA playoff series from 2004 to 2025**:

| Metric | Result |
|---|---:|
| Total series analysed | 330 |
| Game 2 winners who won the series | 244 |
| Overall Game 2 winner win rate | 73.94% |
| Win rate when Game 2 winner led 2-0 | 89.12% |
| Win rate when Game 2 winner tied the series 1-1 | 52.55% |
| 2026 out-of-sample test accuracy | 83.3% |
| 2026 out-of-sample AUC | 0.778 |

The main insight:

> Winning Game 2 is predictive overall, but the strongest signal comes when the Game 2 winner also won Game 1 and takes a 2-0 series lead.

---

## Website Pages

The GitHub Pages site is split into five pages:

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Project overview and key metrics |
| Dashboard | `dashboard.html` | Power BI dashboard PDF views |
| Model | `model.html` | Logistic regression results and interpretation |
| Predictor | `predictor.html` | Interactive win probability calculator |
| Methodology | `methodology.html` | Dataset, feature design, limitations, and future work |

---

## Dashboard Views

Live Power BI embedding was not used because Power BI public sharing requires the right license/settings. Instead, the dashboard is exported into PDF views and linked from the website.

Required PDF files in the repository root:

```text
dashboard_overall.pdf
dashboard_2_0.pdf
dashboard_1_1.pdf
dashboard_home.pdf
dashboard_away.pdf
