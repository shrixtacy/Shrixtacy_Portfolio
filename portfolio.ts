import { 
  LucideIcon, 
  Code2, 
  Palette, 
  BarChart2, 
  Database, 
  Brain, 
  GitBranch,
  Figma,
  Globe,
  Video,
  Image,
  Share2
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
  projects: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
      demo: string;
      github: string;
    };
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
  projects: [
    {
      title: "Shrixtacy Portfolio",
      description: "My personal portfolio website built with React and Tailwind CSS, featuring a modern design and smooth animations",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        demo: "https://shrixtacy.vercel.app",
        github: "https://github.com/shrixtacy/portfolio"
      }
    },
    {
      title: "Shrixtacy Blog",
      description: "A personal blog built with Next.js and MDX, featuring a clean design and dark mode support",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
      links: {
        demo: "https://blog.shrixtacy.vercel.app",
        github: "https://github.com/shrixtacy/blog"
      }
    },
    {
      title: "Shrixtacy Notes",
      description: "A minimalist note-taking app with markdown support and cloud sync",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Firebase", "Markdown", "TypeScript"],
      links: {
        demo: "https://notes.shrixtacy.vercel.app",
        github: "https://github.com/shrixtacy/notes"
      }
    }
  ],
  contact: {
    email: "shriyanshdash12@gmail.com",
    phone: "+91 8260542544",
    location: "Bhubaneswar, Odisha"
  }
};