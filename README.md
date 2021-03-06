# cra-nginx-example
A simple create-react-app with very nice NGINX configuration

## Problem to solve:

A very common frontend projects problem is that they need env variables during the `npm run build`. <br>
Sometimes we can not get it, or we want to easily change it without rebuilding the docker image. <br>
The browser do not have anything like env variables that we can update via docker env variables. <br>
We need to imitate it in many "tricky" ways. <br>
With this setup, we are able to fetch ( via HTTP call ) config.json file, <br>
that contains some env variables defined in Nginx configuration `default.conf.template`. <br>
Enjoy :)

## Hot to run production version
```
docker build . -t cra-nginx-example
docker run -p 4000:5000 -e PORT=5000 -e API_URL=http://localhost:9999 cra-nginx-example
```

## Hot to run local version
Create the `config.json` file inside the `public` folder <br>
Put the below content to the `config.json` file
```
{
  "API_URL": "http://localhost:1234"
}
```

After that run below command
```
npm start
```
