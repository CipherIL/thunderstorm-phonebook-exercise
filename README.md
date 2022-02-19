# Thunderstorm-Playground

A playground area to learn and understand thunderstorm

---
[//]: # (## First things first...)
[//]: # (Make sure you have the [latest JDK installed]&#40;https://www.oracle.com/java/technologies/downloads/&#41;)
  
## Clone and run this repo:
**NOTE:** In order to clone this repo you need to have an SSH key defined in your GitHub account [here is how](https://medium.com/@kiran.jasvanee/the-process-to-generate-ssh-key-and-add-it-on-github-ba7139c07daf)


```
cd ~
mkdir -p dev/thunderstorm && cd dev/thunderstorm
git clone --recursive git@github.com:nu-art-js/thunderstorm-playground.git playground && cd playground
```

## Set Environment
Before you can run the project you need to set it up...

You can install and setup **frontend & local** environment using this command: `bash build-and-install.sh --install --set-env=frontend --fallback-env=local`

## Run your app locally  
 Once everything is configured correctly, you can launch the "Playground" sample: 

`bash build-and-install.sh --launch=app-frontend`