function isPalindrome(string){
	let flag = true
	for(let i=0;i<string.length;i++){
		if(string[i] !== string[string.length-1]){
			flag = false;
			break;
		}
	}
	if(flag){
		return true;
	}
	return false;
}
