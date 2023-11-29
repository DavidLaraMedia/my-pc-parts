import { IsNumber, IsString, IsLatitude, IsLongitude, Min, Max } from 'class-validator'
import { Transform } from 'class-transformer';

export class GetEstimateDto {
    @IsString()
    type: string;
    
    @IsString()
    make: string;
    
    @IsString()
    model: string;
    
    @Transform(({ value }) => parseFloat(value))
    @IsLongitude()
    lng: number;
    
    @Transform(({ value }) => parseFloat(value))
    @IsLatitude()
    lat: number;
}