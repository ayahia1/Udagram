# Pipeline

The pipeline is mainly composed of three parts

- **Github** A public repository hosting a _udagram_ folder containing the backend and frontend code, a .circleci folder containing the pipeline configuration file, and a root package.json that makes the backend and frontend commands available for the pipeline configuration file

- **CircleCi** A continuous integration and continuous delivery/deployment platform that is linked to the Github repository and triggered to integrate any changes made to the GitHub code and deploy it once a push has been made to the master branch

- **AWS** The final destination for the code; the frontend is deployed to S3 and the backend is deployed to ebs
