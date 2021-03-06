# email-parser
Email parser is a node js application which allows HTTP POST request and takes in the email headers as input and returns json output.
The images has already been push into Docker Hub as dgurutester/email-parser:latest
To build the  image, run the docker build -t <image-name> .
You may push the image to a Docker repository of your choosing
The deploy.yaml file deploys the application in a kubernetes cluster . 
The yaml file creates a NodePort service  exposing the application on port 31800. 
You may also use an ingress controller and an ingress resource if you do not want to use high port numbers. 
The `yaml file also creates the email-parser deployment which creates the pod.
Be sure to change the image name before deploying the deploy.yaml file
Run kubectl apply -f deploy.yaml
To test the application, you may use a tool like Curl or Postman to send the HTTP POST request to see the results.
