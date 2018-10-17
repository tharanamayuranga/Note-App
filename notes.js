
console.log('Starting notes.js');

//console.log(module);
const fs= require('fs');

var fetchNotes =()=>{
  try {
    var notesString=fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {

  }
};
var addNote =(title,body)=>{
// console.log('Adding note',title,body);
var notes =[];
var note ={
  title,
  body
};


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
