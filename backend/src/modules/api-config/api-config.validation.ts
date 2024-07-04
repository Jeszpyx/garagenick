import { plainToInstance } from 'class-transformer';
import { ApiConfig } from './api-config';
import { ValidationError, validateSync } from 'class-validator';
import { Logger } from '@nestjs/common';

export const validate = (config: Record<string, unknown>) => {
  const logger: Logger = new Logger(`ApiConfig ${validate.name}`)
  const validatedConfig = plainToInstance(ApiConfig, config, {
    enableImplicitConversion: true,
  });
  const errors: ValidationError[] = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    const fieldsWithError: string = errors.map(e => e.property).join(', ')
    logger.fatal(`Приложение не может быть запущено, так как не найдены некоторые необходимые переменные окружения. Для корректной работы приложения требуются следующие переменные:\n${fieldsWithError}`)
  }
  logger.verbose('Проверка конфигурации переменных окружения прошла успешно')
  return validatedConfig;

};
