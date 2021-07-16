/***
{
	"name" : "Illustrator Design Federator",
	"scriptVersion" : "0.0.1",
	"note" : "Script to run through a design document creation, with options.",
	"author" : {
		"by" : "Zwerb",
    "email" : "sy@zwerb.com",
    "github" : "https://github.com/zwerb"
}
***/

// Include Functions Libraries
//#include "X01_DF-Function-Tester.jsx"

var theDOC = app.activeDocument;

var executionOptions = {
    start_row: 0,
    end_row: 5,
    increment: 1
  };
var exOps = executionOptions;

var systemOptions = {
    imagePath = "/"
}

var designOptions = {
  name: "full_mask",
  is: "0",
  is_mask: "0",
  mask: "0",
  font: "-1",
  color: "000000",
  preaction: "0",
  action: "",
  align: "",
  opacity: "0",
  max_w: "0.9",
  max_h: "0.6",
  code: "-1",
};

// var loc = window.location.pathname;
// var dir = loc.substring(0, loc.lastIndexOf('/'));
// alert("loc: "+VI_MEMORY_SETTINGS)
// alert("dir: "+dir)

//theDOC.dataSets[exOps.start_row].display();