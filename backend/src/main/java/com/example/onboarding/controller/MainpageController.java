package com.example.onboarding.controller;

import com.example.onboarding.dto.MissionDto;
import com.example.onboarding.service.MissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
public class MainpageController {
    public final MissionService missionService;

    @GetMapping("")
    public List<MissionDto> getMissionName() {
        return missionService.getMissions();
    }
}
