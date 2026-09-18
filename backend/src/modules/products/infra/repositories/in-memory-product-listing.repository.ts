import { ProductListing } from "../../../entities/product-listing.entities.js";
import { ProductListingRepository } from "../../application/repositories/product-listing.repository.js";

export class InMemoryProductListingRepository implements ProductListingRepository{

     public items: ProductListing[] = []

     async create(productListing: ProductListing): Promise<void> {
        this.items.push(productListing)
     }

     async findAll(): Promise<ProductListing[]> {
        return this.items;
    }
}