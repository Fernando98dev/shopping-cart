package com.andres.backend.cartapp.backend_cardapp.services;

import java.util.List;

import com.andres.backend.cartapp.backend_cardapp.models.Product;

public interface ProductService {
    List<Product> findAll();
}
