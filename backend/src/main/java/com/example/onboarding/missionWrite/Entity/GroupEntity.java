package com.example.onboarding.missionWrite.Entity;

import com.example.onboarding.mission.entity.Mission;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "`group`")
public class GroupEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private int groupId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "mission_id", nullable = false)
    private Mission missionId;

    @Column(name = "group_num", nullable = false)
    private int groupNum;

	public int getGroup_id() {
		return groupId;
	}

	public void setGroup_id(int group_id) {
		this.groupId = group_id;
	}

	public Mission getMission_id() {
		return missionId;
	}

	public void setMission_id(Mission mission_id) {
		this.missionId = mission_id;
	}

	public int getGroup_num() {
		return groupNum;
	}

	public void setGroup_num(int group_num) {
		this.groupNum = group_num;
	}
    
}
