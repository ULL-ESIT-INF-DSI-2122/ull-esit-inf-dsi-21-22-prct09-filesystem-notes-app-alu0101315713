// import {Nota} from './notas';

// // Hacemos una colleccion de notas
// export class Usuario {
//   private notas: Nota[];
//   constructor(private nombre: string, private apellido: string, private edad: number, private nota: Nota[]) {
//     this.notas = nota;
//     this.notas.forEach((nota) => this.add(nota));
//   }
//   getNombre(): string {
//     return this.nombre;
//   }
//   getApellido(): string {
//     return this.apellido;
//   }
//   getEdad(): number {
//     return this.edad;
//   }
//   getNota(): Nota[] {
//     return this.notas;
//   }
//   setNombre(nombre: string): void {
//     this.nombre = nombre;
//   }
//   setApellido(apellido: string): void {
//     this.apellido = apellido;
//   }
//   setEdad(edad: number): void {
//     this.edad = edad;
//   }
//   setNota(nota: Nota[]): void {
//     this.notas = nota;
//   }
//   saveNotas(): void {
//     const notas = Nota.getNotas();
//     notas.push(this);
//     Nota.saveNotas(notas);
//   }
//   //   getNotas(): Nota[] {
//   //     const notas = Nota.getNotas();
//   //     return notas;
//   //   }
//   //   static getNotas(): Nota[] {
//   //     const notas = JSON.parse(localStorage.getItem('notas')!);
//   //     return notas === null ? [] : notas;
//   //   }
//   getNotas(title: string): Nota|undefined {
//     return this.notas.find((nota) => nota.getTitulo() === title);
//   }
//   add(nota: Nota): void {
//     this.notas.push(nota);
//   }
//   remove(nota: Nota): void {
//     this.notas = this.notas.filter((nota) => nota.getTitulo() !== nota.getTitulo());
//   }
// }
