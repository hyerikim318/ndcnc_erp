	/* '일'select만들기 */
	var lastdayArr    = [31,28,31,30,31,30,31,31,30,31,30,31];
	
	/*
	$("select[name=graduateDay]").click(function () {
		var month = $(this).prev().val();
		
		if(month=="") {
			alert("월을 먼저 선택하세요.");
		}else {
			$(this).empty();
			$(this).append($("<option value=''></option>"));
			for(let i = 1; i<lastdayArr[month-1]+1; i++) {
				var dayopt = $("<option value='"+i+"'>"+i+"</option>");
				$(this).append($(dayopt));
			}
		}
	});
	*/
	
	
	/* '등록'시 확인&취소 */
	$("#regist_but").click(function () {
		
		if($("input[name='staffName']").val()=="") {
			alert("이름을 입력하세요.");
			return;
		}
		if($("input[name='juminOne']").val()=="" || $("input[name='juminTwo']").val()=="") {
			alert("주민번호를 입력하세요.");
			return;
		}
		
		/* 주민등록번호 유효성검사
		var jumin1 = $("input[name='juminOne']");
		var jumin2 = $("input[name='juminTwo']");

 		var jumin1Arr = new Array();
        var jumin2Arr = new Array();

        for (var i=0; i<jumin1.val().length; i++) {
        	jumin1Arr[i] = jumin1.val().charAt(i);
        }
        for (var i=0; i<jumin2.val().length; i++) {
        	jumin2Arr[i] = jumin2.val().charAt(i);
        }

        var tempSum=0;
        for (var i=0; i<jumin1.val().length; i++) {
            tempSum += jumin1Arr[i] * (2+i);
        }
        for (var i=0; i<jumin2.val().length-1; i++) {
            if(i>=2) {
                tempSum += jumin2Arr[i] * i;
            }
            else {
                tempSum += jumin2Arr[i] * (8+i);
            }
        }
        if((11-(tempSum%11))%10!=jumin2Arr[6]) {
            alert("올바른 주민번호가 아닙니다.");
            jumin1.val("");
            jumin2.val("");
            jumin1.focus();
            return false;
        }
        */
		
		if($("input:checkbox[name='schoolCode']:checked").length == 0) {
			alert("학력을 입력하세요.");
			return;
		}
		if($("input:checkbox[name='skillCode']:checked").length == 0) {
			alert("기술은 하나 이상 선택해야합니다.");
			return;
		}
		if($("select[name='religionCode']").val() == "") {
			alert("종교를 입력하세요.");
			return;
		}
		if($("select[name='graduateYear']").val() == "" || $("select[name='graduateMonth']").val() == "" || $("select[name='graduateDay']").val() == "") {
			alert("졸업일을 입력하세요.");
			return;
		}
		
		
		if (confirm("정말 저장하시겠습니까?") == true){
			sendData();
		}else{
		    return;
		}
	});
	
	/* '초기화'버튼 */
	$("#reset_but").click(function () {
		$("input:text").val("");
		$("input:checkbox").prop('checked', false);
		$("input:radio").prop('checked', false);
		$("select[name='religionCode'] option:eq(0)").prop("selected", true);
		$("select[name='graduateYear'] option:eq(0)").prop("selected", true);
		$("select[name='graduateMonth'] option:eq(0)").prop("selected", true);
		$("select[name='graduateDay'] option:eq(0)").prop("selected", true);
	});
	
function sendData() {
	var skillArr = [];
	$("input:checkbox[name='skillCode']:checked").each(function () {
		skillArr.push($(this).val());
	})
	
	
	$.ajax({
		type : "POST",
		url : "/erp/input.json",
        data: {
        	staffName : $("input[name='staffName']").val(),
        	juminNo : $("input[name='juminOne']").val()+"-"+$("input[name='juminTwo']").val(),
        	schoolCode : $("input:checkbox[name='schoolCode']:checked").val(),
        	religionCode : $("select[name='religionCode']").val(),
        	graduateDate : $("select[name='graduateYear']").val() + "" + $("select[name='graduateMonth']").val() + "" + $("select[name='graduateDay']").val(),
        	subSkill : $("input[name='subSkill']").val(),
        	skillArr : skillArr
        },
		success : function() {
			alert("정상적으로 등록되었습니다.");
			window.location.reload();
		},
		error:function(request,status,error){
	        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    }
	});
	
	
	
}
	