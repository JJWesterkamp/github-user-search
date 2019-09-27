# github-user-search

It's just me fiddling with
- Vue
- Node / Express
- memory-cache
- Github API

## Install & run
```shell script
git clone <this repo>
cd github-user-search
npm install
npm start
```

This should spawn the Node server, and the Vue dev-server + load the Vue app in the browser.

## `/src`
This is the client source folder: the Vue application that presents the search interface.

## `/server`
This is a tiny Express server that connects with the Github API. It performs the search
and user queries, and also has a minimal caching layer using [`memory-cache`][cache].

[cache]: https://www.npmjs.com/package/memory-cache
