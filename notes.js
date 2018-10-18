console.log('Starting notes.js');

//console.log(module);
const fs= require('fs');

var addNote =(title,body)=>{
// console.log('Adding note',title,body);
var notes =[]; //array
var note ={   //json object
  title,
  body
};

var fetchNotes =()=>{
  try {
    var notesString=fs.readFileSync('notes-data.json'); //if it is not "notes-data.json" file this doesn't read
    return JSON.parse(notesString);
  } catch (e) {
      return [];
  }
};

var saveNotes=(notes)=>{

};



var duplicateNotes =notes.filter((note) =>{
return note.title===title;

});
notes.push(note);
fs.writeFileSync('notes-data.json',JSON.stringify(notes));

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
