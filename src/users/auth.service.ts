import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async signup(email: string, password: string) {
        // See if email is in use
        const users = await this.usersService.find(email)
        if (users.length) {
            throw new BadRequestException('Email in use')
        }
        // Hash user password
        // Generate salt
        const salt = randomBytes(8).toString('hex');

        // Hash Salt and password together
        const hash = (await scrypt(password, salt, 32)) as Buffer

        // Join Hashed result and the Salt together
        const result = salt + "." + hash.toString('hex')

        // Create new user and save it
        const user = await this.usersService.create(email, result);

        // return the user
        return user
    }

    async signin(email: string, password: string) {
        // Check if a user with the provided email exists (Returns an array, but we only need one user)
        const [user] = await this.usersService.find(email)
        if (!user) {
            throw new NotFoundException('User not found')
        }

        // Extract the salt and stored password hash from the stored encrypted password
        const [salt, storedHash] = user.password.split('.')
        const hash = (await scrypt(password, salt, 32)) as Buffer;

         // Compare the stored hash with the newly generated hash
        if (storedHash !== hash.toString('hex')) {
            // Throw exception if the passwords do not match
            throw new BadRequestException('Bad password')
        } 

        // Return the user object if sign-in is successful
        return user;
    }
}
