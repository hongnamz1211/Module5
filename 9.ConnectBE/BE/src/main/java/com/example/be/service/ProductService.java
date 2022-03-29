package com.example.be.service;

import com.example.be.model.Product;
import com.example.be.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Iterable<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findProductById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteById(long id) {
        productRepository.deleteById(id);
    }
}
