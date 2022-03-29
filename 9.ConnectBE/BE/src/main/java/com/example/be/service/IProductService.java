package com.example.be.service;

import com.example.be.model.Category;
import com.example.be.model.Product;

import java.util.Optional;

public interface IProductService {
    Iterable<Product> getAllProduct();

    Optional<Product> findProductById(long id);

    Product save(Product product);

    void deleteById(long id);
}
