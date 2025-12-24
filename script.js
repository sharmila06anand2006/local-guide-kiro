function recommend() {
  const q = document.getElementById("query").value.toLowerCase();
  let response = "";

  if (q.includes("spicy")) {
    response = "🔥 Try Kothu Parotta or Atho. Best spots: T Nagar, Marina Beach.";
  } else if (q.includes("evening")) {
    response = "🌆 Bajji, Bonda, and Sundal are perfect evening snacks!";
  } else {
    response = "🍴 Try Sundal, Bajji, or Kothu Parotta in Chennai!";
  }

  document.getElementById("output").innerText = response;
}
