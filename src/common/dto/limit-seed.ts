import { IsInt, IsNumber, IsOptional, IsPositive, Max, Min } from "class-validator";

export class LimitSeed{
    @IsOptional()
    @IsInt()
    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(100000)
    limit?: number
}