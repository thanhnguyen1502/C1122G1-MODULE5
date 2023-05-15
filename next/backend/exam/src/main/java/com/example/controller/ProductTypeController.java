package com.example.controller;

import com.example.model.ProductType;
import com.example.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/productType")
public class ProductTypeController {
    @Autowired
    private IProductTypeService iProductTypeService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<ProductType> showAll(){
        return iProductTypeService.findAll();
    }
}
