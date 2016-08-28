FROM node:argon-slim

#Update and Upgrade
RUN apt-get update -y && apt-get upgrade -y

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY code/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./code/ /usr/src/app

EvenPOSE 8080

CMD [ "npm", "start" ]
