FROM node:13.12
LABEL maintainer='Komal'
LABEL description='Hacker news'

RUN mkdir -p /app

ADD . /app/
ADD .babelrc .env .eslintignore package.json .eslintrc webpack.config.prod.js .eslintignore /app/


WORKDIR /app

RUN yarn
RUN yarn build

EXPOSE 3000

CMD yarn start
