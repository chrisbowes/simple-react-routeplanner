This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

This application creates a simple route planner using ReactJS and Leaflet Maps API.

It uses the geocation API to query the users approximate location in order to initialise the map and zoom in to a start point.
If the user does not grant access to their location it will default the map initialisation to a full globe view. It uses the togpx library to convert GeoJson into a formatted downloadable GPX file. The exported GPX file has been tested at https://www.gpsvisualizer.com/ to verify that it can be shared with other applications. 

## Browser Support

The applicaiton has been tested in Chrome and Safari for desktop. It is NOT optimised for mobile use at this point in time as the drag and drop functionality on the list uses the html 5 draggable api which is not supported on mobile devices.

## Packages

The app does not rely on any external React Components with the exeption of the React FontAwesome package for icons. 

## Available Scripts

### `npm install`

Installs dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


