/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Order Status
 */
export enum Status {
    Placed = "placed",
    Approved = "approved",
    Delivered = "delivered",
}

export class Order extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "form, name=complete" })
    @Expose({ name: "complete" })
    complete?: boolean;

    @SpeakeasyMetadata({ data: "form, name=id" })
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata({ data: "form, name=petId" })
    @Expose({ name: "petId" })
    petId?: number;

    @SpeakeasyMetadata({ data: "form, name=quantity" })
    @Expose({ name: "quantity" })
    quantity?: number;

    @SpeakeasyMetadata({ data: "form, name=shipDate" })
    @Expose({ name: "shipDate" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    shipDate?: Date;

    /**
     * Order Status
     */
    @SpeakeasyMetadata({ data: "form, name=status" })
    @Expose({ name: "status" })
    status?: Status;
}
