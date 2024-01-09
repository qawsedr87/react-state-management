# react-state-management

technical stack: React + TypeScript + Vite

This repository is the practical for the centralized management for properties: context api, react-redux 

## Toggle 

path: /toggle 

- Create a parent component and child component. The parent component has a property
that contains a list of two languages: [“JavaScript”, “Java”]. By default, it displays the first
language, “JavaScript”. This property is sent to the child component.
- The child component renders a button that can be clicked to toggle the view (updates the
parent component). It should toggle from “JavaScript” to “Java”, or vice versa.
1. Do this using props.
2. Do it again using the Context API.

## Different routes

path: /users, /router 

Display users on different routes. (Note: these ports can be different)
- Fetch the list of users from https://jsonplaceholder.typicode.com/users. Display all of their names under the route localhost:4200/users.
- On the route localhost:4200/form, display a form that allows you to type in a name and
click a button to add this new name to the list of names in localhost:4200/users. That
route should then display the list of users’ names and any newly added names.
1. Do this using the Context API.
2. <del>Do this again using Redux and thunks.</del>
3. Do this again using react-redux and thunks.

## Quick Started

```
# clone the repo 
git clone git@github.com:qawsedr87/react-state-management.git 
cd react-state-management

# install packages
yarn 

# run the dev
yarn dev
```