const _note_key = Symbol('key');
const _note_title = Symbol('title');
const _note_body = Symbol('body');

//Creating a Symbol instance is done with Symbol('symbol-name'). The resulting
//Symbol instance is a unique identifier, and even if you call Symbol('symbolname')
// again, the uniqueness is preserved

export class Note{
    constructor(key , title , body){
        this[_note_key] = key,
        this[_note_title] = title,
        this[_note_body] = body
    }
    get key() { return this[_note_key]; }
    get title() { return this[_note_title]; }
    set title(newTitle) { this[_note_title] = newTitle; }
    get body() { return this[_note_body]; }
    set body(newBody) { this[_note_body] = newBody; }
}

export class AbstractNotesStore{
    async close(){}
    async update(key ,title ,body){}
    async create(key , title , body){}
    async read(key){}
    async destroy(key){}
    async keyList(){}
    async count(){}
}