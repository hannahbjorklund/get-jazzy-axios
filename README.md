# Get Jazzy Axios

- Fork or Use Template
- Clone
- `npm install` to get all of the dependencies (just `express` for now)

## Base

- Look at the pattern for the working `/artist` server code & Axios request. 
- Add the server side code to return all the song data when a GET request is made for `/song`. Test this is working with the browser.
- Set up a client Axios request for `/song`, and display the song data on the DOM.
- Add an HTML form for adding a new artist. Make a POST request to the server with artist information.
- Add a server route that appends the artist to the array of artists on the server.

## Stretch

- Add an HTML form for adding a new song. Make a POST request to the server with song information.
- Add a server route that appends the song to the array of songs on the server.
- The `server.js` file is getting a little crowded. Move arrays into a `modules` folder inside of your `server` folder (names like `artist.js` and `song.js` would be good).
- The `/artist` and `/song` requests are working! Add a third array for albums that has `title` and `year` for the release date.
- Add some styling to the page
