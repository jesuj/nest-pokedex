import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // para q sea un prefix global 
  // http://localhost:3000/api/v2/pokemon/1
  app.setGlobalPrefix('api/v2')
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true,
    transformOptions:{
      enableImplicitConversion: true
    }
  }))
  await app.listen(3000);
}
bootstrap();
