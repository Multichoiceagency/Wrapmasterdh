export function cleanText(value: any, fallback = "Geen informatie beschikbaar"): string {
    if (!value) return fallback;
    if (typeof value === "string") return value;
    if (typeof value === "object" && value.rendered) return value.rendered.replace(/(<([^>]+)>)/gi, ""); // HTML strippen
    return JSON.stringify(value); // Zet object om naar string
  }
  
  export function getImageUrl(value: any, fallback = "/placeholder.jpg"): string {
    return typeof value === "string" ? value : fallback;
  }
  
  export function cleanSeoData(value: any, fallback = ""): string {
    return typeof value === "string" ? value : fallback;
  }
  