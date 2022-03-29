package com.example.be.controller;

import com.example.be.model.Product;
import com.example.be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping()
    public ResponseEntity<Iterable<Product>> findAllProduct() {
        return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable Long id) {
        return new ResponseEntity<>(productService.findProductById(id).get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> save(@RequestBody Product product) {
        productService.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Optional<Product> product1 = productService.findProductById(id);
        if (!product1.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        product.setId(product1.get().getId());
        productService.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable Long id) {
        Optional<Product> product = productService.findProductById(id);
        if (!product.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        productService.deleteById(id);
        return new ResponseEntity<>(product.get(), HttpStatus.NO_CONTENT);
    }
}
