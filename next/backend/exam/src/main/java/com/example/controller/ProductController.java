package com.example.controller;

import com.example.model.Product;
import com.example.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<Product> showAll(){
        return productService.findAll();
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{id}")
    public void deleteMusic(@PathVariable int id){
        productService.delete(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping()
    public void createMusic(@RequestBody Product music){
        productService.create(music);
    }
}
