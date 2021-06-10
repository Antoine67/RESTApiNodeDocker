FROM node:12

#USER node
#RUN mkdir /home/node/app

WORKDIR /home/node/app
COPY app /home/node/app

RUN ls -a

RUN npm install --production
CMD npm run build

CMD npm start