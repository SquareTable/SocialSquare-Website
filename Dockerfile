FROM node:20
WORKDIR /server
COPY . /server/
RUN npm install
EXPOSE 3000
CMD ["node", "index"]