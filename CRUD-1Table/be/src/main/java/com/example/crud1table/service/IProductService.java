package com.example.crud1table.service;

import com.example.crud1table.model.Product;

import java.util.Optional;

public interface IProductService {
    Iterable<Product> findAllProduct();

    Optional<Product> findById(long id);

    Product save(Product product);

    void deleteById(long id);
}
