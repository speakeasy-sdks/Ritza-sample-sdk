# Swagger-Petstore---OpenAPI-3.0

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/Ritza-sample-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/Ritza-sample-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Ritza-sample-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Ritza-sample-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30({
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["http://celebrated-surprise.org"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [pet](docs/sdks/pet/README.md)

* [addPetForm](docs/sdks/pet/README.md#addpetform) - Add a new pet to the store
* [addPetJson](docs/sdks/pet/README.md#addpetjson) - Add a new pet to the store
* [addPetRaw](docs/sdks/pet/README.md#addpetraw) - Add a new pet to the store
* [deletePet](docs/sdks/pet/README.md#deletepet) - Deletes a pet
* [findPetsByStatus](docs/sdks/pet/README.md#findpetsbystatus) - Finds Pets by status
* [findPetsByTags](docs/sdks/pet/README.md#findpetsbytags) - Finds Pets by tags
* [getPetById](docs/sdks/pet/README.md#getpetbyid) - Find pet by ID
* [updatePetWithForm](docs/sdks/pet/README.md#updatepetwithform) - Updates a pet in the store with form data
* [updatePetForm](docs/sdks/pet/README.md#updatepetform) - Update an existing pet
* [updatePetJson](docs/sdks/pet/README.md#updatepetjson) - Update an existing pet
* [updatePetRaw](docs/sdks/pet/README.md#updatepetraw) - Update an existing pet
* [uploadFile](docs/sdks/pet/README.md#uploadfile) - uploads an image

### [store](docs/sdks/store/README.md)

* [deleteOrder](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID
* [getInventory](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
* [getOrderById](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
* [placeOrderForm](docs/sdks/store/README.md#placeorderform) - Place an order for a pet
* [placeOrderJson](docs/sdks/store/README.md#placeorderjson) - Place an order for a pet
* [placeOrderRaw](docs/sdks/store/README.md#placeorderraw) - Place an order for a pet

### [user](docs/sdks/user/README.md)

* [createUserForm](docs/sdks/user/README.md#createuserform) - Create user
* [createUserJson](docs/sdks/user/README.md#createuserjson) - Create user
* [createUserRaw](docs/sdks/user/README.md#createuserraw) - Create user
* [createUsersWithListInput](docs/sdks/user/README.md#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](docs/sdks/user/README.md#deleteuser) - Delete user
* [getUserByName](docs/sdks/user/README.md#getuserbyname) - Get user by user name
* [loginUser](docs/sdks/user/README.md#loginuser) - Logs user into the system
* [logoutUser](docs/sdks/user/README.md#logoutuser) - Logs out current logged in user session
* [updateUserForm](docs/sdks/user/README.md#updateuserform) - Update user
* [updateUserJson](docs/sdks/user/README.md#updateuserjson) - Update user
* [updateUserRaw](docs/sdks/user/README.md#updateuserraw) - Update user
<!-- End Available Resources and Operations [operations] -->



<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30({
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.pet.addPetForm(
        {
            category: {
                id: 1,
                name: "Dogs",
            },
            id: 10,
            name: "doggie",
            photoUrls: ["http://celebrated-surprise.org"],
            tags: [{}],
        },
        {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        }
    );

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30({
        retry_config: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["http://celebrated-surprise.org"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Retries [retries] -->



<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30({
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    let res;
    try {
        res = await sdk.pet.addPetForm({
            category: {
                id: 1,
                name: "Dogs",
            },
            id: 10,
            name: "doggie",
            photoUrls: ["http://celebrated-surprise.org"],
            tags: [{}],
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https:///api/v3` | None |

#### Example

```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30({
        serverIdx: 0,
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["http://celebrated-surprise.org"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30({
        serverURL: "https:///api/v3",
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["http://celebrated-surprise.org"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { Swagger-Petstore---OpenAPI-3.0 } from "SwaggerPetstoreOpenApi30";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new SwaggerPetstoreOpenApi30({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `petstoreAuth` | oauth2         | OAuth2 token   |

To authenticate with the API the `petstoreAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30({
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["http://celebrated-surprise.org"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { GetPetByIdSecurity } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/operations";

async function run() {
    const sdk = new SwaggerPetstoreOpenApi30();
    const operationSecurity: GetPetByIdSecurity = {
        apiKey: "<YOUR_API_KEY_HERE>",
    };

    const res = await sdk.pet.getPetById(
        {
            petId: 504151,
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
