---
date: 2021-05-08
title: 'OCR - Extract text from Image file then upload it to SharePoint using AI'
tags: ['O365', 'SharePoint Online', 'Power Automate', 'AI', 'artificial intelligence']
published: true
cover_image: ./images/OCR/frontImage.jpg
linkedin_image: ./images/OCR/frontImage.jpg
canonical_url: false
description: 'Using AI capability of O365 to extract information from images files sent to a mailbox and uploading it to SharePoint'
---

This tutorial shows on how to use PowerAutomate to get an image/scan file to a shared mailbox, extract necessary information inside the image file then upload all information to SharePoint. I believe this will help business remove their manual process of encoding hard coded information to SharePoint.

###Requirements

Before we can start we need the following:

- PowerAutomate - Access to "AI Builder" actions in Power Automate(O365 will give you 30days trial to try it out).  
- A service account which has access to a O365 Shared Mailbox.


###Ok Lets build our Library first

- First let start creating a Document Library(Name: ReceiptLibrary) in our target site, and add a single line column and name it "ControlIDColumn"

![Receipt Library](./images/OCR/1.JPG)

###Building our AI Model

1. Let move to Power Automate site and lets build our AI Model.

1. Under the AI Builder category, lets select "Build" then select "Form Processing"

![Building our AI](./images/OCR/5.JPG)

3. Give a name to our AI, I name it "ReceiptModel" so I know I will use it for our receipts. Hit Create

![Naming our AI](./images/OCR/6.JPG)

4. Enter in the "Field Name" for the information we wanted to extract, for our example we will extract the Custom ID]

![Naming our AI](./images/OCR/7.JPG)

5. Now once we hit next it will ask us to create a Collection then upload (atleast) 5 sample of document we want to get data with. Note that sample document I have upload is a JPG image.

![Sample Documents](./images/OCR/Receipt1-1.jpg)

6. Next step is we need to teach the AI on where from the document we will extract the "Customer ID" from the 5 documents we have uploaded

![Teaching our AI Model where to get the Customer ID](./images/OCR/8.JPG)

7. Hit Next then "Train"

![Summary Page](./images/OCR/9.JPG)

###Build our Power Automate

1. Let move to Power Automate site and lets create a "Automated Cloud Flow"


![Power Automate](./images/OCR/2.JPG)

2. For its trigger we will use the "When a new email arrives in a shared mailbox(V2)" trigger, then hit create


![Selecting "When a new email arrives in a shared mailbox(V2)" trigger](./images/OCR/3.JPG)

Note: You need to make sure that "Only with Attachments" and "Include Attachments" is set to Yes 

![Power Automate](./images/OCR/15.JPG)

If you didnt set it to yes, you will encounter the error below
```

{"operationStatus":"Error","error":{"type":"Error","code":"InvalidPredictionInput","message":"The base 64 binary content is missing for input single","properties":{"BackendErrorCode":"InvalidInferenceInput","DependencyHttpStatusCode":"400"},"innerErrors":[{"scope":"Record","target":"single","code":"InvalidRecord","type":"Error","properties":{"MlIssueCode":"InvalidRecord","MlIssueTarget":"single"}}]}}

```



3. Enter in the email address of the shared mailbox you want to use 

![Selecting my shared mailbox](./images/OCR/4.jpg)

4. Once the trigger is added, we will now add an action called "Process and save information from forms" to get the content we need from the attached files of the email we received.

![Extracting the Custom ID from Email Attachment](./images/OCR/10.JPG)

5. Once we extract we will need upload it to SharePoint along with the Control ID from the attached file. First lets add an action that will upload the attached file to SharePoint, we can do that by adding the "Create file" action

![Extracting the Custom ID from Email Attachment](./images/OCR/11.JPG)


6. After uploading, we will now fill up the "CustomerIDColumn" of the file we upload using the value we extract from our image. We will add the "Update file properties" and the "Custom ID value" property to fill up our target column

![Extracting the Custom ID from Email Attachment](./images/OCR/12.JPG)

```cmd
Id: @{outputs('Create_file')?['body/ItemId']}
CustomerIDColumn: @{outputs('Process_and_save_information_from_forms')?['body/responsev2/predictionOutput/labels/Custom_07396f100afdf55ca21cf1fff1e0ed2ac/value']}
```

7. Save our changes and time for testing

![Extracting the Custom ID from Email Attachment](./images/OCR/13.JPG)

8. In my email I attached the image file below

![Extracting the Custom ID from Email Attachment](./images/OCR/Receipt5-1.jpg)


9. After few seconds, the file that I attached is now uploaded to our Document Library with the CustomIDColumn filled up

![Extracting the Custom ID from Email Attachment](./images/OCR/14.JPG)


###Things we can add to improve this process

- We can extract all the information we need so that there is no longer a need to manually input data to SharePoint
- Once an email is process we can move it out from the "Inbox" and to a "Processed" folder so we wont clog down the Inbox folder, and if there is an error as well we can move the email to a "Error" folder inside the Shared Mailbox.
- We can also extract as well the "Custom ID confidence score" from our "Process and save information from forms" action and then save it to the meta data of the file, so that we know how accurate the data we got from our Workflow