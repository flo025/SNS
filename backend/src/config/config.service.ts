import { Injectable } from '@nestjs/common';
import * as dotEnv from 'dotenv';
import { readFileSync } from 'fs';
import * as path from 'path';

type envNames =
  | 'MYSQL_HOST'
  | 'MYSQL_PORT_INTERN'
  | 'MYSQL_PORT_EXTERN'
  | 'MYSQL_USER'
  | 'MYSQL_PASSWORD'
  | 'MYSQL_DATABASE'
  | 'NODE_URL'
  | 'NODE_PORT_INTERN'
  | 'NODE_PORT_EXTERN'
  | 'FRONT_URL'
  | string;

const ENV_CONFIGS = [
  {
    folder: 'mysql',
    key: 'MYSQL_ENV',
  },
  {
    folder: 'node',
    key: 'NODE_ENV',
  },
];

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key in envNames]: string };

  constructor() {
    this.envConfig = process.env;
    if (!process.env.ENV_LOAD) {
      const DEFAULT_ENV_FILE = path.resolve(__dirname, `../../.env`);
      Object.assign(
        this.envConfig,
        dotEnv.parse(readFileSync(DEFAULT_ENV_FILE)),
      );
      for (const { folder, key } of ENV_CONFIGS) {
        const ENV_FOLDER = `../../environments/${folder}`;
        const ENV_FILE = path.resolve(
          __dirname,
          ENV_FOLDER,
          `${process.env[key] || ''}.env`,
        );
        Object.assign(this.envConfig, dotEnv.parse(readFileSync(ENV_FILE)));
      }
    }
  }

  get(key: envNames): string {
    return this.envConfig[key];
  }
}
