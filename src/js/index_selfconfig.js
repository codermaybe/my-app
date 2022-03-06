function checkNameContent(username){
	
	if(!regist.test(username)){
		document.getElementById("notice").innerHTML="姓名不符合规范";
		return false;
	}
}


function checkinfo(){
	var username=document.getElementById("username").value;
	
	var regist=/^[\u4e00-\u9fa5A-Za-z0-9\-\_]*$/ ;
	if(username==""){
		document.getElementById("notice").innerHTML="姓名不可为空";
	}else{
		if(!regist.test(username)){
			document.getElementById("notice").innerHTML="格式不符合规范";
		}else{
			document.getElementById("notice").innerHTML="成功登入";
			window.location.href="userMainPage.html";
		}
		
	}
}


