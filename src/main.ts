import "./style.css";
import { services } from "./services.ts";

const app = document.querySelector<HTMLElement>("#app")!;

const grid = document.createElement("div");
grid.className = "grid";

for (const service of services) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = service.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";

  card.innerHTML = `
    <span class="card-icon">${service.icon}</span>
    <span class="card-name">${service.name}</span>
    <span class="card-description">${service.description}</span>
  `;

  grid.appendChild(card);
}

app.appendChild(grid);
