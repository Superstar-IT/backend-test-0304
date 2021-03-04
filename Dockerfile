# Define the docker hub image: https://hub.docker.com/_/node/
FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
ENV NODE_ENV=development
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN npm run migrate
RUN npm run seed

EXPOSE 8080
CMD [ "npm", "start" ]
