import { ApiProperty } from "@nestjs/swagger";

export class Product {
    @ApiProperty()
    name: string;

    @ApiProperty()
    status: string;

    /*@ApiProperty()
    destination: string;

    @ApiProperty()
    rentabilityFee: number;

    @ApiProperty()
    minDeadlineForCompletion: number;

    @ApiProperty()
    administrationFee: number;

    @ApiProperty()
    maturity: number;

    @ApiProperty()
    dailyLiquidity: number;*/
}
