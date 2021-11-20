---
date: 2021-03-14
title: 'PowerApps Test Automation'
tags: ['O365', 'SharePoint Online', 'Power Apps', 'Test Automation']
published: true
cover_image: ./images/PowerAppTextAutomates/PowerAppTestAutomates.jpg
linkedin_image: ./images/PowerAppTextAutomates/PowerAppTestAutomates.jpg
canonical_url: false
description: 'Implementation of Test Automation in PowerApps'
---

The demo shows how to utilize the Test automation feature of PowerApps to make sure that our Apps are working as expected.

First, let’s create a Blank Canvas App

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/0.jpg)

Then name our App “Test Automate”

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/1.jpg)

Once the App is built, we will insert two Text Input and two labels on our Canvas

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/2.jpg)

For each Text Input let's remove the Default valu

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/3.jpg)

We will add another “Label” at the bottom and we will call it “LabelSum”, let's also get the sum of both TextInput1 and TextInput2 and we are going to display it on text( we also make the font bigger as well)

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/4.jpg)

Let us now Save our change then open the Test Studio by click on Advanced Tools then click on “Open tests”

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/5.jpg)

This will open the “Test Studio” in a new tab.

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/6.jpg)

Lets now record and try writing Test Cases by click on the Record button

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/7.jpg)

Try adding a value in “TextInput1” and also “Textinput2”, you will notice that it records on the left that each step that we did. Click on “Done”

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/8.jpg)

You will redirect to the “Test Studio” with the Test Case that is filled up through our record.

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/9.jpg)

We will now add a new step called “Assert” Assert checks and validates if a given condition returns true. We can do that by click on the last step of our test case then clicking on “Insert step below” then selecting “Assert”

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/10.jpg)

It should add a new step for Assert

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/11.jpg)

Assert can accept 2 arguments. The First Arguments is the condition that we wanted to check and the Second Arguments accepts a string that will be displayed if the first Arguments is not true

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/12.jpg)

We will now Publish our changes and click on the "Play" button

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/13.jpg)

Since the condition we set in our set returns true, our error message didn’t show up. Now let us change the value and make sure the assert will encounter an error

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/14.jpg)

Now Assert encountered an error because we are trying to find the text “3” to our LabelSum

![Creating a List named "Test Site List Only"](./images/PowerAppTextAutomates/15.jpg)

This is a pretty awesome feature to make sure that the app we built is working perfectly through testing. Note that this feature is still on the "Experimental" stage, so I don't suggest using it on your production projects
