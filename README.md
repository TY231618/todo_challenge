# Makers Academy Weekend Challenge: Todo List

The task is to build a Todo list as a mini front-end application.  The main technologies used will be JavaScript, Angular, CSS and HTMl.  I will be using TDD to drive the production of the app.  

Testing frameworks will include Karma for back-end and Protractor for front-end and user experience.

Here are the core user stories:
================

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

# Screen Shot

![myimage-alt-tag](/Users/TY/Desktop/todo-screenshot.png)

Setup
========

* Clone this repo and change into it with ``` cd todo_challenge```.
* If you don't already have them, install node and bower with ```$ brew install node``` and then ```$ npm install bower```.
* Install package dependencies by with ```$ npm install``` and ```$ bower install```.

Usage
========

* Launch the app within your browser with ```$ open index.html```.
* To add a task, simply fill in the box and hit the ```Add Todo``` button.
* To mark a task as done just click the checkbox.
* You can remove completed todos with the ```Remove Completed Todo```
* If you want to view just the active, completed or all todos you can use the buttons directly above the list.
* To permanently remove all todos, just use the ```Clear List``` button at the bottom.

Tests
=============

* To run the Karma tests for the Angular controller, you will need to have the Karma CLI installed, ```$ npm install -g karma-cli```.
* The tests can now be run with ```$ karma start spec/karma.conf.js```.
* When finished just use ```ctrl + c``` to exit.
* The Protractor tests require that you have the Java Development Kit installed. * You can check if you have it with ```$ java -version```. If you don't, you can get it from here.
* Protractor will also need to be installed globally with ```$ npm install -g protractor```. This will also install webdriver-manager.
* webdriver-manager will need to be updated to make sure it has the correct binaries to get an instance of Selenium Server running (what we'll be using for the tests). Do this with ```webdriver-manager update```.
* Now launch it with ```webdriver-manager start```.
* Now the app will need serving, do so with ```http-server```.
* Finally run the tests with ```$ protractor test/e2e/conf.js```.
