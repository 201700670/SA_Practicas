# Practica3 SA - Pareja 2 

| Nombre                        | Carnet    |
| ----------------------------- |-----------|
| Alison Cristina Leiva Paredes | 201700378 |
| Cinthya Andrea Palomo Galvez  | 201700670 |

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker

* Create an Account

> Create an account at Docker Hub (https://hub.docker.com/) to be able to push and pull Docker Hub images.


* Log Into Docker via Command Line

> 1. docker login --help - Use this to see the options for logging in
> 2. docker login -u your_user_name - The -u option allows us to pass our user name.
> 3. Password - The prompt will request our password for DockerHub

* Create Repository
> `docker tag local-image:tagname new-repo:tagname `
> `docker push new-repo:tagname`

* Name Repository for this project
> `andreapalomo/pareja2:latest`

* Build of image
> `docker build -t andreapalomo/pareja2 .`

* Push image 

> `docker push andreapalomo/pareja2:latest`

* Pull image
> `docker pull andreapalomo/pareja2:latest`

* Run docker 

> `docker run -d -it -p 4100:4200 --name practica2grupo2 andreapalomo/pareja2:latest`
