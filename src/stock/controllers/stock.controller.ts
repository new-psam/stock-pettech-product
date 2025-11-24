import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { StockService } from "../services/stock.service";
import type { IProduct } from "../schemas/models/product.interface";
import { Product } from "../schemas/product.schema";

@Controller('stock')
export class StockController {
    constructor(
        private readonly stockService: StockService) {};
    
    @Get()    
    async getAllStock(
        @Query('limit') limit: number, 
        @Query('page') page: number
    ) {
        return this.stockService.getAllStock(limit, page);
    };

    @Get(':productId')
    async getStock(@Param('productId') productId: string){
        return this.stockService.getStock(productId);
    };

    @Post()
    async createStock(@Body() product: IProduct){
        return this.stockService.createStock(product);
    }

    @Put(':productId')
    async updateStock(
        @Param('productId') ProductId: string,
        @Body('stock') stock: number
    ) {
        return this.stockService.updateStock(ProductId, stock);
    }

    @Delete(':productId')
    async deleteStock(@Param('productId') productId: string){
        return this.stockService.deleteStock(productId);
    }
}