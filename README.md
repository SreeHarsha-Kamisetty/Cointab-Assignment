# Project Overview
 The aim of this project is to display users and add them to database and if they are already present in the database - display posts for particular users. Save the user posts and generate and excel file containing all the user's posts.

## Deployed Links 
- Backend : https://cointab-assignment-uujp.onrender.com
- Frontend : https://cointab-se-assignment.netlify.app

## Technologies used:
- Nodejs
- Expressjs
- HTML
- CSS
- Javascript


## npm packages used:
- express
- cors
- dotenv
- exceljs
- sequelize
- mysql2
- axios

## Directory Structure
```
|-- README.md
|-- backend
|   |-- db.js
|   |-- index.js
|   |-- models
|   |   |-- posts.model.js
|   |   `-- users.model.js
|   |-- package-lock.json
|   |-- package.json
|   `-- routes
|       |-- posts.routes.js
|       `-- users.routes.js
`-- frontend
    |-- index.html
    |-- post.html
    |-- scripts
    |   |-- post.js
    |   `-- script.js
    `-- styles
        |-- post.css
        `-- styles.css
```

## Features
- Add users to database
- Add user's posts to database
- Generate excel sheet with user's posts
![image](https://github.com/SreeHarsha-Kamisetty/Art-Gallery/assets/146928943/1545302b-ebe8-4e59-8f8e-6a9fab80bf11)
![image](https://github.com/SreeHarsha-Kamisetty/Cointab-Assignment/assets/146928943/756f70d7-d194-4d92-919e-e306b08f8af3)
![image](https://github.com/SreeHarsha-Kamisetty/Cointab-Assignment/assets/146928943/74162159-171a-407f-b059-33ffeb507312)



## API Endpoints:
- GET /users/
  - This endpoint will list out all the users data
- POST /users/
  - This endpoint is used to add new user in database
- GET /posts/
  - This endpoint gives the list of posts for a particular user . We send the userId in query as userId={id}
- POST /posts/
   - This endpoint is used to store all the posts of a user
 - GET /posts/download/:userId
    - This endpoint is used to download all the posts of a user in an excel sheet


### Video walkthrough
https://github.com/SreeHarsha-Kamisetty/Cointab-Assignment/assets/146928943/d8ae3195-3139-4894-877a-4bc9dafe12d4

