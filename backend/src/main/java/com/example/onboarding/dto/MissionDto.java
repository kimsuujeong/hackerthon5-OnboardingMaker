package com.example.onboarding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MissionDto {
    private int missionId;
    private int totalGroups;
    private LocalDateTime createdAt;
    private LocalDateTime deadline;
    private String description;
    private String title;
}
