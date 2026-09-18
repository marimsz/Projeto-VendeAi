import { ProductListing } from "../../../entities/product-listing.entities.js";

export abstract class ProductListingRepository {
   abstract create(productListing: ProductListing):void
   abstract findAll():Promise<ProductListing[]>
}