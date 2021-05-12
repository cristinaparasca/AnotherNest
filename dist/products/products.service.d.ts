import { Repository } from "typeorm";
import { CreatedProductDto } from "./DTO/create.product.dto";
import { UpdateProductDto } from "./DTO/update.product.dto";
import { Product } from "./product.entity";
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    createProduct(product: CreatedProductDto): Promise<void>;
    getProducts(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    updateProduct(id: number, product: UpdateProductDto): Promise<{
        message: string;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
