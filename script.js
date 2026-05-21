const model = {
  intercept: -0.39579645,
  coefficients: {
    state_2_0: 1.5815,
    game2_winner_home: 0.4787,
    game2_margin: 0.0335,
    round_first_round: 0.0346,
    round_eastern_conference_finals: -0.5276,
    round_western_conference_finals: -0.0194,
    round_finals: -0.7355
  }
};

function predictSeriesWinProbability({ afterGame2State, game2Margin, game2WinnerLocation, round }) {
  let score = model.intercept;

  if (afterGame2State === "2-0") {
    score += model.coefficients.state_2_0;
  }

  if (game2WinnerLocation === "Home") {
    score += model.coefficients.game2_winner_home;
  }

  score += model.coefficients.game2_margin * game2Margin;

  if (round === "First Round") {
    score += model.coefficients.round_first_round;
  } else if (round === "Eastern Conference Finals") {
    score += model.coefficients.round_eastern_conference_finals;
  } else if (round === "Western Conference Finals") {
    score += model.coefficients.round_western_conference_finals;
  } else if (round === "Finals") {
    score += model.coefficients.round_finals;
  }

  return 1 / (1 + Math.exp(-score));
}

function updatePrediction() {
  const afterGame2State = document.getElementById("state").value;
  const game2Margin = Number(document.getElementById("margin").value);
  const game2WinnerLocation = document.getElementById("location").value;
  const round = document.getElementById("round").value;

  const probability = predictSeriesWinProbability({
    afterGame2State,
    game2Margin,
    game2WinnerLocation,
    round
  });

  const pct = probability * 100;
  document.getElementById("probability").textContent = `${pct.toFixed(2)}%`;
  document.getElementById("probability-fill").style.width = `${Math.min(Math.max(pct, 0), 100)}%`;

  const prediction = probability >= 0.5
    ? "The model predicts the Game 2 winner is more likely to win the series."
    : "The model predicts the Game 2 winner is more likely to lose the series.";

  document.getElementById("prediction-text").textContent = `${prediction} This is based on the 2004–2025 logistic regression model.`;
}

["state", "margin", "location", "round"].forEach((id) => {
  document.getElementById(id).addEventListener("input", updatePrediction);
  document.getElementById(id).addEventListener("change", updatePrediction);
});

updatePrediction();
