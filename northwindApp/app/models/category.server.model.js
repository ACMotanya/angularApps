'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Validation
 */
 function validateLength (v) {
	 // a custom validation function for checking string length to be used by the model
	 return v.length <= 15;
 }

/**
 * Category Schema
 */
var CategorySchema = new Schema({
	// the property name
	created: {
		// types are defined e.g. String, Date, Number (http://mongoose.js.com/docs/guide.html)
		type: Date,
		// default vales can be set
		default: Date.now
	},
	description: {
		type: String,
		default: '',
		// types have specific functions e.g. trim, lowercase, uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
		trim: true
	},
	name: {
		type: String,
		default: '',
		trim: true,
		unique: true,
		required: 'name cannot be blank',
		validate: [validateLength, 'name must be 15 chars in length or less']
	}
});

mongoose.model('Category', CategorySchema);
