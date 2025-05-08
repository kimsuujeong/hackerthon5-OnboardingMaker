package com.example.onboarding.mission.repository;

import com.example.onboarding.mission.entity.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MissionRepository extends JpaRepository<Mission, Integer> {
    List<Mission> findAllByOrderByDeadlineAsc();
}
