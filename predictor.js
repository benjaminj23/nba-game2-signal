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

const stateInput = document.getElementById("state");
const marginInput = document.getElementById("margin");
const locationInput = document.getElementById("location");
const roundInput = document.getElementById("round");

const probabilityText = document.getElementById("probability");
const predictionText = document.getElementById("prediction-text");
const probabilityFill = document.getElementById("probability-fill");

function resetPrediction() {
  probabilityText.textContent = "--";
  predictionText.textContent = "Select all inputs to generate a prediction.";
  probabilityFill.style.width = "0%";
}

function inputsAreComplete() {
  const state = stateInput.value;
  const marginRaw = marginInput.value;
  const margin = Number(marginRaw);
  const location = locationInput.value;
  const round = roundInput.value;

  return (
    state !== "" &&
    marginRaw !== "" &&
    !Number.isNaN(margin) &&
    margin > 0 &&
    location !== "" &&
    round !== ""
  );
}

function predictSeriesWinProbability({
  afterGame2State,
  game2Margin,
  game2WinnerLocation,
  round
}) {
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
  if (!inputsAreComplete()) {
    resetPrediction();
    return;
  }

  const probability = predictSeriesWinProbability({
    afterGame2State: stateInput.value,
    game2Margin: Number(marginInput.value),
    game2WinnerLocation: locationInput.value,
    round: roundInput.value
  });

  const probabilityPercent = probability * 100;

  probabilityText.textContent = `${probabilityPercent.toFixed(2)}%`;
  probabilityFill.style.width = `${probabilityPercent}%`;

  predictionText.textContent =
    probability >= 0.5
      ? "The model predicts that the Game 2 winner is more likely to win the series. This is based on the 2004–2025 logistic regression model."
      : "The model predicts the Game 2 winner is more likely to lose the series. This is based on the 2004–2025 logistic regression model.";
}

[stateInput, marginInput, locationInput, roundInput].forEach((input) => {
  input.addEventListener("input", updatePrediction);
  input.addEventListener("change", updatePrediction);
});

resetPrediction();
