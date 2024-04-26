package com.d208.AIclerk.member.dto.responseDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SignInResponseDTO {

    @Schema(description = "엑세스 토큰")
    String accessToken;
//
//    @Schema(description = "리프레시 토큰")
//    String refreshToken;


}
