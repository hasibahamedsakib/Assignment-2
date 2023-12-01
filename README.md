# Node.js Express TypeScript API with MongoDB and Validation

This project is a Node.js Express application developed in TypeScript, utilizing Mongoose for user data and order management. The validation is implemented using Zod.

## Project Setup

1. **Clone the w Node.js Express project and run locally:**

   ```bash
   git clone https://github.com/hasibahamedsakib/Assignment-2.git
   ```

#### Step-2

    type 'npm install 'in your terminal for installing all the npm package.

#### Step-3

create a `.env` file and add `PORT='5000'` number and add a mongoDB database url name is `DB_URL='db-url'` in root file.

#### Step-4

After That your setup done. if you want to run development environment then you type
`npm run dev` in your terminal.

#### Step-4

make sure before run the project you build the project. if you want to build the project type `npm run build` in your terminal.

## our live api documentation

# api-url - [Live Link](https://l2-assignment-2-nine.vercel.app/)

#### Step-1

### Create a new user::

> ### Method: POST. `Endpoint: api-url/api/users`

```ts
{
  "success": true,
  "message": "User created successfully!",
  "data": {
    // User data structure without password
  }
}

```

#### Step-2

### Retrieve a list of all users:

> ### Method: GET. `Endpoint: api-url/api/users`

```js
{
  "success": true,
  "message": "Users fetched successfully!",
  "data": [
    {
      // User data structure
    },
  ]
}

```

#### Step-3

### Retrieve a specific user by ID::

> ### Method: GET. `Endpoint: api-url/api/users/:userId`

```js
{
  "success": true,
  "message": "Users fetched successfully!",
  "data": [
    {
      // User data structure
    },
  ]
}
```

#### Step-4

### Update user information By userId:

> ### Method: PUT `Endpoint: api-url/api/users/:userId`

```ts
{
  "success": true,
  "message": "User updated successfully!",
  "data": {
    // Updated user data structure without password
  }
}

```

#### Step-5

### Delete a specific user by ID:

> ### Method: DELETE. `Endpoint: api-url/api/users/:userId`

```ts
{
  "success": true,
  "message": "User deleted successfully!",
  "data": null
}

```

#### Step-6

### Delete a specific user by ID:

> ### Method: DELETE. `Endpoint: api-url/api/users/:userId`

```ts
{
  "success": true,
  "message": "User deleted successfully!",
  "data": null
}

```

## Order Management section

#### User can add new product, get orders and calculate the total price.

#### Step-1

### Add New Product in Order::

> ### Method: PUT. `Endpoint: api-url/api/users/:userId/orders`

```ts
{
  "success": true,
  "message": "Order created successfully!",
  "data": null
}


```

#### Step-2

### Retrieve all orders for a specific user:

> ### Method: GET. `Endpoint: api-url/api/users/:userId/orders`

```ts
{
  "success": true,
  "message": "Order fetched successfully!",
  "data": {
    "orders": [
      {
        "productName": "string",
        "price": "number",
        "quantity": "number"
      },
      // more order objects...
    ]
  }
}


```

#### Step-3

### Calculate Total Price of Orders for a Specific User:

> ### Method: GET. `Endpoint: api-url/api/users/:userId/orders/total-price`

```ts
{
  "success": true,
  "message": "Total price calculated successfully!",
  "data": {
    "totalPrice": "total price"
  }
}


```

> _Thank you guy ._
>
> #### All right reserved by ` Hasib ahamed.`
