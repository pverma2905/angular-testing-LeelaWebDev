import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  // it('demo', () => {
  //   // fail()
  // });

  // it('demo1', () => {
  //   pending()
  // });

  // xit('demo2', () => {
  //   expect()
  // });



  it('should add two number', () => {
    let logger = jasmine.createSpyObj('LoggerService', ['log']);
    let calculator = new CalculatorService(logger);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two number', () => {
    let logger = jasmine.createSpyObj('LoggerService', ['log']);
    let calculator = new CalculatorService(logger);
    let result = calculator.subtract(2,2);
    expect(result).toBe(0);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
