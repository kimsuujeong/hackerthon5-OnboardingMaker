package com.example.onboarding.missionWrite;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onboarding.mission.entity.Mission;
import com.example.onboarding.mission.repository.MissionRepository;
import com.example.onboarding.missionWrite.Entity.GroupEntity;
import com.example.onboarding.missionWrite.repository.GroupRepository;

import jakarta.transaction.Transactional;

@Service
public class MissionWriteService {

	@Autowired
	MissionRepository missionRepository;

	@Autowired
	GroupRepository groupRepository;

	@Transactional
	public Mission createMission(MissionWriteDTO dto) {
		
		// Mission 글 저장
		Mission mission = new Mission();
		
		mission.setTitle(dto.getTitle());
		mission.setDescription(dto.getDescription());
		mission.setTotalGroups((int) dto.getTotal_groups());
		mission.setCreatedAt(LocalDateTime.parse(dto.getCreated_at()));
		mission.setDeadline(LocalDateTime.parse(dto.getDeadline()));
		
		Mission saved = missionRepository.save(mission);

		// total_groups 만큼 Group 생성
		int total = dto.getTotal_groups();  
		
	    for (int i = 1; i <= total; i++) {
	        GroupEntity g = new GroupEntity();
	        g.setMissionId(saved);
	        g.setGroupId(i);
	        groupRepository.save(g);
	        
	    }
	    
	    return saved;
	    
	}

}
