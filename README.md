# Node-challenge

Challenged done with Node, & express:

## View deployed project

The project has been deployed to Railway:
https://node-challenge-production.up.railway.app


<img src="/assets/deploy.png" alt="docs-1" />

## Run locally

In order to run the project locally do the following:

## Instalation

1. Clone this git repository:
 ```javascript
   git clone https:https://github.com/mvykool/Agneex-test.git
 ```

2. Go to the root directory of the project:
```javascript
    cd node-challenge
```

3. Instal the project's dependencies:
```javascript
    npm install
```

## Usage

The project runs with nodemon, type the following command in the terminal:
```javascript
  npm start
```
This will make the project run on  [http://localhost:8080](http://localhost:8080).


## TESTING

I've written a few simple tests that can be run with the following command:
```javascript
  npm test
```
<img src="/assets/test.png" alt="docs-1" />

# Implementations

## Endpoint: /products

Retrieves a list of products that are currently in stock.

Endpoint: /products

Method: GET

Response:

Status Code: 200 OK
Content-Type: application/json

- Example in postman

<img src="/assets/shotOne.png" alt="docs-1" />


## Endpoint: /price/{user_id}/{product_name}

Method: GET

Path Parameters:

user_id (required): The ID of the user.
product_name (required): The name of the product.
Response:

Status Code: 200 OK
Content-Type: application/json

- Example in postman

<img src="/assets/shotTwo.png" alt="docs-2" />


## Endpoint: /price/{user_id}/{product_name} without result

Method: GET

If there is no especial price for certain client, then it returns the base price.

<img src="/assets/shotThree.png" alt="docs-3" />


# Feedback and what I've learned

Basically this challenge allowed me to think a little bit outside of the scope, I used the connection string simply
as it was given to me, after thinking about it, and seeing that the results could be better I used MongoDb Compass
in order to reassure that the collections and the data was the required.

Overall it was a very fun challenge, if I would have done something differently, perhaps I would have used TypeScript
As I enjoy more working with it than I do with Vanilla JS.