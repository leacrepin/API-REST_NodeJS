FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/opendata_fibre
WORKDIR /usr/src/opendata_fibre

# copy the app, note .dockerignore
COPY . .
RUN npm install

# expose 4000 on container
EXPOSE 4000

# Environement variables
ENV NODE_ENV=production
ENV PORT=4000

# start the app
CMD [ "npm", "start" ]