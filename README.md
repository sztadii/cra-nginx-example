# cra-nginx-example
A simple CRA with nice NGINX configuration

## Hot to run production version
```
docker build . -t cra-nginx-example
docker run -p 4000:5000 -e PORT=5000 cra-nginx-example
```
