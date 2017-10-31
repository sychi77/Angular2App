import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let students = [
      { id: 0,  name: 'Zero', grade: 5 },
      { id: 11, name: 'Molly Springer', grade: 5 },
      { id: 12, name: 'Neil Caster', grade: 5 },
      { id: 13, name: 'Bobby Andrews', grade: 5 },
      { id: 14, name: 'Celina Ringer', grade: 5 },
      { id: 15, name: 'Matthew Neil', grade: 5 },
      { id: 16, name: 'Ron Manning', grade: 5 },
      { id: 17, name: 'David Adams', grade: 5 },
      { id: 18, name: 'Drew Ingram', grade: 5 },
      { id: 19, name: 'Silas Maple', grade: 5 },
      { id: 20, name: 'Tony Nader', grade: 5 }
    ];
    return {students};
  }
}