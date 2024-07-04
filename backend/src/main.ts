import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './modules/api-config/api-config.service';
import { Logger, ValidationPipe } from '@nestjs/common';

async function main() {
  const logger = new Logger(main.name);

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    }),
  );
  app.enableShutdownHooks()
  
  const configService = app.get(ApiConfigService);
  const port = configService.get('PORT');

  await app.listen(port, () => {
    logger.log(`Сервер успешно запущен на ${port} порту.`);
  });
}

main();
