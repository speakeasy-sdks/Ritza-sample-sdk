# FindPetsByTagsResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `twoHundredApplicationJsonClasses`                      | [shared.Pet](../../../sdk/models/shared/pet.md)[]       | :heavy_minus_sign:                                      | successful operation                                    |
| `body`                                                  | *Uint8Array*                                            | :heavy_minus_sign:                                      | N/A                                                     |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_check_mark:                                      | Raw HTTP response; suitable for custom response parsing |