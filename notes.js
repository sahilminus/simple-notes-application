const fs=require('fs'); 
const chalk=require('chalk');

const getNotes=()=>{console.log('yourNotes')};

const addNotes=function(title,body){
 const notes=loadNotes();
 const duplicateNotes=notes.filter((note)=> note.title===title);
 
 if(duplicateNotes.length===0){
    notes.push({
        title:title,
        body:body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Note added Successfully'));
 }
 else{
     console.log(chalk.red.inverse('Note Title already taken '));
    }
}

const saveNotes=function(notes){
const dataJSON=JSON.stringify(notes);
fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes=function(){
    try{
    const dataBuffer=fs.readFileSync('notes.json');
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON);
   }
catch(e){
    return [];
}
}

const removeNotes=function(title){
const notes=loadNotes();

const isNote=notes.filter((note)=>note.title!=title);
if(isNote.length!==notes.length){
    saveNotes(isNote);
    console.log(chalk.green.inverse('Note Removed'));
}
else{
    console.log(chalk.red.inverse('Note not found'));
}
}

const listNotes=function(){
    console.log(chalk.inverse('Your Notes!'));
    const notes=loadNotes();
    notes.forEach((note)=>console.log(note));

}
const readNote=function(title){
   const notes=loadNotes();
   const isNote=notes.find((note)=>note.title===title);
   if(isNote){
       console.log(chalk.inverse(isNote.title));
       console.log(isNote.body);
   }
   else{
       console.log(chalk.red.inverse('Note not found'));
   }
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
};