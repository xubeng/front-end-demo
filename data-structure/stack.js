/**
 * 括号匹配
 * @param {*} braces 
 */
function validBraces(braces){
	while(/\(\)|\[\]|\{\}/g.test(braces)){
	  braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
	}
	return !braces.length;
  }