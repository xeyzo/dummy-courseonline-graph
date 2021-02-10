import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port : number = 3000
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`your server runing in port ${port}` )
}
bootstrap();
