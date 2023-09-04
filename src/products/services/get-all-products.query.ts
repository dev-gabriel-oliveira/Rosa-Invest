import { Product } from "../entities/product.entity";

export class GetAllProductsQuery{
    public execute(): Product[]{
        return [];
    }
}