# Pet
(*pet*)

## Overview

Everything about your Pets

Find out more
<http://swagger.io>
### Available Operations

* [addPetForm](#addpetform) - Add a new pet to the store
* [addPetJson](#addpetjson) - Add a new pet to the store
* [addPetRaw](#addpetraw) - Add a new pet to the store
* [deletePet](#deletepet) - Deletes a pet
* [findPetsByStatus](#findpetsbystatus) - Finds Pets by status
* [findPetsByTags](#findpetsbytags) - Finds Pets by tags
* [getPetById](#getpetbyid) - Find pet by ID
* [updatePetWithForm](#updatepetwithform) - Updates a pet in the store with form data
* [updatePetForm](#updatepetform) - Update an existing pet
* [updatePetJson](#updatepetjson) - Update an existing pet
* [updatePetRaw](#updatepetraw) - Update an existing pet
* [uploadFile](#uploadfile) - uploads an image

## addPetForm

Add a new pet to the store

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.addPetForm({
    category: {
      id: 1,
      name: "Dogs",
    },
    id: 10,
    name: "doggie",
    photoUrls: [
      "http://celebrated-surprise.org",
    ],
    tags: [
      {},
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.Pet](../../models/shared/pet.md)                            | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AddPetFormResponse](../../models/operations/addpetformresponse.md)>**


## addPetJson

Add a new pet to the store

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.addPetJson({
    category: {
      id: 1,
      name: "Dogs",
    },
    id: 10,
    name: "doggie",
    photoUrls: [
      "https://timely-purpose.name",
    ],
    tags: [
      {},
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.Pet](../../models/shared/pet.md)                            | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AddPetJsonResponse](../../models/operations/addpetjsonresponse.md)>**


## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.addPetRaw("W`6wC8ntZ\" as bytes <<<>>>);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [Uint8Array](../../models//.md)                                     | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AddPetRawResponse](../../models/operations/addpetrawresponse.md)>**


## deletePet

Deletes a pet

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.deletePet({
    petId: 441876,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.DeletePetResponse](../../models/operations/deletepetresponse.md)>**


## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { FindPetsByStatusStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/operations";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.findPetsByStatus({
    status: [
      FindPetsByStatusStatus.Sold,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FindPetsByStatusRequest](../../models/operations/findpetsbystatusrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FindPetsByStatusResponse](../../models/operations/findpetsbystatusresponse.md)>**


## findPetsByTags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.findPetsByTags({
    tags: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.FindPetsByTagsResponse](../../models/operations/findpetsbytagsresponse.md)>**


## getPetById

Returns a single pet

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { GetPetByIdSecurity } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/operations";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30();
const operationSecurity: GetPetByIdSecurity = {
  apiKey: "",
};

  const res = await sdk.pet.getPetById({
    petId: 504151,
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetPetByIdRequest](../../models/operations/getpetbyidrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetPetByIdSecurity](../../models/operations/getpetbyidsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetPetByIdResponse](../../models/operations/getpetbyidresponse.md)>**


## updatePetWithForm

Updates a pet in the store with form data

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.updatePetWithForm({
    petId: 303241,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdatePetWithFormRequest](../../models/operations/updatepetwithformrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdatePetWithFormResponse](../../models/operations/updatepetwithformresponse.md)>**


## updatePetForm

Update an existing pet by Id

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.updatePetForm({
    category: {
      id: 1,
      name: "Dogs",
    },
    id: 10,
    name: "doggie",
    photoUrls: [
      "https://apt-gazebo.com",
    ],
    tags: [
      {},
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Pet](../../models/shared/pet.md)                     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdatePetFormResponse](../../models/operations/updatepetformresponse.md)>**


## updatePetJson

Update an existing pet by Id

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.updatePetJson({
    category: {
      id: 1,
      name: "Dogs",
    },
    id: 10,
    name: "doggie",
    photoUrls: [
      "http://orderly-insurance.info",
    ],
    tags: [
      {},
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Pet](../../models/shared/pet.md)                     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdatePetJsonResponse](../../models/operations/updatepetjsonresponse.md)>**


## updatePetRaw

Update an existing pet by Id

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.updatePetRaw(":Pnf><u_<@" as bytes <<<>>>);

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

**Promise<[operations.UpdatePetRawResponse](../../models/operations/updatepetrawresponse.md)>**


## uploadFile

uploads an image

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.uploadFile({
    requestBody: "U?WWKB{5@q" as bytes <<<>>>,
    petId: 621158,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UploadFileResponse](../../models/operations/uploadfileresponse.md)>**

