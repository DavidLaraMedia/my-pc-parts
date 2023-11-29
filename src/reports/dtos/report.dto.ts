import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
    @Expose()
    id: number;

    @Expose()
    type: string;
    
    @Expose()
    make: string;
    
    @Expose()
    model: string;
    
    @Expose()
    lng: number;
    
    @Expose()
    lat: number;

    @Expose()
    price: number;

    @Expose()
    approved: boolean;

    @Transform(({ obj }) => obj.user.id)
    @Expose()
    userId: number;
}