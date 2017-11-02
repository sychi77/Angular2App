import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let students = [
      { id: 0,  name: 'Zero' },
      { id: 1, name: 'Molly Springer'},
      { id: 2, name: 'Neil Caster'},
      { id: 3, name: 'Bobby Andrews'},
      { id: 4, name: 'Celina Ringer'},
      { id: 5, name: 'Matthew Neil'},
      { id: 6, name: 'Ron Manning' },
      { id: 7, name: 'David Adams'},
      { id: 8, name: 'Drew Ingram'},
      { id: 9, name: 'Silas Maple'},
      { id: 10, name: 'Tony Nader'}
    ];
    return {students};
  }
}