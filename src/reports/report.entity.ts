import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from  'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    price: number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    lng: number;

    @Column()
    lat: number;

    @ManyToOne(() => User, (user) => user.reports)
    user: User;

    @Column({ default: false })
    approved: boolean;
}