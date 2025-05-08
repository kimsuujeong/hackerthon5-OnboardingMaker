package com.example.onboarding.missionWrite;

import com.fasterxml.jackson.annotation.JsonFormat;

public class MissionWriteDTO {
	
	// mission_id
	private int mission_id;
	// total_groups
	private int total_groups;
	// created_at 만든날짜
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private String created_at;
	// deadline 마감날짜
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private String deadline;
	// title
	private String title;
	// description
	private String description;
	
	public int getMission_id() {
		return mission_id;
	}
	public void setMission_id(int mission_id) {
		this.mission_id = mission_id;
	}
	public int getTotal_groups() {
		return total_groups;
	}
	public void setTotal_groups(int total_groups) {
		this.total_groups = total_groups;
	}
	public String getCreated_at() {
		return created_at;
	}
	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
	public String getDeadline() {
		return deadline;
	}
	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
