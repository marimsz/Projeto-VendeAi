import { CreateUserData, User } from "../../../entities/user-entity.js";
import { UserRepository } from "../repositories/user.repostory.js";
import bcrypt from "bcrypt";


export class CreateUserUseCase {


    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(data: CreateUserData): Promise<User> {

      const hashedPassword = await bcrypt.hash(data.password, 10)

      const user = User.create({
      ...data,
      password: hashedPassword
    }) 

      await this.userRepository.create(user)
      
      return user
    }
}