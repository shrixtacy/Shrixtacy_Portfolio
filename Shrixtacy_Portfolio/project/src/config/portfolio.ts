import { 
  LucideIcon, 
  Code2, 
  Palette, 
  BarChart2, 
  Video,
  Image,
  Share2,
  GitBranch
} from 'lucide-react';

export interface PortfolioConfig {
  title: string;
  subtitle: string; 
  description: string;
  social: {
    icon: LucideIcon;
    url: string;
  }[];
  skills: {
    icon: LucideIcon;
    title: string;
    description: string;
    technologies: string[];
  }[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  title: "Shrixtacy",
  subtitle: "Frontend Developer & Digital Creative",
  description: "A versatile professional combining development expertise with creative design and data analysis skills",
  social: [
    {
      icon: GitBranch,
      url: "https://github.com/shrixtacy"
    }
  ],
  skills: [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive and dynamic web applications",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user experiences",
      technologies: ["Figma", "UI/UX Design", "Web Design", "Graphic Design"]
    },
    {
      icon: BarChart2,
      title: "Data Analysis",
      description: "Transforming data into actionable insights",
      technologies: ["Tableau", "Power BI", "R", "Python", "Spreadsheets"]
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Creating engaging video content",
      technologies: ["CapCut", "VN", "Alight Motion", "After Effects"]
    },
    {
      icon: Image,
      title: "Photo Editing",
      description: "Professional photo enhancement and manipulation",
      technologies: ["Photoroom", "Lightroom"]
    },
    {
      icon: Share2,
      title: "Digital Marketing",
      description: "Strategic digital presence management",
      technologies: ["Digital Marketing", "Social Media Management", "Trends Analysis"]
    }
  ],
  contact: {
    email: "shriyanshdash12@gmail.com",
    phone: "+91 8260542544",
    location: "Bhubaneswar, Odisha"
  }
};