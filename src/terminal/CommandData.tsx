import React from "react";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import { contactItems } from "../data/userData";
import { skills } from "../data/userData";
import { projectData } from "../data/userData";

export const commandData: Record<string, React.ReactNode> = {
  whoami: (
    <>
      <div>Welcome, Guest 👋</div>
      <span>
        Try typing <strong>help</strong> to get list of commands...
      </span>
    </>
  ),
  about: (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-4">
        <img
          src="/assets/profilephoto.jpeg"
          alt="Sanmith S"
          className="h-32 w-30 rounded-full border border-green-500"
        />
        <div>
          <div className="text-lg font-bold">Hi! I'm Sanmith S</div>
          <div className="text-sm text-green-300">
            Video Encoding Specialist & Developer
          </div>
          <div className="text-sm flex flex-col gap-2 text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
            <span className="font-semibold flex flex-row items-center gap-1">
              <Github size={20} />
              <a
                href="https://github.com/iamsanmith"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary font-bold"
              >
                iamsanmith
              </a>
            </span>
            <span className="font-semibold flex flex-row items-center gap-1">
              <Linkedin size={20} />
              <a
                href="https://www.linkedin.com/in/iamsanmith/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-primary font-bold"
              >
                Sanmith S
              </a>
            </span>
          </div>
        </div>{" "}
      </div>
      <div>
        A self-driven individual passionate about solving real-world problems through technology and innovation. I enjoy creating meaningful projects that make everyday tasks simpler and more efficient.
      </div>
    </div>
  ),
  projects: (
    <>
      <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="rounded-xl p-6 bg-white/30 dark:bg-white/5 shadow-xs border border-gray-400 dark:border-gray-600 text-left transition">
          <h3 className="text-xl font-semibold mb-2">MetaSort</h3>
          <p className="text-sm text-muted-foreground mb-4">
            📸 Smart Google Photos organizer! Clean files, extract dates, embed metadata, sort by date, generate reports. Supports 50+ formats including RAW. Built in Rust.
          </p>
          <div className="flex flex-wrap gap-2 text-xs mb-4">
            <span className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80">
              Rust
            </span>
            <span className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80">
              CLI
            </span>
            <span className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80">
              Metadata
            </span>
            <span className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80">
              Google Photos
            </span>
            <span className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80">
              Automation
            </span>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/iamsanmith/MetaSort"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:underline"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  ),
  skills: (
    <>
      🚀 <span className="font-semibold">Skills:</span>
      <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-accent">
        {skills.map((skill, index) => (
          <li key={skill.name || index} className="flex items-center gap-2">
            <span className="font-medium">{typeof skill === 'string' ? skill : skill.name}</span>
          </li>
        ))}
      </ul>
    </>
  ),
  contact: (
    <>
      {contactItems.map(({ icon: Icon, label, value, href, color }, index) => (
        <div key={index} className="flex items-center gap-2">
          <Icon className={color} />
          <span>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            ) : (
              value
            )}
          </span>
        </div>
      ))}
    </>
  ),
  help: (
    <>
      🧠 Available commands:
      <ul className="list-disc ml-4">
        <li>whoami</li>
        <li>about</li>
        <li>themes</li>
        <li>projects</li>
        <li>skills</li>
        <li>contact</li>
        <li>glow on/off</li>
        <li>gui on</li>
        <li>clear</li>
        <li>help</li>
      </ul>
    </>
  ),
};
