// const fs=require('fs');
// const add=require('./utils.js');
// fs.writeFileSync('notes.txt','This file is created with node.js!');
// fs.appendFileSync('notes.txt',' challenge to append something to file');

// const sum=add(4,2);
// console.log(sum);
//NODE MODULES
//const validator=require('validator');

const yargs=require('yargs');
const chalk=require('chalk');
const notes=require('./notes.js');
const { argv, demandOption } = require('yargs');

//const printNotes=getNotes();
//console.log(printNotes);
// console.log(validator.isEmail('sa@gmail.com'));
// console.log(validator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#overview'));
//console.log(chalk.bold.blue.inverse('Success'));

//Command Line Argument
// console.log(process.argv);
// console.log(process.argv[2]);

//creating command
yargs.command({
    command:'add',
    describe:'Add a note!',
    builder:{
        title:{
            describe:'Add a title',
            demandOption:true,
            type :'string'
        },
        body:{
         describe:'Add a Body',
         demandOption:true,
         type :'string'   
        }
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body);
    }
}) ;
yargs.command({
    command:'remove',
    describe:'Remove a note!',
    builder:{
        title:{
            describe:'Please Provide the Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command:'read',
    describe:'Read a Note',
    builder:{
        title:{
            describe:'please provide the title',
            demandOption:true,
            type:'string'
        }

    },
    handler:function(){
        notes.readNote(argv.title);
    }

});
yargs.command({
    command:'List',
    describe:'List a Note',
    handler:function(){
        notes.listNotes();
    }
});
// Using yargs module
//console.log(yargs.argv);
yargs.parse();
