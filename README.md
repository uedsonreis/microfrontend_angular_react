# Microfrontend example

## About
This is an example of running a React web app into an Angular web app. It uses **Module Federation** and **Webpack** to integrate the apps.

## Install Dependencies
After cloning (or downloading) this project, you should install the npm dependencies inside both web apps (mf_react and angular_app).
```bash
$ cd mf_react
$ npm install
$ cd ..
$ cd angular_app
$ npm install
```

## Run the apps
To start the React web app run the commands below inside the mf_react folder:
```bash
$ cd mf_react
$ npm run build
$ npm start
```

To start the Angular web app run the commands below inside the angular_app folder:
```bash
$ cd angular_app
$ npm start
```

## Web Apps Running
To access the React app, open http://localhost:3000 in your browser.
To access the Angular app, open http://localhost:4200 in your browser.

To see the React app inside the Angular app, open http://localhost:4200/react in your browser.
