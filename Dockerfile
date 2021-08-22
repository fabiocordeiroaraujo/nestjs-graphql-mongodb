# IMAGE MOTHER
FROM node:14.17.5-alpine

# DIR TO STORE THE PROJECT IN IMAGE
WORKDIR /home/api

# RUN NODE PROJECT
CMD npm run start:docker:dev

# SHOW DOCKER IMAGES #################
# >> docker images
# RUN DOCKER IMAGE ###################
# >> docker-compose up
# >> docker-compose up --build
# INSTALL DEPENDENCES
# >> docker-compose exec nestjs_graphql_mongodb_api npm install [package]
# COPY NODE_MODULES
# >> cp nestjs_graphql_mongodb_api:/home/api/node_modules/. ./node_modules
# STOP SERVICES
# >> docker-compose down