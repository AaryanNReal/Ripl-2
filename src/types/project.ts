export interface Project {
  id: number;
  category: string;

  title: string;
  images: string[];

  description: string;

  client: string;
  location: string;
  architect: string;

  value: string;
  duration: string;
  scope: string;
  area: string;
}