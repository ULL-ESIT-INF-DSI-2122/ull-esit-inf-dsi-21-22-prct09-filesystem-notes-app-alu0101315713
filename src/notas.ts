// Una nota estará formada, como mínimo, por un título, un cuerpo y un color (rojo, verde, azul o amarillo).

export class Nota {
  private libroNotas: Nota[] = [];
  constructor(
        public titulo: string,
        public cuerpo: string,
        public color: string,
        public id?: number,
  ) {}
  getTitulo(): string {
    return this.titulo;
  }
  getCuerpo(): string {
    return this.cuerpo;
  }
  getColor(): string {
    return this.color;
  }
  getId(): number|undefined {
    return this.id;
  }
  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }
  setCuerpo(cuerpo: string): void {
    this.cuerpo = cuerpo;
  }
  setColor(color: string): void {
    this.color = color;
  }
  setId(id: number): void {
    this.id = id;
  }
  saveNotas(notas: Nota[]): void {
    notas.push(this);
  }
  static getNotas(notas: Nota[]): Nota[] {
    return notas;
  }
  static deleteNota(nota: Nota): void {
    const index = nota.libroNotas.indexOf(nota);
    nota.libroNotas.splice(index, 1);
  }
}
