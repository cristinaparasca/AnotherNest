"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const create_product_dto_1 = require("./create.product.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateProductDto extends mapped_types_1.PartialType(create_product_dto_1.CreatedProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update.product.dto.js.map