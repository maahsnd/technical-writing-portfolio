---
title: "How I Built This"
description: "A brief overview of the development process for my personal site, which is built with Next.js, deployed on Vercel, and leverages the gray-matter and markdown-to-jsx libraries to convert markdown files to HTML."
---
## How I Built This

*Note: if you're reading this on GitHub, you can view my site (and this doc) at* [nickmaahs.com](https://nickmaahs.com)

This is a Next.js project. In building it, as I was new to Next.js, I utilized the following tutorial to establish the foundation for what I wanted to build: [Build a Static Markdown Blog Site](https://www.youtube.com/watch?v=QIIc5EYSZpw)

I then customized the project to fit my needs, which included the following:

- Extracting and enhancing the getPostContent function to be more broadly useful
- Developing my own style of "post card", inspired by the pages of a book, to display
the cover note that accompanies each of my portfolio pieces
- Building out a 404 page (and associated error handling) to better handle user navigation
- Extensively (but with a minimalist bent) styling the site to better reflect my personal aesthetic.
- Deploying the site to a custom domain using Vercel

## Md to HTML Pipeline

The core of this project is the pipeline that converts markdown files to HTML. This pipeline is built around the gray-matter and markdown-to-jsx libraries. The pipeline is as follows:

1. Extract content from the markdown file using fs and gray-matter.
2. Call the getPostContent function within a try-catch block to handle any potential file read errors (chiefly non-existent or otherwise not found files).
3. Use the markdown-to-jsx library to convert the markdown content to HTML.

Content can be updated by editing the markdown files directly,
pushing those changes to GitHub, then merging them into the main branch. Vercel is connected to the GitHub repository and will automatically deploy the changes to the live site.


