import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { JwtGuard } from './guards/jwt.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET_KEY,
                signOptions: { expiresIn: '3600s' }
            })
        }),
        TypeOrmModule.forFeature([]) // Entity 주입
    ],
    providers: [JwtGuard, JwtStrategy, RolesGuard],
    controllers: [], //AuthController
    exports: [] //AuthService
})
export class AuthModule { }