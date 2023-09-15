import { Controller, HttpStatus, NotFoundException, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({status: HttpStatus.CREATED})
  async create(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);
    return newUser;
  }

  @Get()
  @ApiResponse({status: HttpStatus.OK})
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(':id')
  @ApiResponse({status: HttpStatus.OK, description: 'Usuário atualizado com sucesso'})
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Usuário não encontrado' })
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(+id);
    return user;
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Usuário atualizado com sucesso' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Usuário não encontrado' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersService.update(+id, updateUserDto);
    if (!updatedUser) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return updatedUser;
  }

  @Delete(':id')
  @ApiResponse({status: HttpStatus.OK, description: 'Usuário removido com sucesso'})
  async remove(@Param('id') id: string) {
    await this.usersService.remove(+id);
    return { message: 'Usuário removido com sucesso!' };
  }
}
