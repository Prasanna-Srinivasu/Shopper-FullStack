package com.yourapp.backend.ecommerce_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yourapp.backend.ecommerce_backend.entity.Product;
import com.yourapp.backend.ecommerce_backend.repository.ProductRepository;
import com.yourapp.backend.ecommerce_backend.service.AiGenerativeService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private AiGenerativeService aiGenerativeService;
    
    // GET ALL PRODUCTS
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return ResponseEntity.ok(products);
    }
    
    // GET PRODUCT BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }
    
    // ✅ POST NEW PRODUCT (THIS WAS MISSING)
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        try {
            System.out.println("DEBUG => name=" + product.getName()
                + ", price=" + product.getPrice()
                + ", new_price=" + product.getNew_price()
                + ", old_price=" + product.getOld_price());

            Product savedProduct = productRepository.save(product);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    // GET AI DESCRIPTION FOR PRODUCT
    @GetMapping("/{id}/generate-description")
    public ResponseEntity<Product> generateDescription(@PathVariable Long id) {
        Optional<Product> productOpt = productRepository.findById(id);
        if (productOpt.isPresent()) {
            Product product = productOpt.get();
            String description = aiGenerativeService.generateProductDescription(product.getName());
            product.setDescription(description);
            Product savedProduct = productRepository.save(product);
            return ResponseEntity.ok(savedProduct);
        }
        return ResponseEntity.notFound().build();
    }
}