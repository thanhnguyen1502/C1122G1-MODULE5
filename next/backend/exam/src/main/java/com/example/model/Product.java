package com.example.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "không được để trống !")
    private String productId;

    @Size(max = 20)
    private String name;

    @ManyToOne
    @JoinColumn(name = "product_type_id", referencedColumnName = "id")
    @JsonManagedReference
    private ProductType productType;

    private String count;

    private String date;

    public Product() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String author) {
        this.count = author;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String startDay) {
        this.date = startDay;
    }
}
