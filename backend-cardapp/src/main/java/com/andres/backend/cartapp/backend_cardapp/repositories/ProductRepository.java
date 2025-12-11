package com.andres.backend.cartapp.backend_cardapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.andres.backend.cartapp.backend_cardapp.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
