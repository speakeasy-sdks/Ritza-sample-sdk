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
| `request`                                                           | [shared.Pet](../../sdk/models/shared/pet.md)                        | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AddPetFormResponse](../../sdk/models/operations/addpetformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
| `request`                                                           | [shared.Pet](../../sdk/models/shared/pet.md)                        | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AddPetJsonResponse](../../sdk/models/operations/addpetjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

  const res = await sdk.pet.addPetRaw(new TextEncoder().encode("0xcf5E85CDde"));

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [Uint8Array](../../models/.md)                                      | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.AddPetRawResponse](../../sdk/models/operations/addpetrawresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeletePetRequest](../../sdk/models/operations/deletepetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeletePetResponse](../../sdk/models/operations/deletepetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { Status } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/operations";

(async() => {
  const sdk = new SwaggerPetstoreOpenApi30({
    petstoreAuth: "",
  });

  const res = await sdk.pet.findPetsByStatus({
    status: [
      Status.Sold,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.FindPetsByStatusRequest](../../sdk/models/operations/findpetsbystatusrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.FindPetsByStatusResponse](../../sdk/models/operations/findpetsbystatusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FindPetsByTagsRequest](../../sdk/models/operations/findpetsbytagsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FindPetsByTagsResponse](../../sdk/models/operations/findpetsbytagsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetPetByIdRequest](../../sdk/models/operations/getpetbyidrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetPetByIdSecurity](../../sdk/models/operations/getpetbyidsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetPetByIdResponse](../../sdk/models/operations/getpetbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdatePetWithFormRequest](../../sdk/models/operations/updatepetwithformrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdatePetWithFormResponse](../../sdk/models/operations/updatepetwithformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
| `request`                                                    | [shared.Pet](../../sdk/models/shared/pet.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdatePetFormResponse](../../sdk/models/operations/updatepetformresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
| `request`                                                    | [shared.Pet](../../sdk/models/shared/pet.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdatePetJsonResponse](../../sdk/models/operations/updatepetjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

  const res = await sdk.pet.updatePetRaw(new TextEncoder().encode("0x6bCA76De67"));

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdatePetRawResponse](../../sdk/models/operations/updatepetrawresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
    requestBody: new TextEncoder().encode("0xc7cca7F47D"),
    petId: 621158,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UploadFileRequest](../../sdk/models/operations/uploadfilerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UploadFileResponse](../../sdk/models/operations/uploadfileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
