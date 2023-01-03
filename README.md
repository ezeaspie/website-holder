<h1 align="center">
  <a href="https://www.ezequielespinoza.com">EzequielEspinoza.com</a>
</h1>
<h2 align="center">
  A creative archive
</h2>

A codebase for my personal website, which includes a blog, a reader for my comics, a gallery for showcasing my art, and a wiki for in-depth information on my _Heroine Rises_ comic series.

# 🖥️ Website Features

## 📖 Comic Reader

## 🖼️ Gallery

## ✍️ Blog

## 📚 Wiki


# 🗃️ Managing the Site

## 📷 Adding images

1. Images MUST be in jpg format.
2. Images that are for blog posts:
  - Must be 16:9 aspect ratio.
  - Should not exceed 500kb in size.
3. Images that are for thumbnails:
  - Must be no larger than 1000x1000

## 📙 Adding a Comic Chapter

Comic Chapters are stored inside of the *static* folder. There are folders for each comic category:

0. _Heroine Rises_
1. _One Shots_
2. _FireStarter_

Within each folder are subfolders that indicate that series' specific chapter.

To add a new chapter, a new folder must be created with the name (x+1), where x = the number of the most recent chapter folder.

From there, the folder must contain JPG images of the pages that are 1200px in width. These images must then be numbered starting from 0. 0 must be the cover page. 

Finally, inside the *comicData.json* file, add a new object to the list with the following information:
- comicId: _number id of the comic (ex. Heroine Rises = 0, Firestarter = 2)_
- chapter: _number of the chapter_
- pages: _number of total pages_
- title: _title of the chapter_
- description: _a brief synopsis of the chapter content_

## ⚙️ How it Works

The website is a static site, built using the Gatsby framework. Programming and Rendering of the pages are managed by React.

The comics are stored locally, inside the 'static' folder all comic pages are JPGs.

Contentful is the CMS the site uses to manage Blog posts and Gallery items. Items are retrieved using GraphQL.

Website is hosted on Netlify.
