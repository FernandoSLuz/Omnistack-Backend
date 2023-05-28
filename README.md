# Omnistack Backend

This repository contains the backend for an application developed using the Omnistack framework. The application allows users to create and like posts, as well as upload images associated with the posts. The backend is responsible for handling CRUD operations, managing the database, and handling the communication between the frontend and the server.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Create and view posts
- Add metadata such as author, location, description, and hashtags to posts
- Upload and resize images associated with posts
- Increment post likes
- Real-time updates using Socket.IO

## Requirements

- Node.js
- MongoDB

## Installation

1.  Clone this repository to your desired location:
    ```
    git clone https://github.com/FernandoSLuz/omnistack-backend.git
    ```

2.  Change to the project directory:
    ```
    cd omnistack-backend
    ```

3.  Install the required dependencies:
    ```
    npm install
    ```

## Usage

1.  Make sure your MongoDB server is running.

2.  Start the application:
    ```
    npm start
    ```

3.  The server will be running at `http://localhost:3333`.

## API Endpoints

| Method | Endpoint                      | Description                      |
| ------ | ----------------------------- | -------------------------------- |
| GET    | /posts                        | Get all posts sorted by creation |
| POST   | /posts                        | Create a new post                |
| POST   | /posts/:id/like               | Increment the likes of a post    |

## Contributing

1. Fork this repository.
2. Create a new branch with your feature or bugfix.
3. Commit and push your changes.
4. Create a Pull Request.

Please note that this project is released with a [Contributor Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating in this project, you agree to abide by its terms.
