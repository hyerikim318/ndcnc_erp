package kr.co.hyeri.staff.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.hyeri.repository.mapper.StaffMapper;
import kr.co.hyeri.repository.vo.Staff;
import kr.co.hyeri.repository.vo.StaffSearch;
import kr.co.hyeri.repository.vo.StaffSkill;

@Service
public class StaffServiceImpl implements StaffService {
	
	@Autowired
	private StaffMapper mapper;

	@Override
	public void registStaff(Staff staff) {
		mapper.insertStaff(staff);
	}


	@Override
	public void registSkill(StaffSkill skill) {
		mapper.insertSkill(skill);
	}


	@Override
	public List<Staff> searchStaff(StaffSearch search) {
		return mapper.selectStaff(search);
	}



	@Override
	public List<Staff> selectStaffByNo(int staffNo) {
		return mapper.selectStaffByStaffNo(staffNo);
		
	}


	@Override
	public void deleteStaff(int staffNo) {
		
		mapper.deleteStaffSkill(staffNo);
		mapper.deleteStaff(staffNo);
	}


	@Override
	public void updateStaff(Staff staff) {
		mapper.updateStaff(staff);
		mapper.deleteStaffSkill(staff.getStaffNo());
	}




	@Override
	public int selectStaffCnt(StaffSearch search) {
		return mapper.selectStaffCnt(search);
	}

}
