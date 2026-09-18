import { Controller, Post, Body, Get } from "@nestjs/common";
import { CreateProductListingUseCase } from "../../application/use-case/create-product-listing.use-case.js";
import { CreateProductListingDto } from "../dtos/create-product-listing.dto.js";
import { FindAllProductListingUseCase } from "../../application/use-case/find-all-product-listings.use-cases.js";



@Controller("products")
export class ProductListingController {

    constructor(
        private readonly createProductListingUseCase: CreateProductListingUseCase,
        private readonly findAllProductListingUseCase: FindAllProductListingUseCase
    ){}

    @Post()
    create(@Body() body: CreateProductListingDto){
        return this.createProductListingUseCase.execute(body)
    }

    @Get()
    async findAll(){
        return this.findAllProductListingUseCase.execute()
    }
}