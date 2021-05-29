const fs = require('fs');  // fs is a const whith value that is returned by require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"..", "public")));

//Routing 
// when the string is match run the function pass as its second parameter.
// '/api/notes' run 

const returnNotes = function (req, res){
    all((data)=> {
        res.send(JSON.stringify(data));
    });
}

const savingNotes = function (req, res) {
    save(req.body, (err) => {
        let message = 'Error while saving';
        if (err === null ) {
            message = `saved!`;
        }
        res.send(message);
    });
}

const deleteNote = function (req, res) {
    removeNote(req.params.id, (err) => {
        let message = 'Error while deleting';
        if (err === null ) {
            message = `deleted!`;
        }
        res.send(message);
    })
}

app.get('', (req, res) =>{
    res.sendFile(path.normalize( __dirname + '/../public/index.html'));
});
app.get('/notes', (req,res)=>{
    res.sendFile(path.normalize( __dirname + '/../public/notes.html'));
});
app.get('/assets/js/index.js', (req,res)=>{
    res.sendFile(path.normalize( __dirname + '/../public/assets/js/index.js'));
});

app.get('/api/notes', returnNotes);
app.post('/api/notes', savingNotes);
app.delete('/api/notes/:id', deleteNote);


app.listen(3000);


// HERE IS THE CODE TO SAVE THE THE DB.JSON FILE


//Save a note to the file.
//First it reads from the file all notes.
//Add the new note to the array of notes.
//Save the updated array.
function save(note, callback){  // note { id:, title: , text: }
    retriveDataFromFile((currentNotes)=>{
        currentNotes.push({...note, id: currentNotes.length++}); // adding new note to list 
        saveDataToFile(currentNotes, callback);
    });
}

//Returns all notes from the file.
function all(callback){
    retriveDataFromFile((data)=>{
        callback(data);
    });
}

// To delete a note we need 
// read all notes from file. 
// remove it from array
// save array to file.
function removeNote(noteId, callback){
    retriveDataFromFile((currentNotes)=>{
        //find note in current notes list
        let newListOfNotes = removeItemFromArray(currentNotes, currentNotes.find( (item) => item.id == noteId ));
        //Now we need to save the new list of notes into the file
        saveDataToFile(newListOfNotes, callback);
    });
}

function retriveDataFromFile(callback){
    let allNotes = [];
    fs.readFile(path.normalize(__dirname + '/../db/db.json'), function (err,data){
        if (err || data.length === 0) {
            allNotes = []
        } else {
            allNotes = JSON.parse(data);
        }
        callback(allNotes);
    });
}

function saveDataToFile(data, callback){
    fs.writeFile(path.normalize(__dirname + '/../db/db.json'), JSON.stringify(data), (err) => callback(err) );
}

//Helper functions
// Remove item from array
function removeItemFromArray(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

// The challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.


/*
const sayInEnglish = function (bla) { // bla is of type string
    console.log(`you said ${bla}`);
}
const sayInFrench = function (bla) { // bla is of type string
    console.log(`fasdlkfjds ${bla}`);
}
// theFunctionYoWantToCall has to be like this (string) => {}
// (string) => {}; function ANY_NAME (string){};
// first one string, second one a function with a string parameter
// Function signature: List and type of parameters.
function speaker(whatDoyouWantToSay, theFunctionYoWantToCall){ 
    theFunctionYoWantToCall(whatDoyouWantToSay);
}
speaker('hello', sayInEnglish);
speaker('hello', sayInFrench);
//How to defined a function in JS
/*
    function  FUNCTION_NAME(hola){
    }
    const/var/let FUNCTION_NAME = function (hola) {}; 
    const/var/let FUNCTION_NAME = (hola) => {};
*/