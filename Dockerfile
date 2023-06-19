FROM node:16
WORKDIR /server
COPY  package*.json /server/
RUN npm install
COPY . /server/
RUN cd react-website && npm install && cd ..
RUN cd react-website && npm run build && cd ..
RUN cd react-website && mv build ../react-public-build && cd ..
RUN rm -rf react-website
EXPOSE 3000
CMD ["node", "index"]