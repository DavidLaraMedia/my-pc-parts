import { IsNumber, IsString, IsLatitude, IsLongitude, Min, Max } from 'class-validator'

export class CreateReportDto {
    @IsString()
    type: string;
    
    @IsString()
    make: string;
    
    @IsString()
    model: string;
    
    @IsLongitude()
    lng: number;
    
    @IsLatitude()
    lat: number;

    @IsNumber()
    @Min(1)
    @Max(100000)
    price: number;
}