import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        const response = {
          statusCode: HttpStatus.BAD_REQUEST,
          message: {},
          error: HttpStatus[HttpStatus.BAD_REQUEST],
        };

        errors.forEach((error: ValidationError) => {
          const field = error.property;
          const errorsList = Object.values(error.constraints);
          response.message[field] = errorsList;
        });

        return response;
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
