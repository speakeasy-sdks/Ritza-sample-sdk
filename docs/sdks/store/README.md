# Store
(*store*)

## Overview

Access to Petstore orders

Find out more about our store
<http://swagger.io>
### Available Operations

* [deleteOrder](#deleteorder) - Delete purchase order by ID
* [getInventory](#getinventory) - Returns pet inventories by status
* [getOrderById](#getorderbyid) - Find purchase order by ID
* [placeOrderForm](#placeorderform) - Place an order for a pet
* [placeOrderJson](#placeorderjson) - Place an order for a pet
* [placeOrderRaw](#placeorderraw) - Place an order for a pet

## deleteOrder

For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

async function run() {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.store.deleteOrder({
    orderId: 127902,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteOrderRequest](../../sdk/models/operations/deleteorderrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteOrderResponse](../../sdk/models/operations/deleteorderresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getInventory

Returns a map of status codes to quantities

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { GetInventorySecurity } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/operations";

async function run() {
  const sdk = new SwaggerPetstoreOpenApi30();
const operationSecurity: GetInventorySecurity = "<YOUR_API_KEY_HERE>";

  const res = await sdk.store.getInventory(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `security`                                                                             | [operations.GetInventorySecurity](../../sdk/models/operations/getinventorysecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetInventoryResponse](../../sdk/models/operations/getinventoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOrderById

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

async function run() {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.store.getOrderById({
    orderId: 614993,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetOrderByIdRequest](../../sdk/models/operations/getorderbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetOrderByIdResponse](../../sdk/models/operations/getorderbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## placeOrderForm

Place a new order in the store

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { Status } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.store.placeOrderForm({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: Status.Approved,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../sdk/models/shared/order.md)             | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PlaceOrderFormResponse](../../sdk/models/operations/placeorderformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## placeOrderJson

Place a new order in the store

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { Status } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.store.placeOrderJson({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: Status.Approved,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../sdk/models/shared/order.md)             | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PlaceOrderJsonResponse](../../sdk/models/operations/placeorderjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## placeOrderRaw

Place a new order in the store

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { Status } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.store.placeOrderRaw(new TextEncoder().encode("0xcB9dC14dEe"));

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PlaceOrderRawResponse](../../sdk/models/operations/placeorderrawresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
