console.log('Starting notes.js');

//console.log(module);
const fs= require('fs');

var fetchNotes =()=>{
  try {
    var notesString=fs.readFileSync('notes-data.json'); //if it is not "notes-data.json" file this doesn't read
    return JSON.parse(notesString);
  } catch (e) {
      return [];
  }
};

var saveNotes=(notes)=>{
fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote =(title,body)=>{
// console.log('Adding note',title,body);
var notes =fetchNotes(); //array
var note ={   //json object
  title,
  body
};







var duplicateNotes =notes.filter((note) =>{
return note.title===title;
saveNotes();
});
notes.push(note);


};
var getAll =()=>{
console.log("Getting All notes");
};

var getNote=(title)=>{
  console.log("getting note",title);
};
var removeNote=(title)=>{
  console.log("Removing note",title);
};
module.exports={

addNote,
getAll,
getNote,
removeNote

};
