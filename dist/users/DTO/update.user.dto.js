"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create.user.dto");
class UpdatedUserDto extends mapped_types_1.PartialType(create_user_dto_1.CreatedUserDto) {
}
exports.UpdatedUserDto = UpdatedUserDto;
//# sourceMappingURL=update.user.dto.js.map