import { Test, TestingModule } from '@nestjs/testing';
import { CentrifugalController } from './centrifugal.controller';

describe('CentrifugalController', () => {
  let controller: CentrifugalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentrifugalController],
    }).compile();

    controller = module.get<CentrifugalController>(CentrifugalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
