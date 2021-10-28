# My Workout
My Workout is a full-stack application that enables users to enter details about their workouts and the vairious exercises they performed during them. My Workout allows you to input two different kinds of exercises: Resistance and Cardio. The user can enter any name they would like for either of the exercise types. For each of the workout types the user inputs information related to the respective exercise type. When a user chooses to input a resistance exercise they are asked for the name, weight(in lbs), number of sets, number of reps, and the duration of the exercise. When a user selects a cardio exercise they are prompted for information relevant to cardio exercises like the name, distance(in miles), and the duration of their cardio. All of the data a user enters about their workouts and exercises are stored in a Mongo Atlas Database. 

Information about the user's current workout is displayed on the main page of the application using aggrogate functions offered by MongoDB. After the user has entered multiple workouts worth of data, they can navigate to the _Dashboard_ page. On the dashboard page the duration and resistance weight data is retrieved from the database and graphed into two graphs. This allows the user to see how their workout duration and intensity changes over time. A consumer will reach their fitness goals more quickly when they track their workout progress, which is the whole idea behind this application. 

![SCREENSHOT OF APPLICATION GOES HERE]()

---

## **Table of contents**

- [My Workout](#my-workout)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Author](#author)
  - [License](#license)
---
## **Installation**
In order to use the application normally there is no installation neccessary. Simply navigate to where it's deployed on Heroku: [https://my-workouts-tracked.herokuapp.com/](https://my-workouts-tracked.herokuapp.com/)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/lukecp5/myWorkout.git
$ cd myWorkout
```

To install and set up the application, run:

```sh
$ npm install
$ npm run seed
```

---

## **Usage**
The simplest way to use this application for it's intended use is to use it in it's deployed state: [myWorkout](https://my-workouts-tracked.herokuapp.com/)

To start MyWorkout locally for development purposes, run:
```sh
npm start
```



---

## **Built With**
* [**MongoDB**](https://www.mongodb.com/) 
* [**Node.js**](https://nodejs.org/en/about/)
*  - [Mongoose](https://www.npmjs.com/package/mongoose) - Database implementation 
*  - [Express](https://www.npmjs.com/package/express) - Web Framework for Node.JS
* [**Visual Studio Code**](https://code.visualstudio.com/)

---

## **Contributing**

---

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

---

## **Author**
**Luke Poirrier**   
LinkedIn: [@luke-poirrier](https://www.linkedin.com/in/luke-poirrier)  
Email: [Luke@LukePoirrier.com](mailto:Luke@LukePoirrier.com)  
Portfolio: [LukePoirrier.com](http://lukepoirrier.com)  

---

## **License**
This application is licensed under the MIT License, you can find the full license information [here](http://github.com/lukecp5/employee-tracker/LICENSE.txt)

---


