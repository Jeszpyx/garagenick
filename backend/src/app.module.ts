import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiConfigModule } from './modules/api-config/api-config.module';

@Module({
  imports: [ApiConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
