# Twitter API
### By Alex Coady

## Installation

I tried to keep this project as simple as possible, the only build tools included (grunt) are to compile the template files for the application.

1. Clone this repo
2. Add site to XAMPP/MAMP/ other local php stack
3. Open site and enter screen names to interact

## Making changes
If you change the template files, they will need to be recompiled

Run `grunt jst` and reload the project in your browser

## View online
I put a working version online, check it out by [clicking here](http://burberry.coady.me/ "Code test")

## Project scope and functionality
You can search for a user from the splash page, or click on parsed links in the current user's tweets. Most URLs are also parsed and can be clicked (opens in new tab).

Note: Only links and @mentions parsed by twitter will be parsed on this application; that means occasionally an @mention or http://link will appear just as text.

## TODOS
This is only a simple project, as such there are lots of todos. Some of them are as follow:
- Add user validation to splash form
- Parse ALL @mentions and http://links
- Add pagination / infinite scroll to user page
- Add extra details to tweets (date, time, location etc)