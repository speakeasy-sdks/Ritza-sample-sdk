# User
(*user*)

## Overview

Operations about user

### Available Operations

* [createUserForm](#createuserform) - Create user
* [createUserJson](#createuserjson) - Create user
* [createUserRaw](#createuserraw) - Create user
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](#deleteuser) - Delete user
* [getUserByName](#getuserbyname) - Get user by user name
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [updateUserForm](#updateuserform) - Update user
* [updateUserJson](#updateuserjson) - Update user
* [updateUserRaw](#updateuserraw) - Update user

## createUserForm

This can only be done by the logged in user.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.createUserForm({
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserFormResponse](../../models/operations/createuserformresponse.md)>**


## createUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.createUserJson({
    email: "john@email.com",
    firstName: "John",
    id: 10,
    lastName: "James",
    password: "12345",
    phone: "12345",
    userStatus: 1,
    username: "theUser",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserJsonResponse](../../models/operations/createuserjsonresponse.md)>**


## createUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.createUserRaw("i5Xui)x^_Y" as bytes <<<>>>);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserRawResponse](../../models/operations/createuserrawresponse.md)>**


## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.createUsersWithListInput([
    {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
  ]);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User[]](../../models//.md)                           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUsersWithListInputResponse](../../models/operations/createuserswithlistinputresponse.md)>**


## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.deleteUser({
    username: "Demetris_Torphy",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteUserResponse](../../models/operations/deleteuserresponse.md)>**


## getUserByName

Get user by user name

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.getUserByName({
    username: "Zachery_Schneider",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetUserByNameResponse](../../models/operations/getuserbynameresponse.md)>**


## loginUser

Logs user into the system

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.loginUser({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.LoginUserRequest](../../models/operations/loginuserrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.LoginUserResponse](../../models/operations/loginuserresponse.md)>**


## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.logoutUser();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogoutUserResponse](../../models/operations/logoutuserresponse.md)>**


## updateUserForm

This can only be done by the logged in user.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.updateUserForm({
    user: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    username: "Bo_Lynch4",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateUserFormRequest](../../models/operations/updateuserformrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserFormResponse](../../models/operations/updateuserformresponse.md)>**


## updateUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.updateUserJson({
    user: {
      email: "john@email.com",
      firstName: "John",
      id: 10,
      lastName: "James",
      password: "12345",
      phone: "12345",
      userStatus: 1,
      username: "theUser",
    },
    username: "Alanna_Waters81",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateUserJsonRequest](../../models/operations/updateuserjsonrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserJsonResponse](../../models/operations/updateuserjsonresponse.md)>**


## updateUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.user.updateUserRaw({
    requestBody: "b4q0<\{RD/" as bytes <<<>>>,
    username: "Eleonore2",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateUserRawRequest](../../models/operations/updateuserrawrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateUserRawResponse](../../models/operations/updateuserrawresponse.md)>**

