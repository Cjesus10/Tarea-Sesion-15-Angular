import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  titulo = 'Data Binding Interpolation';

mostrar = true
valor = "Ocultar"
texto = ""

ver() {
if (this.mostrar === true) {
this.valor = "Mostrar"
this.mostrar = false
} else {
this.valor = "Ocultar"
this.mostrar = true
}
}
}
