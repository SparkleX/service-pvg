FROM node
ADD . /home/app
WORKDIR /home/app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]