import { User } from "../../../entities/user-entity.js";


export abstract class UserRepository {
    abstract create(user: User): Promise<void>
}