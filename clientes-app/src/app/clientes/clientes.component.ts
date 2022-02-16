import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
 
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
{id: 1, nombre: 'Ciro 1', apellido: 'Mora', email: 'moramoa1@hotmamama', createAt: '2017-12-11'},
{id: 2, nombre: 'Ciro 2', apellido: 'Mora', email: 'moramoa2@hotmamama', createAt: '2017-12-12'},
{id: 3, nombre: 'Ciro 3', apellido: 'Mora', email: 'moramoa3@hotmamama', createAt: '2017-12-13'},
{id: 4, nombre: 'Ciro 4', apellido: 'Mora', email: 'moramoa4@hotmamama', createAt: '2017-12-14'},
{id: 5, nombre: 'Ciro 5', apellido: 'Mora', email: 'moramoa5@hotmamama', createAt: '2017-12-15'},
{id: 6, nombre: 'Ciro 6', apellido: 'Mora', email: 'moramoa6@hotmamama', createAt: '2017-12-16'},
{id: 7, nombre: 'Ciro 7', apellido: 'Mora', email: 'moramoa7@hotmamama', createAt: '2017-12-17'},
{id: 8, nombre: 'Ciro 8', apellido: 'Mora', email: 'moramoa8@hotmamama', createAt: '2017-12-18'},
{id: 9, nombre: 'Ciro 9', apellido: 'Mora', email: 'moramoa9@hotmamama', createAt: '2017-12-19'},
{id: 10, nombre: 'Ciro 10', apellido: 'Mora', email: 'moramoa10@hotmamama', createAt: '2017-12-20'},
{id: 11, nombre: 'Ciro 11', apellido: 'Mora', email: 'moramoa11@hotmamama', createAt: '2017-12-21'},
{id: 12, nombre: 'Ciro 12', apellido: 'Mora', email: 'moramoa12@hotmamama', createAt: '2017-12-22'}


  ];


  constructor() { }

  ngOnInit(): void {
  }

}
