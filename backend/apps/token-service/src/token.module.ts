import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../shared/database/database.module';

import { TokenService } from './token.service';
import { tokenProviders } from './token.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [TokenService, ...tokenProviders],
    exports: [TokenService],
})
export class TokenModule {}
