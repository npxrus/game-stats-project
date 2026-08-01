import { HealthResponse } from "./types";

const API_URL = process.env.API_URL || "http://localhost:8080";

async function fetchHealth(): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/health`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json() as HealthResponse;
    console.log("API status: ", data.status)
  } catch (error) {
    console.error("Failed to check API health: ", error);
    process.exit(1);
  }
}

(async () => {
  await fetchHealth();
})();