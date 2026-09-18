import { Inject } from "@nestjs/common";
import { ProductListingRepository } from "../repositories/product-listing.repository.js";
import { ProductListing } from "../../../entities/product-listing.entities.js";

export class FindAllProductListingUseCase {

    constructor(
        @Inject(ProductListingRepository)
        private productListingRepository: ProductListingRepository
    ){}

    async execute():Promise<ProductListing[]>{
        return this.productListingRepository.findAll()
    }
}