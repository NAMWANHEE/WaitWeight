package com.example.a104.project.controller;

import com.example.a104.project.dto.RealTimeDto;
import com.example.a104.project.service.AdminService;
import com.example.a104.project.service.DeviceService;
import com.example.a104.project.service.ReaderService;
import com.example.a104.project.service.TagService;
import com.example.a104.project.util.EmitterList;
import com.example.a104.project.util.JwtTokenProvider;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;

@Slf4j
@Tag(name="태그관련 API", description = "Sse 연결, 태깅 로직 관련 API")
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/tags")
@RestController
public class TagController {
    private final TagService tagService;
    private final AdminService adminService;
    private final ReaderService readerService;
    private final DeviceService deviceService;

    //private List<SseEmitter> emitters = new ArrayList<>();

    @Operation(summary = "SSE 연결",description = "sse 연결을 하게 되면 헬스장 실시간 데이터 전송")
    @Parameter(name="Authorization", description = "유저의 정보를 담은 JWT")
    @GetMapping(value = "sse", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public ResponseEntity<SseEmitter> sse(@RequestHeader(value = "Authorization") String token) throws IOException {
        try{
            EmitterList emitterList = new EmitterList();
            List<SseEmitter> emitters = emitterList.getEmitters();
            SseEmitter emitter = new SseEmitter(1800000l);
            emitters.add(emitter);
            Claims claims = JwtTokenProvider.parseJwtToken(token);
            int gymCode = adminService.getGymCode((String) claims.get("sub"));
            List<RealTimeDto> list = adminService.realTimeDtoList(gymCode);
            emitter.send(list, MediaType.APPLICATION_JSON);
            log.info("Method : sse, SSE Connect On");
            return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_EVENT_STREAM_VALUE)
                    .body(emitter);
        }
        catch(JwtException e){
            log.info("Method: sse, JWT is invalid");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        catch (Exception e2){
            log.info("Method: sse, Exception");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

//    @Operation(summary = "노쇼일때 실시간 데이터 전송",description = "노쇼일 경우 요청을 받아 실시간 데이터를 연결된 클라이언트에게 전송")
//    @Parameter(name="deviceCode", description = "태그를 한 태그장치의 번호")
//    @GetMapping
//    public void noShow(@RequestParam String deviceCode){
//        int gymCode =deviceService.getDevice(deviceCode).getGymCode();
//        List<RealTimeDto> list = adminService.realTimeDtoList(gymCode);
//        for (SseEmitter emitter : emitters) {
//            try {
//                emitter.send(list, MediaType.APPLICATION_JSON);
//            } catch (Exception e) {
//
//            }
//        }
//        log.info("Method : noShow, deviceCode {} NoSHOW",deviceCode);
//    }
//
//    @Operation(summary = "태그시 데이터 전송",description = "태그를 찍게 되면 실시간 데이터를 연결된 클라이언트에게 전송")
//    @PostMapping
//    public void Tagging(@RequestBody Map<String, String> map) {
//        log.info("태그 시간"+ LocalDateTime.now());
//        String deviceCode = map.get("device_code");
//        String reader = map.get("reader");
//
//        tagService.Tagging(deviceCode, reader);
//        ReaderEntity readerVo = readerService.getReader(reader);
//        int gymCode = readerVo.getGymCode();
//        List<RealTimeDto> list = adminService.realTimeDtoList(gymCode);
//        for (SseEmitter emitter : emitters) {
//            try {
//                emitter.send(list, MediaType.APPLICATION_JSON);
//            } catch (Exception e) {
//
//            }
//        }
//        log.info("실시간 데이터 전송 시간"+ LocalDateTime.now());
//        log.info("Method : Tagging, deviceCode {} tags reader {}",deviceCode,reader);
//
//
//    }
}
