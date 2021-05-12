"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(product) {
        this.productRepository.save(product);
    }
    async getProducts() {
        return await this.productRepository.find();
    }
    async getProduct(id) {
        return await this.productRepository.findOne(id);
    }
    async updateProduct(id, product) {
        const updatedProduct = await this.productRepository.findOne(id);
        if (!updatedProduct) {
            throw new common_1.NotFoundException(`No product whith id=${id}!`);
        }
        await this.productRepository.update(id, product);
        return ({ message: "Product updated succesfully" });
    }
    async delete(id) {
        const exists = await this.productRepository.findOne(id);
        if (!exists) {
            throw new common_1.NotFoundException(`No product whith id=${id}!`);
        }
        await this.productRepository.delete(id);
        return ({ message: "Product deleted succesfully" });
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map