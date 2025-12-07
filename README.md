🌐 Codebase Navigator AI — Landing Page

A high-performance marketing site showcasing the intelligence and capabilities of Codebase Navigator AI.

🚀 Overview

This repository contains the official landing page for Codebase Navigator AI — an AI-powered system designed to help developers understand complex codebases in seconds. The landing page introduces the product’s vision, core features, architecture, and provides a direct path to the interactive demo.

The site is fully responsive, visually modern, and optimized to communicate the value of the product to developers, teams, and enterprise users.

🧠 What is Codebase Navigator AI?

Codebase Navigator AI is a next-generation code-intelligence assistant that deeply analyzes entire repositories.
Unlike autocomplete tools, it focuses on true understanding, using advanced RAG (Retrieval Augmented Generation), AST-based chunking, and multi-model reasoning.

The system can:

Explain architecture and system behavior

Map dependencies and relationships

Generate documentation

Answer natural-language technical questions

Support onboarding, debugging, refactoring, and legacy modernization

This landing page explains the product and links users to the live demo hosted separately.

🎯 Purpose of This Landing Page

The goal of this site is to:

Present the product clearly and attractively

Position Codebase Navigator AI as a deep code-understanding platform

Explain how the underlying RAG pipeline works

Highlight key features and benefits

Provide a clear call-to-action to try the demo

Serve as the main public-facing page for the project

🖼 Key Sections on the Page
1. Hero Section

A bold statement introducing Codebase Navigator AI, with a “Try Demo” button that redirects users to the deployed demo application.

2. Features Overview

Showcases the core capabilities:

Deep code understanding

AST-powered RAG pipeline

Dependency graphing

Auto-documentation

Natural-language querying

3. RAG Pipeline Diagram

A dedicated section titled “How Codebase Navigator AI Thinks” featuring the system’s RAG architecture, explaining the internal flow:
Retriever → Ranker → Context Builder → LLM → Final Answer.

4. Demo Access

A teaser section that invites users to explore the live demo hosted on Vercel.

5. Pricing Preview

Simple, transparent pricing tiers for individuals, teams, and enterprises.

6. Footer

Minimal, modern footer including project links and basic credits.

🛠 Tech Stack (Landing Page)

Frontend: React / Next.js / Vite (depending on generation output)

Hosting: GitHub Pages

Styling: TailwindCSS / CSS modules

Assets: RAG diagram, feature icons, illustrations

Routing: Client-side navigation for smooth transitions

This repo does not contain backend or AI logic — it is purely a UI marketing layer.

🔗 Demo Application

The interactive demo of Codebase Navigator AI is hosted separately on Vercel.

Demo URL:
https://codebasenavigator.vercel.app/

The CTA buttons on the landing page redirect users to this demo.

🔐 Security Note

This landing page does not contain any backend logic, API keys, or model calls.
All AI-powered features live in the demo repository, which uses:

Secure serverless functions

Environment variables

Protected Gemini API key usage

This separation ensures clean organization and safe deployment.

🧩 Repository Structure
landing-page/
│
├── public/                // images, RAG diagram, assets
├── src/
│   ├── components/        // UI components
│   ├── sections/          // page sections (Hero, Features, etc.)
│   ├── App.jsx / index.js // main entry
│   └── styles/            // global or module CSS
│
├── README.md              // this file
└── package.json

🚀 Deployment

This landing page is deployed via GitHub Pages.

Basic steps:

Build the project:

npm run build


Push build output to gh-pages branch (or using your framework’s auto-deploy setup).

GitHub Pages serves the static site automatically.

The “Try Demo” button links to the external Vercel deployment.

🤝 Contributing

Open to UI improvements, animations, layout refinements, or accessibility enhancements.
Since this is a public marketing page, please avoid adding backend logic or sensitive information.

📬 Contact

For collaboration, questions, or feature suggestions:

GitHub Issues

Email: aamirgheewale142210@gmail.com

LinkedIn: www.linkedin.com/in/aamirgheewale

