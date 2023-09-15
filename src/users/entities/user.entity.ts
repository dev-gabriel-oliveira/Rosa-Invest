import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true })
    nickname: string;

    @ApiProperty()
    @Column()
    realname: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column({ enum: ['Male', 'Female', 'Other'] })
    gender: string;

    @ApiProperty()
    @Column({ type: 'date' })
    birthdate: Date;
}