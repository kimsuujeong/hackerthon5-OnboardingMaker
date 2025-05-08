package com.example.onboarding.service;

import com.example.onboarding.dto.MissionDto;
import com.example.onboarding.mapper.MissionMapper;
import com.example.onboarding.repository.MissionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MissionService {
    public final MissionRepository missionRepository;
    private final MissionMapper missionMapper;

    public List<MissionDto> getMissions() {
        return missionRepository.findAllByOrderByDeadlineAsc().stream().map(missionMapper::toDto).toList();
    }
}
