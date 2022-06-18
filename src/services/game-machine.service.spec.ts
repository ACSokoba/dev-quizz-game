/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameMachineService } from './game-machine.service';

describe('Service: GameMachine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameMachineService]
    });
  });

  it('should ...', inject([GameMachineService], (service: GameMachineService) => {
    expect(service).toBeTruthy();
  }));
});
