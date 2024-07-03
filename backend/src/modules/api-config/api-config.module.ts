import { Global, Module } from '@nestjs/common';
import { ApiConfigService } from './api-config.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './api-config.validation';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      cache: true,
      validate,
    }),
  ],
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class ApiConfigModule {}
