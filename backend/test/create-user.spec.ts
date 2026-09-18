import { CreateUserUseCase } from "../src/modules/products/application/use-case/create-user.use-case.js"
import { User } from "../src/modules/entities/user-entity.js"
import { UserRepository } from "../src/modules/products/application/repositories/user.repostory.js"


class FakeUserRepository implements UserRepository {
    users: User[] = []

    async create(user: User): Promise<void> {
        this.users.push(user)
    }
} 


describe("Criar usuario",()=>{

    it("deve criar usuario", async()=>{

        const userRepository = new FakeUserRepository()

        const userCase = new CreateUserUseCase(userRepository)

        const user = await userCase.execute({
            name: "Maria",
            email: "maria@gmail.com",
            password: "123456",
            phone: "87981679796"
        })

        expect(user.name).toBe("Maria")
        expect(user.email).toBe("maria@gmail.com")
        expect(user.password).not.toBe("123456")

        expect(userRepository.users).toHaveLength(1)
        expect(userRepository.users[0].email).toBe("maria@gmail.com")
    })

})