package com.example.onboarding.repository;

import com.example.onboarding.entity.MissionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MissionRepository extends JpaRepository<MissionEntity, Integer> {
    List<MissionEntity> findAllByOrderByDeadlineAsc();
}
