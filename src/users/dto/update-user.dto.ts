import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    nickname: string;

    @IsString()
    realname: string;

    @IsString()
    password: string;

    @IsString()
    gender: string;

    @IsString()
    birthdate: Date;
}
