import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['log', 'warn', 'error'],
  });

  const appService = app.get(AppService);

  await app.listen(3000).then(() => {
    const server = app.getHttpServer();
    const router = server._events.request._router;
    appService.path = router.stack
      .map((layer) => {
        if (layer.route) {
          return {
            path: layer.route?.path,
            method: layer.route?.stack[0].method,
          };
        }
      })
      .filter((item) => item !== undefined);
  });
}
bootstrap();
