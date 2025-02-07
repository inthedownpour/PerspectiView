package com.example.backend.modules.team;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
@Builder
public class TeamRequestDto {
    @Length(max = 20) @NotNull
    private String title;
    private String info;


    public static Team from(TeamRequestDto teamRequestDto){
        return Team.builder().title(teamRequestDto.getTitle())
                .info(teamRequestDto.getInfo())
                .personal(false)
                .title(teamRequestDto.getTitle())
                .build();
    }
}
