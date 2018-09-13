package kr.co.hyeri.staff.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.hyeri.repository.vo.Staff;
import kr.co.hyeri.repository.vo.StaffSearch;
import kr.co.hyeri.repository.vo.StaffSkill;
import kr.co.hyeri.staff.service.StaffService;


@Controller
public class StaffController {
	
	@Autowired
	private StaffService service;
	
	@RequestMapping("/input.json")
	@ResponseBody
	public void staffInput(Staff staff, @RequestParam(value="skillArr[]") List<Integer> skillArr) {
		
		
		service.registStaff(staff);
		
		
		StaffSkill skill = new StaffSkill();
		for(int i = 0; i < skillArr.size(); i++) {
			skill.setStaffNo(staff.getStaffNo());
			skill.setSkillCode(skillArr.get(i));
			service.registSkill(skill);
		}
	}
	@RequestMapping("/updateStaff.json")
	@ResponseBody
	public void updateStaff(Staff staff, @RequestParam(value="skillArr[]") List<Integer> skillArr) {
		
			
		service.updateStaff(staff);
		
		StaffSkill skill = new StaffSkill();
		for(int i = 0; i < skillArr.size(); i++) {
			skill.setStaffNo(staff.getStaffNo());
			skill.setSkillCode(skillArr.get(i));
			service.registSkill(skill);
		}
	
		
	}
		
	@RequestMapping("/staff_updel_form.do")
	public void staffUpdel(HttpServletRequest request, Model model) {
		
		
		int staffNo = Integer.parseInt(request.getParameter("staffNo"));
		
		model.addAttribute("staffNo", staffNo);
		
		
	}
	
	
	
	@RequestMapping("/PersonalInfo.json")
	@ResponseBody
	public List<Staff> PersonalInfo(int staffNo) {
		
		return service.selectStaffByNo(staffNo);
		
	}
	
	

	
		@RequestMapping("/search.json")
		@ResponseBody
		public Map<String, Object> staffSearch(@RequestBody StaffSearch search) {
			
			Map<String, Object> result = new HashMap<>();
			
			List<Staff> staffList = service.searchStaff(search);
			int cnt = service.selectStaffCnt(search);
			
			result.put("list", staffList);
			result.put("cnt", cnt);
			
			return result;
			
		}
		
		
		@RequestMapping("/deleteStaff.json")
		@ResponseBody
		public void deleteStaff(int staffNo) {
			
			
			
			service.deleteStaff(staffNo);
			
			
		}

}
