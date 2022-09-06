# Notes of Tutorial - [YT Playlist](https://www.youtube.com/playlist?list=PLD8nQCAhR3tSRwsvzRtogv9MFkEWo5d9c "Imran Sayed - Rest WooCommerce RESTAPI")

1. Install WP
2. Create Next JS App
3. Clear boilerplate from Next

## Video - Part 3
1. ✅ Create Menus inside WP for Header & Footer
2. ✅ Change from General settings the url with the one from next.js (localhost...)

## Video - Part 4
1. ✅ Create an .env file (enviroment variable) with the wp installation url.
2. ✅ Add layout/Header & layout/Footer directories under src dir.
3. ✅ Add the Header/index.js and add the mark up (html/jsx) to create static header.
4. ✅ Remove global boilerplate styles dir and references in pages/index.js
5. ✅ Move Head Next Component to header/index.js
6. ✅ Import and add header/index component to Pages/index.js
7. ✅ Do the same do the Footer (3 - 6)
8. ✅ use getStaticProps on the pages/index.js to fetch data from the wp api

## Video - Part 5
1. ✅ Use the wp api data inside the index component from props
2. ✅ Change the static data inside Header/index to use the fetched data from wp
3. ✅ favicon, site head title, logo image, etc...

## Video - Part 6
1. ✅ Continue adding the menu items from props
2. ✅ Sanitize the content with DOMpurify
3. ✅ Make menu items dynamic
4. ✅ Create utils/constants/endpoints.js and export endpoints used so far as constants
5. ✅ Replace endpoint on pages/index.js with constant for cleaner implementation

## Video - Part 7
1. ✅ Install dependency @svgr/cli --save-dev
2. ✅ Create directories for src/components/icons/svgs/ & add the npm script to package.json
3. ✅ Replace inline svgs with SVG components generated

## Video - Part 8
1. ✅ Create State to handle Mobile visibility state.
2. ✅ Refactor BurgerIcon to change visibility state & Dropdown to use that state.
3. ✅ Past footer props into Footer component and destructure the data
4. ✅ Add Markup of Sidebar One & Two to the Footer component & style

## Video - Part 9
1. ✅ Continue adding markup of footer
2. ✅ Make dynamic Footer Menu, copyright text & social links

## Video - Part 10

Note: Check if I can replace this creating the endpoint from wp custom endpoints

1. ✅ Create API key from WooCommerce Settings
2. ✅ Install WooCommerce REST API - Javascript Library on my NextJS package.json
3. ✅ Create get-products.js inside Next's api & create api endpoint that return products
4. ✅ Add query parameters option to request products per page

## Video - Part 11
1. ✅ Fix the getStaticProps to also  fetch products after Header & Footer
2. ✅ Pass product prop to Products  component
3. ✅ Loop porducts to create grid 

## Video - Part 12
1. ✅ Create the image component inside the components folder
2. ✅ Review image component implementations

## Video - Part 13
1. ✅ Add the image to the product component
2. ✅ Fix 'Invalid src prop' error by:
    - Adding the hostname of the images src to next.config.js

## Video - Part 14
1. ✅ Added price from price_html product data to product component

## Video - Part 15
1. ✅ Fix dangeroulySetHTML Error in the footer
    - Set state of isMounted with initial state to false
    - Set useEffect to change isMounted to true as soon as the component renders
    - Render the 2 widgets causing the error if isMounted is true

## Video - Part 16
1. ✅ Check the endpoints for the cart functionality that the  Headless CMS plugin provides

## Video - Part 17
1. ✅ Move product markup to product component file & replace it on products/index
2. ✅ Create add-to-cart component in component/cart
3. ✅ Add button markup inside add-to-cart component
4. ✅ Create utils/cart folder and add index.js & add the addToCart function...

## Video - Part 18
Note: The video is the same as part 17.

## Video - Part 19
1. ✅ Add functions for set & get localStorage - utils/cart/session.js
2. ✅ Add function to set header for the request - utils/cart/api.js

## Video - Part 20
1. ✅ Review code
Note: Fix mixed content adding an exception on Firefox

## Video - Part 21
1. ✅ Add padding to container class of tailwind inside tailwind.config.js

## Video - Part 22
1. Create component/context dir
2. Create component AppProvider inside index.js @ previous directory

## Video - Part 23
1. Move Header & Footer to Layout component and this will render childrens
2. Change pages/index.js Header & Footer to Layout component
3. Wrap layout component with the AppProvider
4. Change Add to Cart component to use the context & get cart & setCart from it
5. Create state (useState) for isLoading & isAddedToCart 
6. Pass this states & setCart function as prop to Cart Function on utils folder

## Video - Part 24