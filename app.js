const yargs=require('yargs');
const chalk=require('chalk');
const notes=require('./notes.js');
const { argv, demandOption } = require('yargs');

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
