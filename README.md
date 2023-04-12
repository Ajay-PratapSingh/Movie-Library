<h1 align="center">React Movie-Library</h1>
 
 <p align="center"><br/>
  <a href="https://ajays-movie-library.netlify.app/"> DEMO
  </a>
 </p>


<h4>This project is a movie browser, using data from the Movie DB (TMDB) API, that allows the user to browse through a list of top rated movies.<br/>

The application includes the following features:<br/>

Display a list of top rated movies<br/>
Movie detail view which includes a poster image, a descriptive overview and cast.<br/>
Adding movies to a Favourite list</h4>


<h4>Skills and Tools Used: </h4>

<p align="left">
	<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/html5.png" alt=html5 width="60" height="60"/> 
	<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/css3.png" alt=css3 width="60" height="60"/> 
	
 <img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/js.png" alt=javascript width="60" height="60"/>

 <img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/npm.png" alt=npm width="60" height="60"/>
 <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
 <img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/node.png" alt=nodejs width="60" height="60"/>
 <img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/react.png" alt=react width="60" height="60"/> 
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/redux.png" alt=redux width="60" height="60"/> 
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/git.png" alt=git width="60" height="60"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/github.png" alt=github width="60" height="60"/>
<img style="margin: auto;" src="https://yt3.ggpht.com/ytc/AAUvwni6auGZNOFo5PfYQUwW4mLmCMRJ1sHXqApbh_fwYw=s900-c-k-c0x00ffffff-no-rj" alt=firebase width="60" height="60"/>
<img style="margin: auto;" src="https://opencollective-production.s3.us-west-1.amazonaws.com/ff0a6e30-eab3-11e9-a22e-83df461207f7.png" alt=netlify width="60" height="60"/>
</p>


## Installation
[Node.js](http://nodejs.org/download/) is required to run this application on your local machine. 

Install and run the app using the following steps: 

Clone the repository
```
git clone https://github.com/paufar/movie-library.git
```

Navigate to the repository
```
cd movie-library
```

Install the dependencies
```
npm install
```

Run the application in development mode
```
npm start
```

App will be served on and can be viewed at [https://localhost:3000](https://localhost:3000)

## Development
This application was built using ES6, React, Redux for application state and the [create-react-app](https://github.com/facebook/create-react-app) tool as a boilerplate.

All source code can be found in the *src/* directory which is then organized in the following structure: 
* **Containers** - Holds the smart components that have a direct connection/ are affected by the redux state.
* **Components**  - Holds all the other components that make up the app but have no direct connection with the state. Inludes both functional components and class components for components with internal, non-critical and UI state.
* **Actions** - Contains the methods used for fetching data from TMDB API and updating the Redux state. The project is using Redux promise middleware to handle asynchronous operations like fetching  data to manipulate actions before they reach the reducer.
* **Reducers** - Contains the root reducer which is made up from other separate reducers. Each individual state has a reducer with it's own specific operation/s.
* **Styles** - Contains individual component styles, variables, and shared styles. 

The reason behind this structure was to facilitate the production of reusable components.

## Notes
* SCSS has been added to the CRA project using [these instructions.](https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9)
* Styling was inspired from Netflix, Movie box and different projects on Dribbble.
* App should be responsive on desktop, tablet and mobile (minimum width 320px)
* The cast list in the detailed view has been limited to 7 actors for the scope of this project. 

##### Browser support 

App has been tested to be *responsive and functional* on: 
* Chrome 69+
* Firefox 62+
* Safari 11+ 
* IE 8+


###### Future improvements 
* Implement sliders to navigate through movie lists
* Include navigation arrows to switch between movies when viewing the details modal
* Make use of a slider to display all the cast in the movie
* Actor thumbnail to link to Actor profile on another website
* Include similar movies in the detailed view
* Autocomplete keyboard navigation
* Better cast state management - Clearing cast list to avoid displaying previous cast before the new cast data has loaded
* Lazy loading data or include a full page loader
