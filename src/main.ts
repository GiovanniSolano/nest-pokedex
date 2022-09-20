import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo deja la data que se esta esperando, se remueve la data que no se espera
      forbidNonWhitelisted: true // Muestra errores correspondientes a las propiedades que no se estan esperando
    })
  )

  await app.listen(3000);
}
bootstrap();
