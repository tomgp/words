const {fetch} = require('fetch-ponyfill')();
const parser = require('fast-xml-parser');
const entities = require('html-entities').AllHtmlEntities;
const TurndownService = require('turndown');
const slugify = require('slugify');
const path = require('path');
const fs = require('fs');
const turndownService = new TurndownService()

let url = 'https://world.hey.com/tomp/feed.atom';
let outputDir = '../_posts';
let footer = '_This post was originally an [email](https://https://world.hey.com/tomp)_';

fetch(url)
  .then(response => response.text())
  .then(text => parser.parse(text))
  .then(data => data.feed.entry.forEach((entry)=>{
    const html = entities.decode(entry.content);
    const fileName = `${entry.published.split('T')[0]}-${slugify(entry.title)}.md`.toLocaleLowerCase(); 
    const mdWithFrontmatter = 
`---
title: ${entry.title}
date: ${entry.published}
updated: ${entry.updated}
authorName: ${entry.author.name}
authorEmail: ${entry.author.email}

---
${turndownService.turndown(html)}

${footer}`
    fs.writeFileSync(path.join(outputDir,fileName), mdWithFrontmatter);
  }));

