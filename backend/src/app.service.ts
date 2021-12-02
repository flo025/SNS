import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  path: { path: string; method: string }[] = [];
  getPaths(): { path: string; method: string }[] {
    return this.path;
  }
}
