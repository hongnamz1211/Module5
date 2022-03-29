package com.example.be.controller;

import com.example.be.model.Category;
import com.example.be.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @GetMapping()
    public ResponseEntity<Iterable<Category>> findAllCate() {
        return new ResponseEntity<>(categoryService.getAllCategory(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> findCateById(@PathVariable Long id) {
        return new ResponseEntity<>(categoryService.findCateById(id).get(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Category> save(@RequestBody Category category) {
        categoryService.save(category);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category category) {
        Optional<Category> cateById = categoryService.findCateById(id);
        if (!cateById.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        category.setId(cateById.get().getId());
        categoryService.save(category);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Category> deleteCategory(@PathVariable Long id) {
        Optional<Category> category = categoryService.findCateById(id);
        if (!category.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        categoryService.deleteById(id);
        return new ResponseEntity<>(category.get(), HttpStatus.NO_CONTENT);
    }

}
