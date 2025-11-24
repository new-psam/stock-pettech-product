import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
            name: Product.name,
            schema: ProductSchema,
            },
        ])
    ]
})
export class StockModule {}
