# Introduction

This is a startup template for express app configure with docker. This is fully functional app configured for debugging.

## Configurations

You can configure your required port in application. For changing the application running in container port you would be required to change port in envrionment variables file as well as in docker-compose.
```
    ports: 
        - '3000:3000'
        - '9229:9229'
```
In above code snipped on right side is the host port whereas on left is the container port. You can change both the port. Make sure that the host port is not going to have any conflict with exisiting socket. 

The second port mapping is for debugging purpose. This can be modified as well if host OS is already listening on 9229. The container port will always be 9229 unless you change it in package.json file dev script.

If you are a visual studio user, then you can even utilize the .vscode directory. I've added a launc.json which will automatically connect your debugger when container is up and you click on debug button in vscode debugger panel. 

Just one thing to remember, .env and .vscode shouldn't be pushed to the repository. I've pushed them just for the sake of simplicity. Environment variable does contains some sensative information. Don't make .env and .vscode part of repository, just keep them private on your machine. 

## Run
In order to run this application, [Docker](https://docs.docker.com/engine/install/) should have been installed on the machine along with [docker-compose](https://docs.docker.com/compose/install/).

In order to run this applicaiton, build the image first

```bash
docker-compose build
```

After the images are build, run following command to run the image in container

```bash
docker-compose up
```

Both of the steps can be ran as single command 

```bash
docker-compose up --build
```
