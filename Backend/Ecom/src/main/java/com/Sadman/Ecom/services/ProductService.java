package com.Sadman.Ecom.services;

import com.Sadman.Ecom.dto.ProductDto;
import com.Sadman.Ecom.entities.Product;

import java.util.List;
import java.util.UUID;

public interface ProductService {
    public Product addProduct(ProductDto product);
    public List<Product> getAllProducts(UUID categoryId, UUID typeId);

}
