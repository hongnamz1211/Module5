package com.example.be.service;

import com.example.be.model.Category;
import com.example.be.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryService implements ICategoryService{
    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public Iterable<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> findCateById(long id) {
        return categoryRepository.findById(id);
    }

    @Override
    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public void deleteById(long id) {
        categoryRepository.deleteById(id);
    }
}
