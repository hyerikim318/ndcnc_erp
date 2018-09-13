
$.ajax({
	type : "POST",
	url : "/erp/PersonalInfo.json",
	data: {
		"staffNo" : staffNo
	},
	success : function(staffList) {
		var graduateYear = new Date().getFullYear()- staffList[0].graduateDate.substr(0, 4) +1;
		
		$("input[name=staffName]").val(staffList[0].staffName);
		$("input[name=juminOne]").val(staffList[0].juminNo.substr(0, 6));
		$("input[name=juminTwo]").val(staffList[0].juminNo.substr(7, 7));
		$("input[name=subSkill]").val(staffList[0].subSkill);
		$("select[name='religionCode'] option:eq("+staffList[0].religionCode+")").prop("selected", true);
		$("select[name='graduateYear'] option:eq("+graduateYear+")").prop("selected", true);
		$("select[name='graduateMonth'] option:eq("+staffList[0].graduateDate.substr(4, 2)+")").prop("selected", true);
		$("select[name='graduateDay'] option:eq("+staffList[0].graduateDate.substr(6, 2)+")").prop("selected", true);
		$($("input[name='schoolCode']")[staffList[0].schoolCode-1]).prop("checked", true);
		
		for(let i = 0; i <staffList.length; i++) {
	 		$($("input[name='skillCode']")[staffList[i].staffSkill.skillCode-1]).prop("checked", true);
		}
		
	},
	error:function(request,status,error){
        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    }
});


$("#update_bnt").click(function () {
	var skillArr = [];
	$("input:checkbox[name='skillCode']:checked").each(function () {
		skillArr.push($(this).val());
	})
	
	$.ajax({
		type : "POST",
		url : "/erp/updateStaff.json",
		data: {
			staffNo : staffNo,
			staffName : $("input[name='staffName']").val(),
        	juminNo : $("input[name='juminOne']").val()+"-"+$("input[name='juminTwo']").val(),
        	schoolCode : $("input:checkbox[name='schoolCode']:checked").val(),
        	religionCode : $("select[name='religionCode']").val(),
        	subSkill : $("input[name='subSkill']").val(),
        	graduateDate : $("select[name='graduateYear']").val() + "" + $("select[name='graduateMonth']").val() + "" + $("select[name='graduateDay']").val(),
        	skillArr : skillArr
		},
		success : function() {
			alert("수정이 완료되었습니다.");
			window.location.reload();
		},
		error:function(request,status,error){
	        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    }
	})
});




$("#delete_but").click(function () {
	if (confirm("정말삭제하시겠습니까?") == true){
	}else{
	    return;
	}
	$.ajax({
		type : "POST",
		url : "/erp/deleteStaff.json",
		data: {
			staffNo : staffNo
		},
		success : function() {
			alert("삭제가 완료되었습니다.");
		},
		error:function(request,status,error){
	        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    }
	})
});