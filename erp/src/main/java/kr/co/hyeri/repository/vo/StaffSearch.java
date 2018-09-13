package kr.co.hyeri.repository.vo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

//@JsonPropertyOrder({"staffName", "sexs", "schools", "religionCode", "graduateBegin", "graduateEnd", "skills", "subSkill", "subSkillCon", "beginCount", "endCount", "sortColumn", "sortType"})
public class StaffSearch {
	
	
	/*검색조건*/
	String staffName;
	String religionCode;
	String graduateBegin;
	String graduateEnd;
	String subSkill;
	int subSkillCond;
	List<Integer> skills;
	List<Integer> sexs;
	List<Integer> schools;

	
	/*Paging*/
	int beginCount;
	int endCount;


	/*Sort*/
	String sortColumn;
	String sortType;
	
	
	public String getSubSkill() {
		return subSkill;
	}
	public void setSubSkill(String subSkill) {
		this.subSkill = subSkill;
	}
	public int getSubSkillCond() {
		return subSkillCond;
	}
	public void setSubSkillCond(int subSkillCond) {
		this.subSkillCond = subSkillCond;
	}
	public String getStaffName() {
		return staffName;
	}
	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}
	public String getReligionCode() {
		return religionCode;
	}
	public void setReligionCode(String religionCode) {
		this.religionCode = religionCode;
	}
	public String getGraduateBegin() {
		return graduateBegin;
	}
	public void setGraduateBegin(String graduateBegin) {
		this.graduateBegin = graduateBegin;
	}
	public String getGraduateEnd() {
		return graduateEnd;
	}
	public void setGraduateEnd(String graduateEnd) {
		this.graduateEnd = graduateEnd;
	}
	public List<Integer> getSexs() {
		return sexs;
	}
	public void setSexs(List<Integer> sexs) {
		this.sexs = sexs;
	}
	public List<Integer> getSchools() {
		return schools;
	}
	public void setSchools(List<Integer> schools) {
		this.schools = schools;
	}
	public List<Integer> getSkills() {
		return skills;
	}
	public void setSkills(List<Integer> skills) {
		this.skills = skills;
	}

	

	
	public int getBeginCount() {
		return beginCount;
	}
	public void setBeginCount(int beginCount) {
		this.beginCount = beginCount;
	}
	public int getEndCount() {
		return endCount;
	}
	public void setEndCount(int endCount) {
		this.endCount = endCount;
	}
	
	

	
	
	public String getSortColumn() {
		return sortColumn;
	}
	public void setSortColumn(String sortColumn) {
		this.sortColumn = sortColumn;
	}
	public String getSortType() {
		return sortType;
	}
	public void setSortType(String sortType) {
		this.sortType = sortType;
	}
	
	
	
	

}
