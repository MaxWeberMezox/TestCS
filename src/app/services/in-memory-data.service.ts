import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})

export class InMemOwnerService implements InMemoryDbService {
  createDb() {
    let owners = [
      {
        id: 1, aFirstName: 'Иван', aLastName: 'Иванов', aMiddleName: 'Иванович', aCars: [{
          carNumber: 'AX4321BI', brand: 'Hyundai', model: 'Accent', year: 2010,
        }]
      },
      {
        id: 2, aFirstName: 'Петро', aLastName: 'Петров', aMiddleName: 'Петрович', aCars: [
          {
            carNumber: 'DC4321VB', brand: 'Ferrari', model: 'LaFerrari', year: 2019,
          }]
      },
      {
        id: 3, aFirstName: 'Ивана', aLastName: 'Иванова', aMiddleName: 'Ивановна', aCars: [{
          carNumber: 'DS4321VB', brand: 'Volvo', model: 's90', year: 2021,
        }]
      },
      {
        id: 4, aFirstName: 'Петунья', aLastName: 'Петрова', aMiddleName: 'Петровна', aCars: [{
          carNumber: 'QQ4321RR', brand: 'Ford', model: 'Fusion', year: 2014,
        }]
      },
      {
        id: 5, aFirstName: 'Сидр', aLastName: 'Сидоров', aMiddleName: 'Сидорович', aCars: [{
          carNumber: 'WE4892RT', brand: 'Ford', model: 'Fusion', year: 2017,
        },
          {
            carNumber: 'JK1292AS', brand: 'SDA', model: 'dgfds', year: 1995,
          },
        ]
      },
      {
        id: 6, aFirstName: 'Антон', aLastName: 'Алексеев', aMiddleName: 'Игоревич', aCars: [{
          carNumber: 'OP4721IB', brand: 'Ford', model: 'Fusion', year: 2018,
        }]
      },
      {
        id: 7, aFirstName: 'Михаил', aLastName: 'Марченко', aMiddleName: 'Виталиевич', aCars: [{
          carNumber: 'PI4361IO', brand: 'Ford', model: 'Fusion', year: 2017,
        }]
      },
    ];
    return {owners};
  }
}
