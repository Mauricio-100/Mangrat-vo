// utils/api.js

const API_BASE = "https://sarver-fullstack-4.onrender.com/api";

// Auth
export async function login(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function register(username, email, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
}

// Chat IA
export async function sendMessage(token, message) {
  const res = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  });
  return res.json();
}

// Transactions
export async function getTransactions(token) {
  const res = await fetch(`${API_BASE}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// Achat de SC (Stripe)
export async function buySC(token, amount) {
  const res = await fetch(`${API_BASE}/buy-sc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  });
  return res.json();
}

// Génération token API
export async function generateApiToken(token) {
  const res = await fetch(`${API_BASE}/generate-token`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
