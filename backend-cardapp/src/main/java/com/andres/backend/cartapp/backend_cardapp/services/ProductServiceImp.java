package com.andres.backend.cartapp.backend_cardapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.andres.backend.cartapp.backend_cardapp.models.Product;
import com.andres.backend.cartapp.backend_cardapp.repositories.ProductRepository;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Product> findAll() {
        return (List<Product>) repository.findAll();
    }
}
