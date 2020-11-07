---
date: 2020-10-10
title: 'Tips for planning your next SharePoint Migration Project'
tags: ['SharePoint', 'Migration', 'Planning']
published: true
canonical_url: false
cover_image: ./images/MigrationPlanning/Main.jpg
linkedin_image: ./images/MigrationPlanning/Main.jpg
description: 'Access the data inside your O365 securely even your application is outside O365.'
---

_Note: This article is not about what tool or product you should use. This is just the lesson I learned after handling 3 different migration project in the past 12 years in SharePoint._

For me I think the most important part of SharePoint migration is not middle or the end of the project but at the start. The Planning phase will dictate what will be the outcome of your migration project(if its a failure or success). I think not investing enough time in planning is a recipe for failure.

Here are some steps/exercise you need to go through during the planning stage.

- Scope
- Inventory / Documentation
- Identification of Velocity
- Creation of Timeline

##Scope

![Scope](./images/MigrationPlanning/0.jpg)

Scope is where you start exploring what are things your migrating. Learn and feel how big project you'll be tackling. In my previous project we tried to use paid tools to scope out how big the client farm is unfortunately the tool we paid for didn't give us enough information so I ended up creating a bunch of PowerShell the helped me answer the following important question:

- How many SharePoint to be migrated?(Sometimes you need to migrate different version of SharePoint that they still maintain that you need to move to target SharePoint)

- How big the data of the client is?(How many Terabytes)

- What is the growth of data? Maybe they have some weekly backup you can compare how fast that their site collection grows.

- How many site collection in the farm?

- In each site collection how many subsites under each site collection?

- Who are the owners and the site collection in each site collection

- How many custom solution are installed in the Farm?(Expect there would be Farm solution that you need to recreate that is compatible with SharePoint Online)

- Does the client uses BCS or connected to any external data?

- What are the top 10 biggest site collections

- What are the top 10 most active site collection

##Inventory

![Inventory](./images/MigrationPlanning/2.jpg)

Inventory is the step of documenting what you learned during the previous exercise. Aside from know their farm or site collection information you also need to communicate with your client regarding who is the owner or contact person of each site collection/subsite, if there is any site collection that wont be migrated due to inactivity(so that you wont waste time migrating a site collection that would be decommission in the near future). You can create an excel file of list of site collection/subsite and their respective contact person because this is really important.

You also need to ask the client if they have any migration window that they preferred(This could be little technical for them, you might want to reach with their System Admin guy or Network Guy), you need to ask this because migrating Terabytes of Data is resource extensive and you don't want to start your migration and share bandwidth with some schedule task or something. This might also add constrain to their business process and can affect the clients business.

##Identification of Velocity

![Velocity](./images/MigrationPlanning/3.jpg)

Identification of Velocity is really important, you need to atleast identify on how much time would it to migrate X amount of Data during migration. Doing multiple test migration is also recommended so that you can identify the Average the Velocity. Once you identify your velocity you'll have a more accurate guess how much time you need to migrate the whole farm.

##Creation of Timeline

![Timeline](./images/MigrationPlanning/4.jpg)

Once your identify your Velocity and the size of the SharePoint Farm/site collection/subsite it would be easier for your to plot the date of the start and end date when site collection/subsite would be migrated. For me I prefer migrating one site collection at a time so that after migration I can communicate with the Owner / Contact Person of the site collection that the new site collection is ready and can already be used. I think that most efficient way of migrating SharePoint with less impact to the business and client.
