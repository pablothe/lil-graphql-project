const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	name: String,
	genre: String,
	authorId: String,

});

// Making a model or collection which is books and it has objects which look like the schema


module.exports = mongoose.model ('Book', bookSchema);


