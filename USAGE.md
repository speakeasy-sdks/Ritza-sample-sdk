<!-- Start SDK Example Usage -->
```typescript
import { SwaggerPetstoreOpenApi30 } from "Swagger-Petstore---OpenAPI-3.0";
import { PetStatus } from "Swagger-Petstore---OpenAPI-3.0/dist/sdk/models/shared";

(async () => {
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
        photoUrls: ["http://celebrated-surprise.org"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->