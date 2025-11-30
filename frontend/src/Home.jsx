import React, { useState } from "react";
import "./Home.css";

export default function MovieReviewAnalyzer() {
  const [review, setReview] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAccuracy, setShowAccuracy] = useState(false);

  const MIN_LENGTH = 20;
  const accuracy = 91.75; 

  const predictSentiment = async () => {
    setError("");
    setPrediction(null);

    if (review.trim() === "") {
      setError("⚠️ Please enter a review before submitting.");
      return;
    }
    if (review.trim().length < MIN_LENGTH) {
      setError(
        `Please enter at least ${MIN_LENGTH} characters in your review.`
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://reviewanalysis-wco6.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: review }),
      });

      const data = await response.json();

      if (data && data.prediction) {
        setPrediction(data.prediction.toLowerCase());
      } else {
        setError("⚠️ Unexpected response from backend!");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("❌ Error connecting to backend! Is Flask running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analyzer-container">
      <h1 className="title">🎬 Movie Review Sentiment Analyzer</h1>
      <p className="subtitle">
        ✨ Let the ML model decode your review as Positive or Negative!
      </p>

      <textarea
        id="userInput"
        className="review-box"
        placeholder="For example: This movie was absolutely amazing! A must watch."
        rows="6"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      {error && <p className="error-msg">{error}</p>}

      <button
        onClick={predictSentiment}
        className="analyze-btn"
        disabled={loading}
      >
        {loading ? "⏳ Analyzing..." : "🔍 Analyze Review"}
      </button>

      {/* Result display */}
      <div id="result">
        {prediction && (
          <div
            className={`result-box ${
              prediction === "positive" ? "positive" : "negative"
            }`}
          >
            {prediction === "positive" ? (
              <>
                ✅ <strong>Positive Review!</strong> 🎉 Great vibes, amazing
                energy! 💖
              </>
            ) : (
              <>
                ❌ <strong>Negative Review!</strong> 😢 Maybe not a good one to
                watch...
              </>
            )}
          </div>
        )}
      </div>

      <div className="accuracy-section">
        <button
          className="toggle-accuracy"
          onClick={() => setShowAccuracy(!showAccuracy)}
        >
          {showAccuracy ? "Hide Model Accuracy" : "📈 Show Model Accuracy"}
        </button>

        {showAccuracy && (
          <div className="accuracy-info">
            Model is <strong>{accuracy.toFixed(2)}%</strong> accurate based on
            the IMDb review dataset.
          </div>
        )}
      </div>

      <footer className="footer">
        <hr />
        <p>
          Made with ❤️ by <strong>Kumar Swamy Tatikonda</strong>
        </p>
        <p>🚀 Powered by React & Scikit-learn</p>
      </footer>
    </div>
  );
}
