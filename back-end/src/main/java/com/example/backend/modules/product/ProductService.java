package com.example.backend.modules.product;

import com.example.backend.modules.user.User;
import com.example.backend.modules.genre.Genre;
import com.example.backend.modules.genre.GenreRepository;
import com.example.backend.modules.plot.Plot;
import com.example.backend.modules.team.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {
    private final ProductRepository productRepository;

    private final TeamService teamService;

    private final ProductGenreRepository productGenreRepository;

    private final GenreRepository genreRepository;

    /**
     * 팀 작품 생성
     */
    @Transactional
    public Product createTeamProduct(User user, Long teamId, Product product, List<Genre> genres) { //TODO EntityGraph

        //중간 테이블 저장
        //장르 + 작품에 대한 값이 있어야함
        for (Genre g : genres) {
            Genre genre = genreRepository.findById(g.getId()).orElseThrow(() -> new RuntimeException());
            product.addProductGenre(productGenreRepository.save(new ProductGenre(product, genre)));
        }

        return productRepository.save(product);
    }

    /**
     * 팀 작품 수정
     */
    @Transactional
    public Product updateProduct(User user, Long teamId, Product product, List<Genre> genres) {//TODO EntityGraph

        //작품 아이디로 찾아오기
        Product findProduct = productRepository.findById(product.getId()).orElseThrow(() -> new RuntimeException());

        //원래 있던 장르작품 삭제하고
        for (ProductGenre pg : findProduct.getProductGenres()) {
            productGenreRepository.deleteById(pg.getId());
        }

        //다시 만들어서 add
        for (Genre g : genres) {
            Genre genre = genreRepository.findById(g.getId()).orElseThrow(() -> new RuntimeException());
            product.addProductGenre(productGenreRepository.save(new ProductGenre(findProduct, genre)));
        }

        findProduct.updateProduct(product.getTitle(), product.getInfo(), product.getCategory());
        return findProduct;
    }

    /**
     * 팀 작품 이름만 수정
     */
    public Product updateProductTitle(User user, Long teamId, Product product) {

        //작품 아이디로 찾아오기
        Product findProduct = productRepository.findById(product.getId()).orElseThrow(() -> new RuntimeException());

        findProduct.updateProductTitle(product.getTitle());
        return findProduct;
    }

    /**
     * 팀 작품 삭제
     */
    @Transactional
    public void deleteProduct(User user, Long teamId, Long productId) {//TODO EntityGraph
        productRepository.deleteById(productId);
    }

    /**
     * 팀 작품 아이디로 하나 조회
     */
    public Product findByProductId(User user, Long teamId, Long productId) {//TODO EntityGraph
        Product findProduct = productRepository.findById(productId).orElseThrow(() -> new RuntimeException());

        return findProduct;
    }

    /**
     * 작품장르 리스트로 장르 리스트 주기
     */
    public List<Genre> findGenreList(Set<ProductGenre> productGenres) {
        List<Genre> genres = new ArrayList<>();
        for (ProductGenre pg : productGenres) {
            Genre genre = genreRepository.findById(pg.getGenre().getId()).orElseThrow(() -> new RuntimeException());
        }
        return genres;
    }

    /**
     * 작품 인물 관계 조회
     */
    public List<ProductRelation> findProductRelations(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException());
        return product.getProductRelations().stream().toList();

    }

    /**
     * 작품 플롯 전체 조회
     */
    public List<Plot> findPlots(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException());
        return product.getPlots().stream().toList();
    }
}
