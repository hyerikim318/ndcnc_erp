package kr.co.hyeri.repository.mapper;

import java.util.List;
import java.util.Map;

import kr.co.hyeri.repository.vo.Staff;
import kr.co.hyeri.repository.vo.StaffSearch;
import kr.co.hyeri.repository.vo.StaffSkill;

public interface StaffMapper {

	void insertStaff(Staff staff);
	
	void insertSkill(StaffSkill skill);
	
	List<Staff> selectStaff(StaffSearch staffSearch);
	int selectStaffCnt(StaffSearch staffSearch);
	
	List<Staff> selectStaffByStaffNo(int staffNo);

	void deleteStaff(int staffNo);

	void deleteStaffSkill(int staffNo);
	
	void updateStaff(Staff staff);


}
