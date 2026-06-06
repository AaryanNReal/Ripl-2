import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

import { Project } from "@/types/project";

export interface Category {
  id: string;
  name: string;
  tagline: string;
  image: string;
  order : number;
}

export const getProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(
    collection(db, "projects")
  );

  return snapshot.docs.map((doc) => ({
    ...doc.data(),
  })) as Project[];
};

export const getCategories = async (): Promise<Category[]> => {
  const snapshot = await getDocs(
    collection(db, "categories")
  );

  const categories = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Category[];

  return categories.sort(
    (a, b) => a.order - b.order
  );
};