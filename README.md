# GDSC CU Live Coding Sessions

## Backend with NodeJS

This is a live coding session that I created for the Google Developer Student Club, Covenant University chapter in collaboration with Interswitch API. The purpose of this session is to teach beginners how to query an API and create payments using the Rest API, while also introducing them to monolithic architecture and good folder structure.

## Getting Started

To get started with this project, you'll need to clone the repository:

```bash
  git clone https://github.com/sayoadesokan/Google-Dev-Live-Coding-Interswitch-API.git
```

https://www.freecodecamp.org/news/introduction-to-git-and-github/

## Prerequisites

You'll need to have the following installed on your local machine:

- Node.js
- npm

https://nodejs.org/en/download

## Installation

- To install the dependencies for this project, run the following command in the project directory:

```bash
  npm install
```

## Usage

Setting up the .env file
-- In the root directory of your project, locate the .env.example file.
-- Rename the .env.example file to .env.
-- Open the .env file in your editor of choice
-- Fill in the required environment variables with their respective values.

To run the project on your local machine, run the following command:

- For the Development Environmnet run:

```bash
  npm run dev
```

- For Production Environment run:

```bash
 npm run start
```

This will start the server and you can access the application at `http://localhost:8080` or any other port specified in .env

## API

This project uses the Interswitch API to create payments. To use the API, you'll need to sign up for an account on the Interswitch website and obtain an API key or simply use the demo test credentials using this link:

https://docs.interswitchgroup.com/docs/default-test-credentials

## Folder Structure

This project follows a monolithic architecture and has the following folder structure:

![Folder Structure](./images/img1.png)

- The `config` folder contains configuration files for the application.
- The `controllers` folder contains the controllers for the payment and user routes.
- The `routes` folder contains the API routes for the payment and user data.
- The `index.js` file is the entry point for the application.
- The `.env` file is an important configuration file for the application. It is used to store sensitive information such as API keys, database credentials, and other secrets.

## Expected Response

![Response](./images/img2.png)

## Contributing

If you'd like to contribute to this project, or make some improvements like connect it to the database and all

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Interswitch API for providing the API for this project
- Google Developer Community in Covenant University for hosting the live coding session
- Contributors to this project

## Conclusion

Thank you for choosing to use this project to learn about querying an API, creating payments using the Rest API, and implementing good folder structure and monolithic architecture. If you have any questions or feedback, feel free to reach out to me. Happy coding!

```

```
