/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ApiResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;
}
