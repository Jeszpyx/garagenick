import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiConfig } from './api-config';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  get<K extends keyof ApiConfig>(key: K): ApiConfig[K] {
    return this.configService.get(key);
  }
}
