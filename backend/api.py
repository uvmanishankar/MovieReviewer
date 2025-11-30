from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load("sentiment_model.pkl")
cv = joblib.load("vectorizer.pkl")

@app.route("/")
def home():
    return jsonify({"message": "API is live! 🚀 Use /predict to analyze sentiment."})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json(force=True)
        text = data.get("text", "")

        if not text.strip():
            return jsonify({"error": "Text input is empty"}), 400

        vec = cv.transform([text])
        pred = model.predict(vec)[0]
        return jsonify({"prediction": pred})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
