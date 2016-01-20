//using setTimeout
console.log("Begin");
/*setTimeout(function(){
  console.log("setTimeout");
},0);*/
setImmediate(function(){
  console.log("setImmediate");
});
console.log("End");

