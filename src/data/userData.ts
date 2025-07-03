import {
  Code,
  Server,
  Database,
  Paintbrush,
  Type,
  GitBranch,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Link2Icon,
  Camera,
  FileCode,
  Braces,
  Globe,
  Video
} from "lucide-react";

export const fetchData = [
  { label: "User", value: "sanmith@linux" },
  { label: "OS", value: "macOS Sequoia" },
  { label: "Host", value: "MacBoook Air M1" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "M1" },
];

export const skills = [
  { name: "C", icon: FileCode },
  { name: "C++", icon: FileCode },
  { name: "Python", icon: Code },
  { name: "MySQL", icon: Database },
  { name: "Figma", icon: Paintbrush },
  { name: "Video Encoding", icon: Video },
  { name: "Rust", icon: Braces },
  { name: "Cinematography", icon: Camera },
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Paintbrush },
  { name: "Javascript", icon: FileCode },
];

export const facts = [
  "Self-driven individual",
  "Passionate about tech & innovation",
  "Problem Solver",
  "Video Encoding Expert",
  "Event Management",
  "Cinema enthusiast",
];

export const timeline = [
  { year: "2021–Present", detail: "Freelance Video Encoder" },
];

export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "sanmiths39@gmail.com",
    href: "mailto:sanmiths39@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka",
    href: null,
    color: "text-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/iamsanmith",
    href: "https://github.com/iamsanmith",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/iamsanmith",
    href: "https://www.linkedin.com/in/iamsanmith",
    color: "text-blue-600",
  },
];

export const projectData = [
  {
    name: "MetaSort",
    description: "📸 Smart Google Photos organizer! Clean files, extract dates, embed metadata, sort by date, generate reports. Supports 50+ formats including RAW. Built in Rust.",
    tech: ["Rust", "CLI", "Metadata", "Google Photos", "Automation"],
    github: "https://github.com/iamsanmith/MetaSort",
    live: null,
    category: "CLI",
  },
];
