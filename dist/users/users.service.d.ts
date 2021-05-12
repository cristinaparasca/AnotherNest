import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreatedUserDto } from "./DTO/create.user.dto";
import { UpdatedUserDto } from "src/users/DTO/update.user.dto";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(user: CreatedUserDto): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, user: UpdatedUserDto): Promise<{
        message: string;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
