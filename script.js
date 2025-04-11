document.getElementById("aqi-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // For now, simulate a random AQI
  const aqi = Math.floor(Math.random() * 500);
  let category = "";

  if (aqi <= 50) category = "🟢 Good";
  else if (aqi <= 100) category = "🟡 Satisfactory";
  else if (aqi <= 200) category = "🟠 Moderate";
  else if (aqi <= 300) category = "🔴 Poor";
  else if (aqi <= 400) category = "🟣 Very Poor";
  else category = "⚫ Severe";

  document.getElementById("result-box").style.display = "block";
  document.getElementById("aqi-value").innerText = aqi;
  document.getElementById("aqi-category").innerText = `Category: ${category}`;
});