import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { User } from 'src/users/user.entity';
import { GetEstimateDto } from './dtos/get-estimate.dto';

@Injectable()
export class ReportsService {
    constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

    create(reportDto: CreateReportDto, user: User) {
        const report = this.repo.create(reportDto)
        report.user = user;
        return this.repo.save(report)
    }

    async changeApproval(id: string, approved: boolean) {
        const report = await this.repo.findOne({ where: { id: parseInt(id) } }) 
        if (!report) {
            throw new NotFoundException('Report not found')
        }

        report.approved = approved;
        return this.repo.save(report)
    }

    async createEstimate(estimateDto: GetEstimateDto) {
        return this.repo.createQueryBuilder()
            .select('AVG(price)', 'price')
            .where('type = :type', { type : estimateDto.type})
            .andWhere('make = :make', { make : estimateDto.make})
            .andWhere('model = :model', { model : estimateDto.model})
            .andWhere('lng - :lng BETWEEN -5 AND 5', { lng : estimateDto.lng})
            .andWhere('lat - :lat BETWEEN -5 AND 5', { lat : estimateDto.lat})
            .andWhere('approved IS TRUE')
            .limit(3)
            .getRawOne()
    }
}
