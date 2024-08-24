package com.example.foodapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.foodapp.model.FoodApp;
import com.example.foodapp.service.FoodAppService;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/food")
public class FoodAppController {

    @Autowired
    private FoodAppService foodAppService;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> addFood(@RequestBody FoodApp foodApp) {
        FoodApp savedFoodApp = foodAppService.addFood(foodApp);
        return ResponseEntity.ok(convertToResponse(savedFoodApp));
    }

    @PostMapping("/bulk")
    public ResponseEntity<List<Map<String, Object>>> addMultipleFoods(@RequestBody List<FoodApp> foods) {
        List<FoodApp> savedFoods = foodAppService.addMultipleFoods(foods);
        List<Map<String, Object>> response = savedFoods.stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all")
    public ResponseEntity<List<FoodApp>> getAllFoods() {
        List<FoodApp> foods = foodAppService.getAllFoods();
        return ResponseEntity.ok(foods);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FoodApp> getFoodById(@PathVariable Long id) {
        FoodApp foodApp = foodAppService.getFoodById(id);
        if (foodApp != null) {
            return ResponseEntity.ok(foodApp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/veg")
    public ResponseEntity<List<FoodApp>> getVegFoods() {
        List<FoodApp> vegFoods = foodAppService.getFoodsByCategory("Veg");
        return ResponseEntity.ok(vegFoods);
    }

    @GetMapping("/non-veg")
    public ResponseEntity<List<FoodApp>> getNonVegFoods() {
        List<FoodApp> nonVegFoods = foodAppService.getFoodsByCategory("Non-Veg");
        return ResponseEntity.ok(nonVegFoods);
    }

    @GetMapping("/chinese")
    public ResponseEntity<List<FoodApp>> getChineseFoods() {
        List<FoodApp> chineseFoods = foodAppService.getFoodsByCategory("Chinese");
        return ResponseEntity.ok(chineseFoods);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateFood(@PathVariable Long id, @RequestBody FoodApp foodApp) {
        FoodApp updatedFoodApp = foodAppService.updateFood(id, foodApp);
        if (updatedFoodApp != null) {
            return ResponseEntity.ok(convertToResponse(updatedFoodApp));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable Long id) {
        boolean deleted = foodAppService.deleteFood(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private Map<String, Object> convertToResponse(FoodApp foodApp) {
        return Map.of(
            "id", foodApp.getId(),
            "name", foodApp.getName(),
            "description", foodApp.getDescription(),
            "price", foodApp.getPrice(),
            "category", foodApp.getCategory(),
            "imageUrl", foodApp.getImageUrl()
        );
    }
}
