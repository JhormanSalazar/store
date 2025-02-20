import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    //No async, no se pueden usar promesas dentro de un constructor
    //Esto corre ANTES de que el componente se muestre en la pantalla del usuario
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){ //Este metodo recibe los cambios, de tipo SimpleChanges, que basicamente se entiende por CUALQUIER cambio.
    // Esto corre antes y durante se renderiza el componente
    console.log('ngOnChanges');
    console.log(changes); // Podemos realizar operaciones con los cambios que nos lleguen
    console.log('-'.repeat(10));
  }

  ngOnInit() { //Este metodo solo se ejecuta una vez, y es después de que se renderiza el componente.
    //Es excelente para ejecutar promesas o procesos Async.
    console.log('ngOnInit');
    console.log('Estado de duration =>', this.duration);
    console.log('Estado de message =>', this.message);
    console.log('-'.repeat(10));
  }

  ngAfterViewInit() { // Se ejecuta despues de renderizarse el componente. Y se encarga de verificar cuando un componente "hijo" o los componentes "hijos" ya renderizaron.
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() { // Este evento se ejecuta solo cuando el componente es destruido, una manera de destruirlo es con un ngIf, si no se cumple la condicion, no se muestra el componente (y por tanto, se destruye).
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
