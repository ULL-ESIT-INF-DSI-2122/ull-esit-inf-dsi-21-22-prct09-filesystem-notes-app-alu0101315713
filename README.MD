# Autor: Felipe Gómez Fuentes

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713/actions/workflows/coverall.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713/actions/workflows/coverall.yml) [![Test](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713/actions/workflows/node.js.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713)

- [Autor: Felipe Gómez Fuentes](#autor-felipe-gómez-fuentes)
- [0. Github Pages](#0-github-pages)
- [1. Práctica 9 - Aplicación de procesamiento de notas de texto.](#1-práctica-9---aplicación-de-procesamiento-de-notas-de-texto)
- [2. Tareas Previas.](#2-tareas-previas)
- [3. Para empezar.](#3-para-empezar)
- [4. Aplicación](#4-aplicación)
  - [4.1 - Clase Nota](#41---clase-nota)
- [4.2 - Uso de yargs y chalk](#42---uso-de-yargs-y-chalk)
- [5. Conclusiones](#5-conclusiones)
- [6. Bibliografía](#6-bibliografía)

# 0. Github Pages
- Si desea verlo en Pages, consulte [aquí](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713/).

# 1. Práctica 9 - Aplicación de procesamiento de notas de texto.
- En este [repositorio](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct09-filesystem-notes-app-alu0101315713) donde haré un resumen haciendo una descripción de todos los pasos para el procedimiento de esta práctica. La práctica consiste en hacer una serie de ejercicios siguiendo la [estructura básica de proyecto](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html) que se vio en clase, incluyendo todos los dichos archivos en el directorio [src](src/) que contiene la aplicación.

# 2. Tareas Previas.
- Para empezar es necesario realizar antes una serie de tareas previas que nos van a permitir tener las bases para poder configurar un entorno de trabajo adecuado de cara a la realización del informe, por ejemplo haber realizado la Práctica 1, que puede revisar [aquí](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct01-iaas-alu0101315713/), tener leído y aprendido los conocimientos necesarios sobre [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), [Jekyll](https://jekyllrb.com/) y [GitHub Pages](https://lab.github.com/githubtraining/github-pages), además de la lectura de los tutoriales [sobre los métodos que puede utilizar con string](https://www.w3schools.com/js/js_string_methods.asp) y sobre [expresiones regulares en JavaScript](https://www.w3schools.com/js/js_regexp.asp), los [apuntes de Arrays, tuplas y enumerados](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-arrays-tuples-enums.html), los [apuntes de Objetos, clases e interfaces](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-objects-classes-interfaces.html) documentación en [Typedoc](https://typedoc.org/), hacer pruebas unitarias con [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Coveralls](https://coveralls.io/) para la correcta elaboración del mismo y [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html) para escribir código más limpio. A continuación se mostrará una tabla con las tareas previas realizadas (en mi caso):

| Tareas Previas Realizadas.|
| ----- |
|- Aceptar la asignación de GitHub Classroom asociada a esta práctica.|
|- Leer los recursos sobre Markdown, pues es el lenguaje para escribir las prácticas.|
|- Leer los recursos sobre Jekyll, para transformar los ficheros de texto en sitios Web.|
|- Leer los recursos sobre GitHub Pages, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Strings, por si se necesita algún concepto para aprender.|
|- Leer los recursos sobre Arrays, tuplas y enumerados, por si se necesita algún concepto para aprender.|
|- Leer los recursos sobre Objetos, clases e interfaces, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre TypeDoc, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Mocha, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Chai, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Coverall, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre node, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre el manejo de ficheros en node, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre SOLID, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre yargs, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre chalk, por si se necesita algún curso para aprender.|


# 3. Para empezar.
- Los ejercicios deben de cumplir la [estructura básica de proyecto](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html) mencionada anteriormente, e incluiremos la aplicación en el directorio [./src](src/). Una vez instaladas las dependencias de Mocha, Chai, Coveralls, TypeDoc, node, yargs y chalk se deberá de hacer la documentación de TypeDoc en la carpeta [./docs](docs/) y la metodología TDD en la carpeta [./tests](tests/).

# 4. Aplicación

## 4.1 - Clase Nota
- La clase Nota crea un objeto con los atributos que nos indica en enunciado: titulo, cuerpo y color, además, añadí un atributo extra id, que se puede poner o no, y que puede servir más adelante.
```ts
private libroNotas: Nota[] = [];
  constructor(
        public titulo: string,
        public cuerpo: string,
        public color: string,
        public id?: number,
  ) {
    this.saveNotas(this.libroNotas);
  }
```
- Luego añadí funciones públicas para mayor comodidad a la hora de acceder los atributos:
```ts
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
```

- Además, hice los métodos `saveNotas`, `getNotas` y `deleteNota`, siendo éstos dos últimos métodos estáticos pars que no den problemas a la hora de recorrer arrays de objetos de tipo Nota:

```ts
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
```

# 4.2 - Uso de yargs y chalk

- Para añadir los comandos a la aplicación, hay que hacer uso de yargs. Como vamos a crear, leer, modificar y eliminar ficheros (en este caso de tipo JSON), también usaremos la librería fs.

- De tal forma que, para el primer comando, se hizo de esta forma:
```ts
import * as yargs from 'yargs';
import * as fs from 'fs';
import {Nota} from './notas';
import chalk from 'chalk';

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
```
- En esta parte, se puede ver que para el uso del comando, se hará del estilo `add --user="nombre usuario --title="titulo de la nota" --body="mensaje de la nota" --color="color de la nota"`. Además, la información de la descripción de cada atributo aparecerá al usar el comando `help` que ofrece yarg por defecto (también cuando se emplea erróneamente el comando). Por último, también sale el tipo de dato para cada atributo.

```ts
handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.body === 'string' &&
    typeof argv.color === 'string' && typeof argv.user === 'string') {
      // Required logic to add a new note
      const nota = new Nota(argv.title, argv.body, argv.color);
      if (`src/notas/${argv.user}/${argv.title}.json`) {
        console.log(chalk.red(`src/notas/${argv.user}/${argv.title} already exists!`));
      } else {
        fs.mkdir(`src/notas/${argv.user}`, (err) => {
          if (`src/notas/${argv.user}`) {
            fs.writeFile(`src/notas/${argv.user}/${argv.title}.json`, JSON.stringify(nota), (err) => {
              if (err) {
                console.log(chalk.red(err));
              } else {
                console.log(chalk.green('Note added successfully'));
              }
            });
          } else {
            console.log(chalk.red(err));
          }
        });
      }
    }
  },
});
```
- En esta otra parte del código para el `add` se recogen los atributos, se revisa el tipo de dato que se escribe, y creamos el objeto Nota con los atributos dados. Una vez creado se revisa si la nota ya existe, en caso de que ya exista, saldrá un mensaje en rojo `indicando que ya existe`. En caso contrario, crea el JSON haciendo uso de las funcines mkdir y writeFile propias de la librería fs. Con `mkdir` creamos el directorio para el usuario, en caso de que ya exista, no pasará nada. Una vez creado hacemos uso del writeFile para crear el archivo y escribir lo que el usuario quiera en forma de JSON.

- Para el resto de comandos, la parte de `yargs.command` es bastante similar, así que iremos viendo la parte de `handler(argv)` que es donde realmente varía el código.

```ts
handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      // Required logic to remove a note
      fs.unlink(`src/notas/${argv.user}/${argv.title}.json`, (err) => {
        if (err) {
          console.log(chalk.red('Something went wrong when writing your file'));
        } else {
          console.log(chalk.green('File removed successfully'));
        }
      });
    }
  },
```

- En este caso, el comando `remove` tiene como argumentos el nombre de usuario y el título de la nota. Con la función `unlink` eliminará el contenido seleccionado por argumento que se encuentre en el directorio. Esta función solo será útil si el directorio tiene contenido, por eso tanto en este comando como en todos, hago condiciones también para que en los errores salga un mensaje de error.

```ts
handler(argv) {
    if (typeof argv.user === 'string') {
      // Required logic to list all notes
      fs.readdir(`src/notas/${argv.user}`, (err, files) => {
        if (err) {
          console.log(chalk.red('Something went wrong when reading your file'));
        } else {
          console.log('List of notes:');
          files.forEach((file) => {
            fs.readFile(`src/notas/${argv.user}/${file}`, 'utf8', (err, data) => {
              if (err) {
                console.log(chalk.red(('Something went wrong when reading your file')));
              } else {
                const obj = JSON.parse(data.toString());
                switch (obj.color) {
                  case 'rojo':
                    console.log(chalk.red(obj.titulo));
                    break;
                  case 'verde':
                    console.log(chalk.green(obj.titulo));
                    break;
                  case 'azul':
                    console.log(chalk.blue(obj.titulo));
                    break;
                  case 'amarillo':
                    console.log(chalk.yellow(obj.titulo));
                    break;
                  // default:
                  //   console.log(obj.titulo);
                }
              }
            });
          });
        }
      });
    }
  },
```

- Para el comando `list`, solo busco el nombre del usuario, con esta información hago uso de la función `readdir` para leer el directorio, y un forEach para revisar todos los ficheros del directorio (que siempre tendrá el nombre del usuario) con la función ``readFile`, que junto a un switch que revisa el atributo "color" de cada nota, indico haciendo uso de chalk el nombre de cada archivo del color que tenga como atributo. Encaso de existir algún error, saldrá un aviso en rojo.

```ts
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      // Required logic to read a note
      fs.readFile(`src/notas/${argv.user}/${argv.title}.json`, (err, data) => {
        const obj = JSON.parse(data.toString());
        if (err) {
          console.log(chalk.red('Something went wrong when reading your file'));
        } else {
          console.log(chalk.green('El mensaje de la nota es:'));
          console.log(obj.cuerpo);
        }
      });
    }
  },
```

- Para el comando read, pido el nombre de usuario y el título de la nota, para poder hacer uso de `readFile` en las notas y así mostrar el contenido de la nota. En caso de error, saldrá un mensaje indicándolo.

```ts
handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.body === 'string' &&
    typeof argv.color === 'string' && typeof argv.user === 'string') {
      // Required logic to modify a note
      fs.readFile(`src/notas/${argv.user}/${argv.title}.json`, 'utf8', (err, data) => {
        if (err) {
          console.log(chalk.red('Something went wrong when reading your file'));
        } else {
          const obj = JSON.parse(data.toString());
          obj.cuerpo = argv.body;
          obj.color = argv.color;
          fs.writeFile(`src/notas/${argv.user}/${argv.title}.json`, JSON.stringify(obj), (err) => {
            if (err) {
              console.log(chalk.red('Something went wrong when writing your file'));
            } else {
              console.log(chalk.green('Note modified successfully'));
            }
          });
        }
      });
    }
  },
```

- Para el comando modify, se piden todos los atributos se hace uso de la función `readFile`, se comprueba si existe, en caso de que no, slata un mensaje de error, en cas ode que sí, se guarda el objeto del JSON y se reescriben los atributos que le pasa el usuario, que solo pueden ser el mensaje y el color, por último se hace uso de `writeFile` y se escribe.

- **Por último, para que los comandos funcionen, se debe de escribir esta línea:**
```ts
yargs.parse();
```

# 5. Conclusiones

- Los ejercicios han servido como repaso sobre cómo usar las funciones de las strings, el uso de los arrays, tuplas y los enumerados en TypeScript. Hay que tener en cuenta que, para las pruebas TDD, primero hay que tener bien instalado Mocha y Chai, y bien escrito el archivo `.mocharc.json`, que siguiendo este [vídeo](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view) tendría que quedar algo similar o igual a [esto](./.mocharc.json).


- Para el caso de TypeDoc, es necesario, aparte de tener las dependencias instaladas, seguir este [vídeo](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) como ayuda fundamental a tenerlo bien instalado.

- También es interesante el uso de la herramienta Coverall que nos informa los archivos con código fuente en Typescript que se han analizado y que se sacan del fichero [.mocharc.json](./.mocharc.json). Coverall nos indica el cubrimiento que le damos a las funciones, la líneas que no están cubiertas y cuánto % se cubre de las sentencias y las ramas. Para saber instalarlo una buena opción es ver este [vídeo](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view).

- En mi caso Coveralls me da un resultado que se puede consultar entrando en este 94.44%.
```ts
--
All files |   94.44 |      100 |   91.66 |   94.44 |
 notas.ts |   94.44 |      100 |   91.66 |   94.44 | 35
----------|---------|----------|---------|---------|-------------------
```

- Otro factor bastante importante fue hacer uso de los [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html), que fue clave para hacer clases específicas pra métodos específicos, estos principios se usaron en toda la práctica, por ejemplo, en [nota](./src/notas.ts).

- La librería fs ha sido bastante clave para poder manejar los ficheros de manera asíncrona, como se ha explicado en los puntos anteriores.

- Se puede observar que se ha usado las funciones de chalk para imprimir mensajes de colores en todas las funciones. Saldrá verde en caso de que se ejecute correctamente, en rojo de que haya algún fallo, y en el caso del comando `list`, si se ejecuta correctamente, saldrá el nombre de la(s) nota(s) del color que tengan como atributo.

- Para poder hacer buen uso del SonarCloud, tuvo que ser necesario **no usar** la última versión de node (18.0.0), sino que tuve que usar la versión `17.7.2`. De esta forma se pudo realizar tanto las pruebas de Coveralls como el scanner de SonarCloud correctamente.

# 6. Bibliografía
1. [Enunciado Práctica 5](https://ull-esit-inf-dsi-2122.github.io/prct09-filesystem-notes-app/)
2. [Introducción a Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
3. [Recurso sobre GitHub Pages](https://docs.github.com/en/pages)
4. [Página web de Jekyll](https://jekyllrb.com/)
5. [Tutorial métodos con strings](https://www.w3schools.com/js/js_string_methods.asp)
6. [Tutorial expresiones regulares en JavaScript](https://www.w3schools.com/js/js_regexp.asp)
7. [TypeDoc](https://typedoc.org/)
8. [Mocha](https://mochajs.org/)
9.  [Chai](https://www.chaijs.com/)
10. [Eslint](https://eslint.org/)
11. [Coverall](https://coveralls.io/)
12. [Apuntes de introducción a NodeJS](https://ull-esit-inf-dsi-2122.github.io/nodejs-theory/nodejs-intro.html)
13. [Apuntes del sistema de ficheros en NodeJS](https://ull-esit-inf-dsi-2122.github.io/nodejs-theory/nodejs-filesystem.html)
14. [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)
15. [yargs](https://www.npmjs.com/package/yargs)
16. [chalk](https://www.npmjs.com/package/chalk)
