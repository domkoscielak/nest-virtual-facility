import { NestFactory } from '@nestjs/core';
import { WorkflowServiceModule } from './workflow-service.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkflowServiceModule);
  await app.listen(3001);
}
bootstrap();
