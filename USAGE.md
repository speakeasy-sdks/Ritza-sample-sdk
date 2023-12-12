<!-- Start SDK Example Usage [usage] -->
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