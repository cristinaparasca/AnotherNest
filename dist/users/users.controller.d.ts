import { UserService } from "./users.service";
import { User } from "./user.entity";
import { CreatedUserDto } from "./DTO/create.user.dto";
import { UpdatedUserDto } from "./DTO/update.user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: CreatedUserDto): void;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, user: UpdatedUserDto): Promise<{
        message: string;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
