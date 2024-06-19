export const baseURL =
  import.meta.env.MODE == "development" ? "http://localhost:8080" : "/";

export enum route_names {
  main = "main",
}
