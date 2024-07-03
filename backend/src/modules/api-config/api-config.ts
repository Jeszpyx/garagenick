import { IsEnum, IsNumber, Min, Max, IsString, IsUrl } from 'class-validator';

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
  HOST_URL: string
}
