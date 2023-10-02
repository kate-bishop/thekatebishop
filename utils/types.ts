export type KeyProject = {
  projectName?: string;
  projectRole?: string;
  bulletPoints: string[];
};

export type Experience = {
  companyName: string;
  jobTitle: string;
  location: string;
  dateSpan: string;
  companyDescription: string;
  description: string;
  keyProjects: KeyProject[];
};
