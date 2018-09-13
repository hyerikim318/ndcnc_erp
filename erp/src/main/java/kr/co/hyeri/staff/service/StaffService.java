package kr.co.hyeri.staff.service;

import java.util.List;

import kr.co.hyeri.repository.vo.Staff;
import kr.co.hyeri.repository.vo.StaffSearch;
import kr.co.hyeri.repository.vo.StaffSkill;

public interface StaffService {

	void registStaff(Staff staff);

	void registSkill(StaffSkill skill);

	List<Staff> searchStaff(StaffSearch search);


	List<Staff> selectStaffByNo(int staffNo);

	void deleteStaff(int staffNo);

	void updateStaff(Staff staff);


	int selectStaffCnt(StaffSearch search);

}
