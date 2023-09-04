import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiResponse({status: HttpStatus.CREATED, type: ProductsService})
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiResponse({status: HttpStatus.OK, type: ProductsService, isArray:true})
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiResponse({status: HttpStatus.OK, type: ProductsService})
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({status: HttpStatus.OK, type: ProductsService})
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({status: HttpStatus.OK, type: null})
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
