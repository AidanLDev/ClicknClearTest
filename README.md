# ClicknClearTest

To run the project you need to install node module dependancies in both the frontend and api directories
\$ cd .\frontend\ ; npm install ; cd ../api ; npm install

Start the API locally
\$ cd .\api\ ; npm start

Start the Frontend locally
\$ cd .\frontend\ ; npm start

V1 – 16/10/1019

You have been supplied with a file “tracks.json”
The file contains a JSON object with the following structure:

{
“tracks”: [
{
“id”: 1,
“title”: “A Song”,
“artist”: “Famous Singer"
},
{
“id": 2,
“title”: “Another Song”,
“artist”: “Famous Band”
}]
}

Write an application that serves a REST API allowing a client to query the contents of this file, as well as a basic web client to display the data.

The APIs should be as follows:

1. Given a track id return the associated track details.
2. Given an artist name return the details of the associated tracks
   Notes:
   Please write the API using NodeJS, but feel free to use any framework with which you are comfortable, such as Express or Fastify.

Please provide a web client to demonstrate how the API should be called and data should be displayed. It is preferred that you use a modern framework such as ReactJS or Angular for this. Incorporation of a widget toolkit such as Bootstrap or Material UI is encouraged.

You may use any dependencies or libraries you wish. Using TypeScript on one or both portions of this exercise will score you extra credit!

The solution should be simple to build and run. Please commit the exercise to a GIT repository and provide a link to the repository when finished.

Please write the application in a professional style rather than as a toy exercise.

The exercise will be evaluated on:
• Correctness
• Structure
• Performance
