# 🎬 Movie Review Analysis

An end-to-end **Sentiment Analysis Web App** that predicts whether a movie review is **Positive** or **Negative** using **Machine Learning** and **Natural Language Processing (NLP)** techniques.

---

## 🚀 Overview

This project leverages a **Multinomial Naive Bayes (MultinomialNB)** model trained on IMDb reviews to perform sentiment analysis on user-submitted movie reviews.  
It integrates a **FastAPI backend** for handling API requests and a **React.js frontend** for an interactive web experience.  
The full stack application is deployed on **Render**.

---

## 🧠 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React.js, HTML, CSS |
| **Backend** | FastAPI (Python), Flask (for local testing) |
| **Machine Learning** | Scikit-learn (MultinomialNB, CountVectorizer) |
| **NLP Techniques** | Text preprocessing, tokenization, stopword removal |
| **Deployment** | Render |

---

## 💡 Features

- ✅ Real-time sentiment prediction (Positive / Negative)
- 🧠 Trained on IMDb review dataset using MultinomialNB
- 🌐 Fast and lightweight REST API built with FastAPI
- 💬 Clean, user-friendly React UI
- ☁️ Fully deployed on Render for public access

---
## 🧩 Project Structure
```
Movie-Review-Analysis/
│
├── backend/
│ ├── api.py # FastAPI app for serving model predictions
│ ├── sentiment_model.pkl # Trained MultinomialNB model
│ ├── vectorizer.pkl # CountVectorizer instance
│ ├── requirements.txt # Python dependencies
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Main React component
│ │ ├── App.css # Styling
│ │ └── components/ # UI Components
│ ├── package.json
│
└── README.md
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/kumartatikonda1119/ReviewAnalysis.git
cd Movie-Review-Analysis
cd backend
pip install -r requirements.txt
python api.py

Your backend will start at:
👉 http://127.0.0.1:5000

cd ../frontend
npm install
npm run dev
Your frontend runs at:
👉 http://localhost:5173
 (or the port shown in terminal)

```

###🔗 Deployment

Both backend and frontend are deployed using Render:

🌐 Frontend: https://movie-review-analysis.onrender.com

⚙️ Backend API: https://movie-review-api.onrender.com/predict


###🧾 Example Input / Output
-Input Review	Prediction
-This movie was absolutely amazing!"	✅ Positive
-"Worst movie I’ve seen in years."	❌ Negative

📚 Learnings

Hands-on experience in text classification and NLP

Integrated FastAPI backend with a React frontend

Deployed full stack app using Render

❤️ Acknowledgments

Developed with passion by Kumar Swamy Tatikonda
🎓 B.Tech in Computer Science (AI & ML) <br>
🚀 Exploring Machine Learning, Web Development, and AI-driven systems


🪪 License

This project is licensed under the MIT License.
Feel free to use and modify it for educational purposes.



---
