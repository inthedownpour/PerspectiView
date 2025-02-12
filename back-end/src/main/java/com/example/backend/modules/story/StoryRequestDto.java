package com.example.backend.modules.story;

import com.example.backend.modules.character.Character;
import com.example.backend.modules.character.CharacterRequestDto;
import com.example.backend.modules.foreshadowing.ForeShadowing;
import com.example.backend.modules.foreshadowing.ForeShadowingRequestDto;
import com.example.backend.modules.plot.Plot;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class StoryRequestDto {
    private String storyTitle;
    private ContentDto storyContent;
    private List<CharacterRequestDto> characters;
    private List<ForeShadowingRequestDto> foreShadowings;
    private int positionX;
    private Double positionY;

    public static Story of(StoryRequestDto storyRequestDto) {
        return Story.builder()
                .title(storyRequestDto.getStoryTitle())
                .content(ContentDto.from(storyRequestDto.getStoryContent()))
                .positionX(storyRequestDto.getPositionX())
                .positionY(storyRequestDto.getPositionY())
                .build();
    }
}
