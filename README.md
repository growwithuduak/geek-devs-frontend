# geek-devs-frontend

Repository for Geek Devs frontend code


# STORYBOOK SETUP

## DESCRIPTION
- To setup a component library(storybook) for our project 
- This project involves installing and running storybook locally


## HOW TO GAIN ACCESS TO THE STORYBOOK-SETUP REMOTE BRANCH

clone the root repository 
- `git clone https://github.com/growwithuduak/geek-devs-frontend.git`

##### Note: Ensure you are on the main branch and that you have made commits to your previous projects before checking out to a new branch.

Fetch all the remote branches from the repository
- `git fetch origin`

Check the list of available branches
`git branch -a`

Create a copy of the remote branch to your local repository
- `git checkout -b storybook-setup origin/feature/storybook-setup`

Open the files using:
`code .` in terminal

Push to the upstream branch (upstream branch is the remote branch which is being tracked by your local branch), using:
- `git push origin HEAD:feature/storybook-setup`


## HOW INSTALL THE PROJECT

Install all the package dependencies
- `npm install`

## HOW RUN IT LOCALLY

Run the project on your local machine:
- `npm run start-storybook`
