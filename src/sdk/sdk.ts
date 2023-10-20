/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "./models/shared";
import { Pet } from "./pet";
import { Store } from "./store";
import { User } from "./user";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["/api/v3"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    petstoreAuth?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.17";
    sdkVersion = "0.1.0";
    genVersion = "2.161.0";
    userAgent = "speakeasy-sdk/typescript 0.1.0 2.161.0 1.0.17 Swagger-Petstore---OpenAPI-3.0";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Swagger Petstore - OpenAPI 3.0: This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
 *
 * @remarks
 * Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
 * You can now help us improve the API whether it's by making changes to the definition itself or to the code.
 * That way, with time, we can improve the API in general, and expose some of the new features in OAS3.
 *
 * Some useful links:
 * - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
 * - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * @see {@link http://swagger.io} - Find out more about Swagger
 */
export class SwaggerPetstoreOpenApi30 {
    /**
     * Everything about your Pets
     *
     * @see {@link http://swagger.io} - Find out more
     */
    public pet: Pet;
    /**
     * Access to Petstore orders
     *
     * @see {@link http://swagger.io} - Find out more about our store
     */
    public store: Store;
    /**
     * Operations about user
     */
    public user: User;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ petstoreAuth: props?.petstoreAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.pet = new Pet(this.sdkConfiguration);
        this.store = new Store(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
    }
}