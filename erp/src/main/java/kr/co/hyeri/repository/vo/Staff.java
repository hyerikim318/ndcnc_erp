package kr.co.hyeri.repository.vo;

public class Staff {
	
	int staffNo;
	String staffName;
	String juminNo;
	int schoolCode;
	int religionCode;
	String graduateDate;
	String subSkill;
	
	
	
	StaffSkill staffSkill;
	Religion religion;
	
	
	int skillCode;
	
	
	
	
	

	public String getSubSkill() {
		return subSkill;
	}

	public void setSubSkill(String subSkill) {
		this.subSkill = subSkill;
	}

	public int getSkillCode() {
		return skillCode;
	}

	public void setSkillCode(int skillCode) {
		this.skillCode = skillCode;
	}

	public StaffSkill getStaffSkill() {
		return staffSkill;
	}

	public void setStaffSkill(StaffSkill staffSkill) {
		this.staffSkill = staffSkill;
	}

	public Religion getReligion() {
		return religion;
	}

	public void setReligion(Religion religion) {
		this.religion = religion;
	}
	
	
	
	public int getStaffNo() {
		return staffNo;
	}
	public void setStaffNo(int staffNo) {
		this.staffNo = staffNo;
	}
	public String getStaffName() {
		return staffName;
	}
	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}

	public int getSchoolCode() {
		return schoolCode;
	}
	public void setSchoolCode(int schoolCode) {
		this.schoolCode = schoolCode;
	}
	public int getReligionCode() {
		return religionCode;
	}
	public void setReligionCode(int religionCode) {
		this.religionCode = religionCode;
	}
	public String getJuminNo() {
		return juminNo;
	}
	public void setJuminNo(String juminNo) {
		this.juminNo = juminNo;
	}
	public String getGraduateDate() {
		return graduateDate;
	}
	public void setGraduateDate(String graduateDate) {
		this.graduateDate = graduateDate;
	}

	

}
