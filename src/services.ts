export interface Service {
  name: string;
  url: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { name: "Portainer", url: "https://dock.matejhoz.com", description: "Container management", icon: "🐳" },
  { name: "Gitea", url: "https://gitea.matejhoz.com", description: "Git hosting", icon: "☕" },
];
