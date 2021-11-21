# README
## Rest API - assignment 4

Simple Rest API for Web Development 2 - University of Luxembourg

## Features

- Read a city from database
- Create a new city and insert it into the database
- Update the population of a specific city
- Delete a city from the database

To read a city just do:
- localhost:8080/read/:city

To insert : 
- localhost:8080/create
- One has to provide json containing a new ID, the name of the city, name of district and total population

To update:
- localhost:8080/update/:city/:population

To delete:
- localhost:8080/delete/:city

