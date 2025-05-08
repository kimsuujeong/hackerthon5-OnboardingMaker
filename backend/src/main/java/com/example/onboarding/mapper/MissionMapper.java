package com.example.onboarding.mapper;

import com.example.onboarding.dto.MissionDto;
import com.example.onboarding.entity.MissionEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MissionMapper {
    MissionMapper INSTANCE = Mappers.getMapper(MissionMapper.class);

    MissionDto toDto(MissionEntity missionEntity);
    MissionEntity toEntity(MissionDto missionDto);
}
