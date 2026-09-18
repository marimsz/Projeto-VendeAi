import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ProductListingController } from "./presentation/controllers/product-listing.controller.js";
import { CreateProductListingUseCase } from "./application/use-case/create-product-listing.use-case.js";
import { ProductListingTypeOrmRepository } from "./infra/repositories/product-listing-typeorm.repository.js";
import { ProductListingRepository } from "./application/repositories/product-listing.repository.js";
import { ProductListingSchema } from "./infra/database/typeorm/entities/product-listing-schema.js";
import { FindAllProductListingUseCase } from "./application/use-case/find-all-product-listings.use-cases.js";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductListingSchema
    ])
  ],

  controllers: [
    ProductListingController
  ],

  providers: [
    {
      provide: ProductListingRepository,
      useClass: ProductListingTypeOrmRepository
    },
    CreateProductListingUseCase,
    FindAllProductListingUseCase
  ],

  exports: [
    ProductListingRepository
  ]
})
export class ProductsModule {}