<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>

<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/common.css">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ERP 예제 ::: 입력 화면</title>
</head>
<body>

<script>
function numberCheck(event) {
	event = event || window.event;
	var keyCode = event.keyCode;
	if( ( keyCode >=48 && keyCode <= 57 ) || ( keyCode >=96 && keyCode <= 105 ) ) {
		return;
	}else {
		alert("숫자만 입력할 수 있습니다.");
		return false;
	}
}
</script>

<form method="post" action="${pageContext.request.contextPath}/input.json" id="input_form">

<table style="width: 70%">

<tr><td colspan="6" class="grayback">사원 정보 등록</td></tr>

<tr>
<td class="grayback">이름</td>
<td><input type="text" name="staffName"></td>
<td class="grayback">주민번호</td>
<td>
	<input type="text" name="juminOne" maxlength="6" onkeydown="return numberCheck(event)"/>
	-
	<input type="password" name="juminTwo" maxlength="7" onkeydown="return numberCheck(event)"/>
</td>
<td class="grayback">종교</td>
<td>
	<select name="religionCode">
		<option value=""></option>
		<option value="1">기독교</option>
		<option value="2">천주교</option>
		<option value="3">불교</option>
		<option value="4">이슬람</option>
		<option value="5">무교</option>
	</select>
</td>
</tr>

<tr>
<td class="grayback">학력</td>
<td>
	<input type="checkbox" id="sc_check1" name="schoolCode" value="1"><label for="sc_check1">고졸</label>
	<input type="checkbox" id="sc_check2" name="schoolCode" value="2"><label for="sc_check2">전문대졸</label>
	<input type="checkbox" id="sc_check3" name="schoolCode" value="3"><label for="sc_check3">일반대졸</label>
</td>
<td class="grayback">기술</td>
<td colspan="3">
	<input type="checkbox" id="sk_check1" name="skillCode" value="1"><label for="sk_check1">Java</label>
	<input type="checkbox" id="sk_check2" name="skillCode" value="2"><label for="sk_check2">JSP</label>
	<input type="checkbox" id="sk_check3" name="skillCode" value="3"><label for="sk_check3">ASP</label>
	<input type="checkbox" id="sk_check4" name="skillCode" value="4"><label for="sk_check4">PHP</label>
	<input type="checkbox" id="sk_check5" name="skillCode" value="5"><label for="sk_check5">Delphi</label>
</td>
</tr>

<tr>
<td class="grayback">추가기술</td>
<td colspan="5"><input type="text" name="subSkill"/></td>
</tr>

<tr>
<td class="grayback">졸업일</td>
<td colspan="5">
<select name="graduateYear">
	<option value=""></option>
	<c:set var="today" value="<%=new java.util.Date()%>" />
	<fmt:formatDate value="${today}" pattern="yyyy" var="start"/> 
	<c:forEach begin="0" end="40" var="idx" step="1">
		<option value="<c:out value="${start - idx}" />"><c:out value="${start - idx}" /></option>
	</c:forEach>
</select>년
<select name="graduateMonth">
	<option value=""></option>
	<c:forEach begin="1" end="9" var="month" step="1">
		<option value="0${month}">0${month}</option>
	</c:forEach>
	<c:forEach begin="10" end="12" var="month" step="1">
		<option value="${month}">${month}</option>
	</c:forEach>
</select>월
<select class="lastday" name="graduateDay">
	<option value=""></option>
	<c:forEach begin="1" end="9" var="day" step="1">
		<option value="0${day}">0${day}</option>
	</c:forEach>
	<c:forEach begin="10" end="31" var="day" step="1">
		<option value="${day}">${day}</option>
	</c:forEach>
</select>일
</td>
</tr>

</table>

<div id="bntZone">
<button type="button" id="regist_but">등록</button>
<button type="button" id="reset_but">초기화</button>
</div>

</form>

<script>


	

</script>
<script src="${pageContext.request.contextPath}/js/input.js"></script>
</body>
</html>