import { Type } from 'class-transformer';
import { IsEnum, IsNumber, Min, Max, IsString, IsUrl, ValidateNested, IsDefined } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

export class ApiConfig {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @Max(65535)
  @Min(0)
  @IsNumber()
  PORT: number;

  @IsString()
  APP_URL: string;

  @IsString()
  DATABASE_URL: string;
}
