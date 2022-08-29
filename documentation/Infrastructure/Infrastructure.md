# Inftrastructure

Udagram is a full stack application composed of 3 parts

- **Frontend** The application user interface created using Angular and hosted on an AWS S3 bucket that is publically available and has static web hosting enabled

- **Backend** A RESTful API creaded using a node.js environment and hosted on AWS Elastic beanstalk that is responsible for handling data transfer between the Database and the Frontend

- **Database** A PostgreSQL database hosted on AWS RDS that stores and persists data to make it available for future read commands
