# Teachers for future Materialdatenbank

## Idea

The idea behind this project has been to develop a platform for the organisation "Teachers for future"
where they had the possibility to gather all their material, all their information and all the content
they would like to share and evaluate in one place. 
Furthermore, they wished for different quality-of-life features such as filtering, commenting, rating, etc.
All of this has been implemented so that their workflow can be as fluent as possible.

## Functionalities

The functionalities can be separated in two sections.

#### Public part

-   Homepage
    -   A basic introduction and information about the platform
-   Public Search
    -   A search engine with various filter options 
    -   The entries will be shown with title and evaluations
-   Sign Up
    -   Signing up for the private part of the platform
-   Log In
    -   Logging in to the private part of the platform
-   About
    -   Information about the persons responsible for the page
-   Privacy Policy
    -   Information about the privacy policy of the page
-   Detail pages
    -   Information about the material, possibility to contact the creator   
 

#### Private part

-   Profile
    -   Information about the one data, like experience, e-mail address or role
-   Advanced Search
    -   Similar to the public search but the results are now offering more detailed information
-   Add new Ressource
    -   Adding new ressources with a lot of possible information
-   Approve User
    -   Users, which sign up for the page do not have permissions for everything immediately. The persons managing the page are supposed to check if the new user is valid.
-   Approve Material
    -   New material is not automatically part of the database but has to be evaluated and approved.

## Technology

This version has been developed with AngularJS and Firebase.

#### Angular

AngularJS is a powerful front end framework that enables the user to develop in a structured way while
having a lot of features and libraries already at hand.

#### Firebase

Firebase is a mobile app platform with integrated, unified client libraries in various mobile programming languages.
Firebase offers different backend-as-a-service (BaaS) features to help develop high-quality apps with
relatively low effort.

## Launching/Updating the project

If one wishes to test this project locally, it can be called with this command:
`ng serve`
and will be available at:
`http://localhost:4200/`

The project needs to be build before being deployed to firebase. This is taken care of with this command:
`ng build --prod --aot`

After the build, the project can be deployed with this command:
`firebase deploy`

The entry information for the firebase project have to be inserted into the `environment.ts` file

## Dependencies

Firebase needs a few dependencies for everything to work fine.

Nowadays it seems to suffice using this command:
`npm install firebase --save`

Should errors occur, it might be useful to also install these parts:
`npm install -g firebase-tools`
`ng add @angular/fire`

There are a few more apart from firebase like:
`npm i @angular/material`
`npm install emailjs`

However, I do not recall all of them, and it will be quite clear, which ones
are lacking when first starting the application.

