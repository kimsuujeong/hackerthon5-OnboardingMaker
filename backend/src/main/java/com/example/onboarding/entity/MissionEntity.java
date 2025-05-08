package com.example.onboarding.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "mission")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MissionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mission_id")
    private Integer missionId;

    @Column(name = "total_groups", nullable = false)
    private Integer totalGroups;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    private LocalDateTime deadline;

    private String description;

    private String title;
}
