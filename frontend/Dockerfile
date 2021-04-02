# pull official base image
FROM node:latest

# set working directory
WORKDIR /frontend

# install app dependencies
COPY . ./
RUN npm install yarn --force
RUN yarn install --silent --force

# start app
CMD ["yarn", "start"]
