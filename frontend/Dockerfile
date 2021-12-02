FROM nginx:alpine

ARG ANGULAR_ENV

RUN apk --no-cache add npm git bash curl

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY ./ /app/

RUN npm run build -- --output-path=/app/dist/out --configuration $ANGULAR_ENV --prod

RUN cp -R /app/dist/out/* /usr/share/nginx/html/

COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
