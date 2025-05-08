package com.example.onboarding.missionWrite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/missionWrite")
public class MissionWriteController {

	@Autowired
	MissionWriteService missionWriteService;

	@PostMapping
	public ResponseEntity<MissionWriteDTO> postWrite(@RequestBody MissionWriteDTO dto) {
		
		missionWriteService.createMission(dto);
		
		// TODO try~catch로 예외처리 하기

		return ResponseEntity.status(HttpStatus.CREATED).body(dto);
		
	}

}