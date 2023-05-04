# What is my corporate email?

## Motivation

Let's imagine that a company is offering a new service to other companies.

The new offering to businesses aims to make us a lucrative option for companies to promote learning & developement for their employees. We often reach out to different representatives from businesses to promote the value proposition we offer.

We maintain a database of the contacts we already have in various companies. However, we do not always have the email addresses of the people we should pitch to in these companies. We do have their full names and company domain.

## Developement

This is a full-stack application that maintains a logic to predict the corporate email based on patterns already knew.

So, the frontend takes care of the input data, showing to the user each company domains our backend already know and can send a certain prediction.

Feel free to play on both repos:

[Frontend](frontend/README.md)

[Backend](backend/README.md)

## How it works and Acceptance Criteria

An HTTP micro service with a single end point to derive email addresses for a person, given their full name and company domain. We can assume that all email addresses of one company follow the same format. That is, if we know the full name and email address of one person in the company, we should be able to derive the email addresses of other employees given their full name.

Assuming a sample data set exists in a static JSON file such as the one below:
```json
{
    "Jane Doe": "jdoe@acme.com",
    "Jay Arun": "jayarun@linkedin.com", 
    "David Stein": "davidstein@google.com", 
    "Mat Lee": "matlee@google.com", 
    "Marta Dahl": "mdahl@acme.com", 
    "Vanessa Boom": "vboom@acme.com"
}
```
So, the main task of the application is generating the email addresses of the following contact persons after determining the email format from the sample set.

Input:
```
Nina Simons, "acme.com"
```

Output:
```
nsimons@acme.com
```

On this example, we return the email as first letter last name pattern because "Acme" is an existent company on our data set, so we know which pattern to follow.



## Backlog

As a project that just started (focused ~8h developing it), here is a [backlog board](https://github.com/users/joseliacosta/projects/1/views/1) with the next steps and activities that can be done.

Feel free to also add taks if you had an idea or a feedback!
