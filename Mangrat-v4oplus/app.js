import { loadState } from "./utils/storage.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

// Etat global
export const state = {
  user: null,
  jwt: null,
  apiToken: null,
};

// Charger depuis localStorage
loadState(state);

// Routing simple
async function loadPage(page) {
  const res = await fetch(`./components/${page}.html`);
  const html = await res.text();
  document.getElementById("main-content").innerHTML = html;

  // Charger script si existe
  if (pageScripts[page]) pageScripts[page]();
}

// Associer pages à scripts
const pageScripts = {
  login: () => import("./components/login.js"),
  chat: () => import("./components/chat.js"),
  dashboard: () => import("./components/dashboard.js"),
  payment: () => import("./components/payment.js"),
  apiToken: () => import("./components/apiToken.js"),
  transactions: () => import("./components/transactions.js"),
};

// Initialisation
document.addEventListener("DOMContentLoaded", async () => {
  renderHeader(loadPage);
  renderFooter();
  await loadPage("chat"); // page par défaut
});
