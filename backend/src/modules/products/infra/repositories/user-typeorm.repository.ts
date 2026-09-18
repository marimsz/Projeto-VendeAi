import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../../application/repositories/user.repostory.js";
import { UserSchema } from "../database/typeorm/entities/user-schema.js";
import { Repository } from "typeorm";
import { User } from "../../../entities/user-entity.js";




export class UserTypeOrmRepository implements UserRepository{

    constructor(
        @InjectRepository(UserSchema)
        private readonly repository: Repository<UserSchema>
    ){}

    async create(user: User): Promise<void> {
        const userData = this.repository.create({
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone
        })

        await this.repository.save(userData)
    }
}