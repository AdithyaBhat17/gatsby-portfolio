## Gatsby Portfolio

A simple portfolio built for a friend using Gatsby  

### Setup

* Fork the repo
* Clone the repo - `git clone https://github.com/<your_username>/gatsby-portfolio.git`
* install the required dependencies - `cd gatsby-portfolio && npm install`
* install gatsby-cli - `npm install -g gatsby-cli`
* start the gatsby development server - `gatsby develop`

These steps will help start the gatsby development server at http://localhost:8000 and the graphiql playground server at http://localhost:8000/___graphql  

### Adding articles to your blog

* Create a folder for your article in the `src/pages/` folder - `mkdir article-title`
* Create a markdown file inside the newly created folder - `src/pages/article-title/article-title.md`
* Place any images required for the article in the `article-title` folder
* Add the following contents in the markdown file and save it -
    ```
    ---
    path: "/blog/article-title"
    date: yyyy-mm-dd
    title: "Article title"
    ---
  
    <your content for the article with normal markdown syntax>
    ```
 * now restart your gatsby server - `gatsby develop`
 * your blog is now live :tada:
 
 ### Deployment steps
 
 * Generate static build files - `gatsby build` (this generates static files at `public/`)
 * Deploy on surge - `surge public/ https://<your_domain_name>.surge.sh
 
 Happy coding :sparkles:
