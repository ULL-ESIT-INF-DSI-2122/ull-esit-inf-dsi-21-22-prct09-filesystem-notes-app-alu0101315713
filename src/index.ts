import * as yargs from 'yargs';
import * as fs from 'fs';
import {Nota} from './notas';
import * as chalk from 'chalk';

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
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.body === 'string' &&
    typeof argv.color === 'string' && typeof argv.user === 'string') {
      // Required logic to add a new note
      const nota = new Nota(argv.title, argv.body, 'verde');
      fs.mkdir(`./notas/${argv.user}`, (err) => {
        if (err) {
          console.log(chalk.red('Something went wrong when writing your file'));
        } else {
          console.log(chalk.green('Note added successfully'));
        }
      // const nota = new Nota(argv.title, argv.body, argv.color);
      // const notas = Nota.getNotas();
      // notas.push(nota);
      // Nota.saveNotas(notas);
      });
      fs.writeFile(`src/notas/${argv.user}/${argv.title}.json`, JSON.stringify(nota), (err) => {
        if (err) {
          console.log('Something went wrong when writing your file');
        } else {
          console.log('File has just been created');
        }
      });
    }
  },
});

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
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      // Required logic to remove a note
      fs.unlink(`src/notas/${argv.user}/${argv.title}.json`, (err) => {
        if (err) {
          console.log('Something went wrong when writing your file');
        } else {
          console.log('File removed successfully');
        }
      });
    }
  },
});

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
  handler(argv) {
    if (typeof argv.user === 'string') {
      // Required logic to list all notes
      fs.readdir(`src/notas/${argv.user}`, (err, files) => {
        if (err) {
          console.log('Something went wrong when reading your file');
        } else {
          console.log('List of notes:');
          files.forEach((file) => {
            console.log(file);
          });
        }
      });
    }
  },
});

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
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      // Required logic to read a note
      fs.readFile(`src/notas/${argv.user}/${argv.title}.json`, (err, data) => {
        if (err) {
          console.log('Something went wrong when reading your file');
        } else {
          console.log(data.toString());
        }
      });
    }
  },
});

yargs.parse();
