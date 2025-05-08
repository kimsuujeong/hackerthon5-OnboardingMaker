package com.example.onboarding.mission.controller;

import com.example.onboarding.mission.dto.MissionResponseDto;
import com.example.onboarding.mission.service.MissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mission")
public class MissionController {

    private final MissionService missionService;

    // 전체 미션 목록 조회
    @GetMapping
    public List<MissionResponseDto> getMissionList() {
        return missionService.getAllMissions();
    }

    // 개별 미션 상세 조회
    @GetMapping("/{id}")
    public MissionResponseDto getMissionDetail(@PathVariable Long id) {
        return missionService.getMissionById(id);
    }
}
