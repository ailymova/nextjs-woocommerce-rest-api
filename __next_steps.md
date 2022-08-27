# Notes of Tutorial - [YT Playlist](https://www.youtube.com/playlist?list=PLD8nQCAhR3tSRwsvzRtogv9MFkEWo5d9c "Imran Sayed - Rest WooCommerce RESTAPI")

1. Install WP
2. Create Next JS App
3.

## Video - Part 3
1. ✅ Create Menus inside WP for Header & Footer
2. ✅ Change from General settings the url with the one from next.js (localhost...)

## Video - Part 4
1. Create an .env file (enviroment variable) with the wp installation url.
2. Add layout/Header & layout/Footer directories under src dir.
3. Add the Header/index.js and add the mark up (html/jsx) to create static header.
4. Remove global boilerplate styles dir and references in pages/index.js
5. Move Head Next Component to header/index.js
6. Import and add header/index component to Pages/index.js
7. Do the same do the Footer (3 - 6)
8. use getStaticProps on the pages/index.js to fetch data from the wp api

## Video - Part 5
1. use the wp api data inside the index component from props
2. change the static data inside Header/index to use the fetched data from wp
3. favicon, site head title, logo image, etc...

## Video - Part 6
1. Continue adding the menu items from props
2. Sanitize the content with DOMpurify
3. Make menu items dynamic
4. Create utils/constants/endpoints.js and export endpoints used so far as constants
5. Replace endpoint on pages/index.js with constant for cleaner implementation

## Video - Part 7
1. Install dependency @svgr/cli --save-dev
2. Create directories for src/components/icons/svgs/ & add the npm script to package.json
3.