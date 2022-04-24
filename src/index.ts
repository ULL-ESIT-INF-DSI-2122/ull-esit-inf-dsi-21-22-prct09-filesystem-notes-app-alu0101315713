import * as yargs from 'yargs';
import * as fs from 'fs';
import {Nota} from './notas';
import chalk from 'chalk';

/**
 * @param notas array de notas
 * @param id id de la nota
 * @param titulo titulo de la nota
 * @param cuerpo mensaje de la nota
 * @param color color de la nota
 * @param comando comando a ejecutar
 * @param argv argumentos del comando
 * @param nota nota a editar
 */
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
  /**
   * @param argv argumentos del comando
   */
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
/**
 * @param notas array de notas
 * @param newTitle nuevo titulo de la nota
 * @param newBody nuevo cuerpo de la nota
 * @param newColor nuevo color de la nota
 * @param newUser nuevo usuario de la nota
 * @param newId nuevo id de la nota
 * @param comando comando a ejecutar
 * @param argv argumentos del comando
 * @param nota nota a eliminar
 */
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
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
  },
  /**
   * @param argv argumentos del comando
   */
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
});

/**
 * @param user nombre usuario
 * @param argv argumentos del comando
 * @param notas notas a listar
 */
yargs.command({
  command: 'list',
  describe: 'List all notes',
  builder: {
    user: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
  },
  /**
   * @param argv argumentos del comando
   */
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
});

/**
 * @param user nombre usuario
 * @param titulo titulo de la nota
 * @param comando comando a ejecutar
 * @param argv argumentos del comando
 * @param cuerpo mensaje de la nota
 */
yargs.command({
  command: 'read',
  describe: 'Read a note',
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
  },
  /**
   * @param argv argumentos del comando
  */
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
});

/**
 * @param notas array de notas
 * @param id id de la nota
 * @param titulo titulo de la nota
 * @param cuerpo mensaje de la nota
 * @param color color de la nota
 * @param comando comando a ejecutar
 * @param argv argumentos del comando
 * @param notas notas a listar
 * @param newBody nuevo cuerpo de la nota
 * @param newColor nuevo color de la nota
 */
yargs.command({
  command: 'modify',
  describe: 'Modify a note',
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
  /**
   * @param argv argumentos del comando
   */
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
});

yargs.parse();
