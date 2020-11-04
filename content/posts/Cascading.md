---
date: 2020-10-06
title: 'Creating a cascading dropdown in PowerApps'
tags: ['O365', 'SharePoint Online', 'PowerApps']
published: true
cover_image: ./images/CascadingPowerApps/Main.jpg
canonical_url: false
description: 'Adding a cascading dropdown'
---

Let create first a SharePoint List as our source of choices in our dropdown

![Site Setting to the site](./images/CascadingPowerApps/0.jpg)

On the list(CountryList) that we created lets add a column and lets named it Continent(Single line of text)

![Site Setting to the site](./images/CascadingPowerApps/1.jpg)

Lets try to populate it with different sets of data

![Site Setting to the site](./images/CascadingPowerApps/2.jpg)

Now we will create a new list and lets call it our MainList

![Site Setting to the site](./images/CascadingPowerApps/3.jpg)

On the new list we created, that would be our list where we are going to store our user input. Now we will try to customized its form using PowerApps

![Site Setting to the site](./images/CascadingPowerApps/4.jpg)

Lets call our form “CascadingDropdownForm” then press **Create**

![Site Setting to the site](./images/CascadingPowerApps/5.jpg)

The apps shows no data because on our MainList, no item is added yet

![Site Setting to the site](./images/CascadingPowerApps/6.jpg)

Let go to the EditScreen1

![Site Setting to the site](./images/CascadingPowerApps/7.jpg)

Now we will change the "Title" field from Single line of text to "Allowed Values" by click on the

![Site Setting to the site](./images/CascadingPowerApps/8.jpg)

Now we need to unlock it by click on the "Title" dropdown and right click on and click on "unlock"

![Site Setting to the site](./images/CascadingPowerApps/9.jpg)

After that we will a connector in our App. This connector will point to our CountryList. To do that lets click on the “Data” > Connectors > SharePoint

![Site Setting to the site](./images/CascadingPowerApps/10.jpg)

Enter the site url of your site and hit connect

![Site Setting to the site](./images/CascadingPowerApps/11.jpg)

Kindly select our “CountryList” and then press Connect

![Site Setting to the site](./images/CascadingPowerApps/12.jpg)

This should add a Connection under your “In your App” section

![Site Setting to the site](./images/CascadingPowerApps/13.jpg)

Now lets add the first dropdown in our canvas. We can do that by click on Insert > Dropdown. We are going to call it “DropContinent”

To bind our first dropdown to the appropriate data source we can do that by select the dropdown the select the property named “Items” then put “Distinct(CountryList, Continent)”. I use the “Distinct” function so that only unique values will be showing up in our DropContinent

![Site Setting to the site](./images/CascadingPowerApps/14.jpg)

Once it is binded our first value should already be displaying

![Site Setting to the site](./images/CascadingPowerApps/15.jpg)

Now lets do the same thing to our Title Dropdown. But now we will have a different “Items” value to it. We will use the filter function. Select our second drodown select the “Items” property then type in “Filter(CountryList, Continent = DropContinent.Selected.Result)”

![Site Setting to the site](./images/CascadingPowerApps/16.jpg)

Note that it will error out so try click on "Edit in the Formula bar"

![Site Setting to the site](./images/CascadingPowerApps/17.jpg)

We should now update the "Update" property with "DataCardValue13.SelectedText.Value"

![Site Setting to the site](./images/CascadingPowerApps/18.jpg)

Let try it out in the Preview(Press F5). We select “North America” on our first dropdown and only choices that is under “North America” shows up.

![Site Setting to the site](./images/CascadingPowerApps/19.jpg)

Lets now Publish our form and try it out
