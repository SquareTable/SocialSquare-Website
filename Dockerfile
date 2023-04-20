FROM node:16
WORKDIR /server
COPY  package*.json /server/
RUN npm install
COPY . /server/
EXPOSE 3000
CMD ["node", "index"]