import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    httpsOptions: {
      key: readFileSync(resolve(__dirname, "../cert/key.pem")),
      cert: readFileSync(resolve(__dirname, "../cert/cert.pem"))
    },
  });
  app.enableCors()

  await app.listen(443);
}
bootstrap();
