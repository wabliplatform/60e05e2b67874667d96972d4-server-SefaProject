
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 
projectName:String , 
projectDescription:String , 
serviceProviderName:String , 
directorName:String , 
countryRegistration:String , 
companyNumber:String , 
registeredOfficeAddress:String , 
registeredOfficePostcode:String , 
registeredOfficeCity:String , 
outputType:String , 
currency:String 

})



module.exports = {
  Project : mongoose.model('project', projectSchema),
}

