const write = require('./write')
const read = require('./read')
const add = require('./add')
const del = require('./del')
const update = require('./update')

const cmd = process.argv

//write()

//console.log(read())

var note = {}

if(cmd[2] == 'add') {
    // Build Object
    note = { 
        id: cmd[3],
        name: cmd[4],
        gender: cmd[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
}

if(cmd[2] == 'read') {
    // Import present
    const present = require('./present')
    
    present(read())
}

if(cmd[2] === 'delete') {
    let id = cmd[3]
    let oldNote = read()
    let del = require('./del')

    del(id, oldNote)

    console.log(read())
}
if(cmd[2] === 'update') {
        
    let id = { 
        id: cmd[3],
        name: cmd[4],
        gender: cmd[5]
    }           
    let oldNote = read()
    update(id, oldNote)
}