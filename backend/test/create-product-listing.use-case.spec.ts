import { ProductListing, ProductListingStatus } from "../src/modules/entities/product-listing.entities.js"
import { ProductListingRepository } from "../src/modules/products/application/repositories/product-listing.repository.js"
import { CreateProductListingUseCase } from "../src/modules/products/application/use-case/create-product-listing.use-case.js"

describe("CreateProductListingUseCase",()=>{

    it("deve criar um anuncio", async()=> {

        const repository: ProductListingRepository = {
            create: vi.fn()
        }

        const useCase = new CreateProductListingUseCase(repository)

        const listing = await useCase.execute({
            title: "Bicicleta Caloi",
            description: "Bicicleta em bom estado",
            priceInCents: 50000,
            sellerId:"seller-1",
            categoryId:"category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
        expect(listing.status).toBe(ProductListingStatus.AVAILABLE)
    })

    it("deve salvar o anuncio no repository", async ()=>{


        const repository = {
            create: vi.fn()
        }

        const useCase = new CreateProductListingUseCase(repository)

        const listing = await useCase.execute({
            title: "Bicicleta Caloi",
            description: "Bicicleta em bom estado",
            priceInCents: 50000,
            sellerId:"seller-1",
            categoryId:"category-1"
        })


        expect(repository.create).toHaveBeenCalledWith(listing)
    })
})