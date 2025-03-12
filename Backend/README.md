# User Registration Endpoint

## POST /user/register

### Description

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user, and returns an authentication token along with the created user details.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Response

#### Success (201 Created)

```json
{
  "token": "your-authentication-token",
  "user": {
    "_id": "user-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Email is not valid",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name should be at least 3 characters",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "Last name should be at least 3 characters",
      "param": "fullName.lastName",
      "location": "body"
    },
    {
      "msg": "Password should be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Internal Server Error (500 Internal Server Error)

```json
{
  "message": "Internal server error",
  "error": "error message"
}
```

# User Login Endpoint

## POST /user/login

### Description

This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns an authentication token along with the user details.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Response

#### Success (200 OK)

```json
{
  "token": "your-authentication-token",
  "user": {
    "_id": "user-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Email is not valid",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password should be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Error (401 Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

#### Internal Server Error (500 Internal Server Error)

```json
{
  "message": "Internal server error",
  "error": "error message"
}
```

# User Profile Endpoint

## GET /user/profile

### Description

This endpoint is used to retrieve the profile of the authenticated user.

### Headers

- `Authorization`: Bearer token

### Response

#### Success (200 OK)

```json
{
  "user": {
    "_id": "user-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
}
```

#### Unauthorized (401 Unauthorized)

```json
{
  "message": "Unauthorized: No token provided"
}
```

#### Internal Server Error (500 Internal Server Error)

```json
{
  "message": "Internal server error",
  "error": "error message"
}
```

# User Logout Endpoint

## GET /user/logout

### Description

This endpoint is used to log out the authenticated user.

### Headers

- `Authorization`: Bearer token

### Response

#### Success (200 OK)

```json
{
  "message": "User logged out successfully"
}
```

#### Unauthorized (401 Unauthorized)

```json
{
  "message": "Unauthorized: No token provided"
}
```

#### Internal Server Error (500 Internal Server Error)

```json
{
  "message": "Internal server error",
  "error": "error message"
}
```

# Captain Registration Endpoint

## POST /captain/register

### Description

This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain, and returns an authentication token along with the created captain details.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "red",
    "plate": 123456,
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response

#### Success (201 Created)

```json
{
  "token": "your-authentication-token",
  "captain": {
    "_id": "captain-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": 123456,
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Email is not valid",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name should be at least 3 characters",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "Last name should be at least 3 characters",
      "param": "fullName.lastName",
      "location": "body"
    },
    {
      "msg": "Password should be at least 8 characters",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be more than 3 letters",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Capacity must be more than 1",
      "param": "vehicle.capacity",
      "location": "body"
    }
  ]
}
```

#### Internal Server Error (500 Internal Server Error)

```json
{
  "message": "Internal server error",
  "error": "error message"
}
```
