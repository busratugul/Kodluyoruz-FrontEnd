console.log("hello node")
import {topla , hello, cikar, text } from './myModule.js'
import slugify from 'slugify'

//var slugify = require('slugify')

const title = slugify('some string hello hello', "/");
console.log(title);
console.log(topla(2,4))
hello("Büşra")
cikar(10,5)
console.log(text);