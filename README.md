# Udagram

This is a fullstack application built with the intention of using it to practice automated deployment to AWS cloud using CircleCI

## Link

The application is available through this [link](http://abdelbucket.s3-website-us-east-1.amazonaws.com/home)

## Running the application locally

To run the application locally, you need to have the following installed to your device

- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- A postgreSQL database hosted on AWS or locally to store your data

- AWS S3 Bucket to store your media files

- AWS CLI and EB CLI

### Installation

#### Frontend

Navigate to _udagram/udagram-frontend_ and run `npm run build && npm run start`

### Backend

Navigate to _udagram/udagram-api_ and created a _.env_ file 2. Inside this file, add values to the following keys

- POSTGRES_USERNAME
- POSTGRES_PASSWORD
- POSTGRES_HOST
- POSTGRES_PORT
- POSTGRES_DB
- AWS_BUCKET
- AWS_REGION
- AWS_PROFIL
- JWT_SECRET
- PORT
- URL **Note**: \_should be (http://localhost:${PORTValue})\*

After adding these values and while inside the same directory, run `npm run dev`

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework
