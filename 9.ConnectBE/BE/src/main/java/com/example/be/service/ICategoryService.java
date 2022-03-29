package com.example.be.service;

import com.example.be.model.Category;

import java.util.Optional;

public interface ICategoryService {
    Iterable<Category> getAllCategory();

    Optional<Category> findCateById(long id);

    Category save(Category category);

    void deleteById(long id);
}
