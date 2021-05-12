import { ProductsService } from "./products.service";
import { Product } from "./product.entity";
import { CreatedProductDto } from "./DTO/create.product.dto";
import { UpdateProductDto } from "./DTO/update.product.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: CreatedProductDto): void;
    getAll(): Promise<Product[]>;
    getProduct(prodId: number): Promise<Product>;
    updateProduct(prodId: number, product: UpdateProductDto): Promise<{
        message: string;
    }>;
    deleteProduct(prodId: number): Promise<{
        message: string;
    }>;
}
