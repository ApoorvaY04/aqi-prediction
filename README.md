# 🌫️ Advanced Air Quality Index Prediction through Transfer Learning Techniques

This project predicts the **Air Quality Index (AQI)** based on pollutant values like PM2.5, PM10, NO₂, CO, SO₂, and O₃ using machine learning models such as **Random Forest** and **LSTM**.

We also created a simple static webpage where users can input air quality parameters manually and receive a predicted AQI level (simulated for now).

---

## 🔍 Features

- AQI prediction based on major pollutants
- User-friendly webpage interface (HTML + CSS + JS)
- Categorizes AQI as Good, Moderate, Poor, etc.
- Educational and demo purpose (values are simulated)

---

🧠 Algorithms Used
Random Forest: For traditional machine learning-based prediction.

LSTM (Long Short-Term Memory): For time series modeling using deep learning.

Transfer Learning: For enhancing prediction performance with pre-trained knowledge across cities.

---

📌 Note
This version of the project is for educational/demo purposes only. In a real-world deployment:

Pollutant levels would be fetched from IoT sensors or APIs (e.g., CPCB or OpenAQ).

The AQI would be calculated using official EPA standards and breakpoints.

## 📂 Project Structure

```plaintext
.
├── index.html         # Main webpage
├── style.css          # Styling for the webpage
├── script.js          # AQI prediction logic (simulated)
├── model/             # Folder for trained models (Random Forest / LSTM)
├── dataset/           # Contains the original dataset used
└── README.md          # Project overview

----





