docker build . -t react-docker-app
docker run -dit -p 8081:80 react-docker-app