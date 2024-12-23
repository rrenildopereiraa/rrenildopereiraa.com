export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Transposer",
    year: 2024,
    description: "An opinionated convertor focused on migrating Tailwind to Yumma CSS.",
    url: "https://transposer.vercel.app/",
  },
  {
    title: "Yumma CSS",
    year: 2022,
    description: "A practical CSS framework with an abbreviated naming convention.",
    url: "https://www.yummacss.com/",
  },
];
