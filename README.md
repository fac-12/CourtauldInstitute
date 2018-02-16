# Courtauld Volunteer App

The Courtauld Institute of Art is the world’s leading centre for the study of history and conservation of art and architecture.

For the past year, the Courtauld Institute has relied on volunteers to catalogue and digitize a huge collection of photographs and art for their Courtauld Connects initiative. They are preparing to more than triple the current number of volunteers in order to accelerate the multi-year project.

We built an app to enhance the volunteer experience at the Courtauld Institute of Art.
The prototype can be seen here: https://invis.io/M6FOAXI45BJ

View final product: https://courtauld.herokuapp.com/

## Running our project locally

1. Clone this Repo.
2. `cd` into the CourtauldInstitute folder
3. Run `> npm install` to install all dependencies
4. You can use the heroku database or set up your own.
5. Create a config.env file in the repo folder with your database url in this format:`DATABASE_URL = postgres://[yourusername]:[yourpassword]@localhost:5432/[yourdbname]` or with the heroku url we send in private message
6. Run `> npm run buildDB` to build the test database if using a local database.
7. Run `> npm run dev` Two servers should start up and our browser will automatically load the application.

## User stories

* Volunteers and staffs can see and share up to date information on the digitization project’s progress and upcoming events, etc.

* Volunteers can share their interesting finds with staff and other volunteers

* Volunteers and staff can view a directory of volunteers

* Staffs can add new users and email invitation to access platform is sent to newly added users

* Volunteers and staffs can reset their password.

## Tech Stack

Front end: React, React router, Redux, Redux-form, Styled components

Backend: Google sheets, Express

Database: PostgreSQL

NPM modules: Nodemailer, bcrypt, lodash, pg-promise, reselect, env2, cookie-session, axios, body-parser, concurrently

## First build sprint - what we have done

* Dashboard page

  Navigations to different pages on the website. The dashboard also includes the project progress update.

* Updates feature

  This is the section where staff and volunteer can share update. Updates are split into three different categories- Project, Opportunities and Events/exhibitions. Users can also view by categories.

* Discoveries feature

  This section is for volunteers to share any interesting picture they find when digitizing or cataloguing.

* Directory feature

  This section contains a list of all the Courtauld's Institute's current volunteers. You are also find out more about each person by clicking on their picture/name.

* Add new users

  Only staff members are able to add new users. An email is sent to newly added users with their log in details. Newly added users are able to reset their passwords.

## Our plans for second build sprint

* Refine styling & user interface
* Design layout for web
* Add ability to comment on posts & discoveries
* Add page for detailed progress information and stats with data visualization
* Search in posts and discoveries
* Allow users to change their photograph
* Optimize caching of requests to backend and improve error handling
* Thorough testing
