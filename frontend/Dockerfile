# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN npm install yarn
RUN yarn install --silent
RUN yarn install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]