# Dive Test Fran Navarro

# Front 💅

- Install and Start Front on development mode

```
cd front
```

and

```
npm install
npm run dev
```

### Stack/Technologies 🛠️

- NextJS
- Typescript
- CSS Modules
- Eslint & Prettier

# Back 💾

- Install and Start Server on development mode

```
cd API
```

and

```
npm install
npm run dev
```

### API endpoints

- GET http://localhost:8000/api/movies
- GET http://localhost:8000/api/movies/:id
  - The id must be the id of the actors
    - Example: http://localhost:8000/api/movies/629494696424c939ec0c2b9c,629494696424c939ec0c2b9c
  - Returns movies in which all the requested actors appear
- GET http://localhost:8000/api/actors
- GET http://localhost:8000/api/actors/:id
  - The id must be the id of the movies
    - Example: http://localhost:8000/api/movies/629494696424c939ec0c2b9c,629494696424c939ec0c2b9c
  - Returns actors that appear in all the requested movies
- POST http://localhost:8000/api/movies
  - Body:
    ```
    {
    "title": "Star wars",
    "category": "scify",
    "cast": ["629494696424c939ec0c2b9c"]
    }
    ```
- POST http://localhost:8000/api/actors
  - Body:
    ```
    {
    "name": "Mark Hamil",
    "age": 70,
    "gender": "Male"
    }
    ```

### Stack/Technologies 🛠️

- NodeJS
- ExpressJS
- Typescript
- Eslint & Prettier
- Mongoose (Object Document Mapper)
- ts-node-dev (Allows you to compile ts and restart when it changes )
- persistance layer: MongoDB Atlas

# Deployment strategies

## Front

- As the frontend is built with NextJs, deploying to vercel is as simple as using the vercel cli and typing `vercel`

## Back

- For the backend we have several strategies depending on how we want to deploy it and the use cases. One option could be the following (AWS):
  - Dockerize the API by creating a dockerfile
  - Create a pipeline using the AWS codepipeline and codebuild service so that every time a change is made to the repository branch, the service will build the Docker image and upload it to the AWS Elastic Container Registry service. It will then take care of getting the latest ECR image and deploying it to the EC2 machine.
