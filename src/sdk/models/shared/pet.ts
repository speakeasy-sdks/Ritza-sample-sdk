/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Category } from "./category";
import { Tag } from "./tag";
import { Expose, Type } from "class-transformer";

/**
 * pet status in the store
 */
export enum PetStatus {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}

export class Pet extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "form, name=category;json=true" })
    @Expose({ name: "category" })
    @Type(() => Category)
    category?: Category;

    @SpeakeasyMetadata({ data: "form, name=id" })
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata({ data: "form, name=name" })
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata({ data: "form, name=photoUrls" })
    @Expose({ name: "photoUrls" })
    photoUrls: string[];

    /**
     * pet status in the store
     */
    @SpeakeasyMetadata({ data: "form, name=status" })
    @Expose({ name: "status" })
    status?: PetStatus;

    @SpeakeasyMetadata({ data: "form, name=tags;json=true", elemType: Tag })
    @Expose({ name: "tags" })
    @Type(() => Tag)
    tags?: Tag[];
}