   /*'일'select만들기*/
	var lastdayArr    = [31,28,31,30,31,30,31,31,30,31,30,31];
	/*
	$(".lastday").click(function () {
		var month = $(this).prev().val();
		
		if(month=="") {
			alert("월을 먼저 선택하세요.");
		}else {
			var dayopt = "<option value=''></option>";
			for(let i = 1; i<lastdayArr[month-1]+1; i++) {
				dayopt += "<option value='"+i+"'>"+i+"</option>";
			}
			$(this).html(dayopt);
		}
	});
	*/
	
	/* '초기화'버튼 */
	$("#reset_bnt").click(function () {
		$("input:text").val("");
		$("input:checkbox").prop('checked', false);
		$("input:radio").prop('checked', false);
		$("select[name='religionCode'] option:eq(0)").prop("selected", true);
		$("select[name='minYear'] option:eq(0)").prop("selected", true);
		$("select[name='minMonth'] option:eq(0)").prop("selected", true);
		$("select[name='minDay'] option:eq(0)").prop("selected", true);
		$("select[name='maxYear'] option:eq(0)").prop("selected", true);
		$("select[name='maxMonth'] option:eq(0)").prop("selected", true);
		$("select[name='maxDay'] option:eq(0)").prop("selected", true);
	});
	
	function dateCheck() {
		var minYear = $("select[name='minYear']").val();
		var maxYear = $("select[name='maxYear']").val();
		var minMonth = $("select[name='minMonth']").val();
		var maxMonth = $("select[name='maxMonth']").val();
		var minDay = $("select[name='minDay']").val();
		var maxDay = $("select[name='maxDay']").val();
		
		/*년도 비교 : 시작년도가 더 클 때 걸러냄*/
		if(minYear > maxYear) {
			alert("시작날짜가 종료날짜보다 큽니다.");
			return;
		} else if(minYear == maxYear) { /*월 비교 : 년도가 같을 때 월 비교를 시행*/
			if(minMonth > maxMonth) {
				alert("시작날짜가 종료날짜보다 큽니다.");
				return;
			} else if(minMonth == maxMonth) { /*일 비교 : 년도와 월이 같을 때 일 비교를 시행*/
					if(minDay > maxDay) {
						alert("시작날짜가 종료날짜보다 큽니다.");
						return;
					}
			}
		}
	}
	
	function searchAjax(begin, end, sortColumn, sortType, allBnt) {
		
		var skillArr = [];
		if($("input:checkbox[name='skillCode']:checked").length==0) {
			skillArr.push(1);
			skillArr.push(2);
			skillArr.push(3);
			skillArr.push(4);
			skillArr.push(5);
		}else {
			$("input:checkbox[name='skillCode']:checked").each(function () {
				skillArr.push($(this).val());
			})
		}
		
		var sexArr = [];
		if( $("input:checkbox[name='staffSex']:checked").length==0) {
			sexArr.push(1);
			sexArr.push(2);
		} else {
			$("input:checkbox[name='staffSex']:checked").each(function () {
				sexArr.push($(this).val());
			})
		}
		
		var schoolArr = [];
		if($("input:checkbox[name='schoolCode']:checked").length==0) {
			schoolArr.push(1);
			schoolArr.push(2);
			schoolArr.push(3);
		} else {
			$("input:checkbox[name='schoolCode']:checked").each(function () {
				schoolArr.push($(this).val());
			})
		}
		
		var subSkillCond;
		if($("input[name=subSkillCond]:checked").length==0) {
			subSkillCond = 0;
		} else {
			subSkillCond = $("input[name=subSkillCond]:checked").val();
		}
		
		if(allBnt == 'Y') {
			staffName = "";
			religionCode = "";
			graduateBegin = "";
			graduateEnd = "";
			subSkill = "";
			subSkillCond = 0;
			
			sexArr.push(1);
			sexArr.push(2);
			schoolArr.push(1);
			schoolArr.push(2);
			schoolArr.push(3);
			skillArr.push(1);
			skillArr.push(2);
			skillArr.push(3);
			skillArr.push(4);
			skillArr.push(5);
			
		}
			
		$.ajax({
			type : "POST",
			url : "/erp/search.json",
			contentType: 'application/json',
	        data: JSON.stringify({
	        	"staffName" : $("input[name='staffName']").val(),
	        	"sexs" : sexArr,
	        	"schools" : schoolArr,
	        	"religionCode" : $("select[name='religionCode']").val(),
	        	"graduateBegin" : $("select[name='minYear']").val() + "" + $("select[name='minMonth']").val() + "" + $("select[name='minDay']").val(),
	        	"graduateEnd" : $("select[name='maxYear']").val() + "" + $("select[name='maxMonth']").val() + "" + $("select[name='maxDay']").val(),
	        	"skills" : skillArr,
	        	"subSkill" : $("input[name='subSkill']").val(),
	        	"subSkillCond" : subSkillCond,
	        	"beginCount" : begin,
				"endCount" : end,
				"sortColumn" : sortColumn,
				"sortType" : sortType
	        }),
			success : function(result) {
				
				console.log(result.list);
				console.log(result.cnt);
				makeList(result.list, allBnt);
				
				
				var cntDiv =  "<div id='listlength'>검색건수 → "+result.cnt+"건<font size='2.5px' color='b187d1' id='sortInfo'>[▲:오름차순, ▼:내림차순]<font></div>";
				$("#resultList").prepend(cntDiv);
				
				/*현재마지막페이지*/
				var pages = (result.cnt/5);
				var pageTab = (begin/5);
				
				var page = "";
				page += "<div id='pageDiv'><ul>";
				for(var idx=0; idx<pages; idx++) {
					page += "<li style='cursor:pointer' onclick='searchAjax(" + ((5*idx)+1) + "," + 5*(idx+1) + `,"` + sortColumn + `","`+ sortType +`","` + allBnt + `")'>`;
					if(end == 5*(idx+1)) {
						page += "["+(idx+1)+"]";
					}else {
					page += (idx+1)
					}
					page += "</li>";
				}
				page += "</ul></div>";
				
				$("#resultList").append(page);
			},
			error:function(request,status,error){
				console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		    }
		});
	}
	
	/* '검색'버튼 */
	$("#search_bnt").click(function () {
		
		dateCheck();
		searchAjax(1, 5, 'staff_no', 'asc', 'N');
		
	});
	
	function makeList(list, allBnt) {
		
		
		var table = "";
		table += "<table>";
		table += "<tr>";
		table += `<td><font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'staff_no', 'asc','`+ allBnt +`');">▲</font> 번호 <font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'staff_no', 'desc','`+ allBnt +`');">▼</font></td>`
		table += `<td><font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'staff_name', 'asc','`+ allBnt +`');">▲</font> 이름 <font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'staff_name', 'desc','`+ allBnt +`');">▼</font></td>`
		table += `<td><font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'staff_sex', 'asc','`+ allBnt +`');">▲</font> 성별 <font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'staff_sex', 'desc','`+ allBnt +`');">▼</font></td>`
		table += `<td><font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'religion_name', 'asc','`+ allBnt +`');">▲</font> 종교 <font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'religion_name', 'desc','`+ allBnt +`');">▼</font></td>`
		table += `<td><font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'graduate_date', 'asc','`+ allBnt +`');">▲</font> 졸업일 <font size='1.5px' color='#b187d1' style="cursor:pointer" onclick="searchAjax(1,5,'graduate_date', 'desc','`+ allBnt +`');">▼</font></td>`
		table += "<td></td>"
		table += "</tr>";
		for(let i=0; i<list.length; i++) {
		table += "<tr>";
		table += "<td>"+list[i].staffNo+"</td>";
		table += "<td>"+list[i].staffName+"</td>";
		if(list[i].juminNo.substr(7,1)==1) {
			table += "<td>남</td>";
		}else {
			table += "<td>여</td>";
		}
		table += "<td>"+list[i].religion.religionName+"</td>";
		table += "<td>"+list[i].graduateDate+"</td>";
		table += "<td><a href='staff_updel_form.do?staffNo="+list[i].staffNo+"' onclick='window.open(this.href); return false;'><button type='button'>수정/삭제</button></a></td>";
		table += "</tr>";
		}
		table += "</table>";
		
		$("#resultList").html(table);
		
	}
	
