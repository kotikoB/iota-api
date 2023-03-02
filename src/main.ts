import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('IOTA-Docs')
        .setDescription('Supply chain API')
        .setVersion('1.0')
        .build();

    app.enableCors({
        origin: 'http://localhost:3000',
    });

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);
    await app.listen(3030);
}
bootstrap();
