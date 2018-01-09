docker build . -t react-docker-app
docker run -dit -p 8080:80 react-docker-app