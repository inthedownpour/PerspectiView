package com.example.backend.modules.keyword;

import com.example.backend.modules.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class KeywordService {
    private final KeywordRepository keywordRepository;

    /**
     * Keyword 생성
     */
    @Transactional
    public Keyword createKeyword(Keyword keyword){
        return  keywordRepository.save(keyword);
    }

    /**
     * Keyword 아이디 조회
     */
    public Keyword findById(Long id){
        return  keywordRepository.findById(id).orElseThrow(()->new NotFoundException());
    }

    /**
     * Keyword 전체 조회
     */
    public List<Keyword> findAll(){
        return keywordRepository.findAll();
    }

    /**
     * Keyword 이름 조회
     */
    public List<Keyword> findKeywordByName(String name){
        return keywordRepository.findByNameContaining(name);
    }


}
