package com.example.foodapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.foodapp.model.FoodApp;
import com.example.foodapp.repository.FoodAppRepository;

import java.util.List;

@Service
public class FoodAppService {

    @Autowired
    private FoodAppRepository foodAppRepository;

    public FoodApp addFood(FoodApp foodApp) {
        return foodAppRepository.save(foodApp);
    }

    public List<FoodApp> addMultipleFoods(List<FoodApp> foods) {
        return foodAppRepository.saveAll(foods);
    }

    public List<FoodApp> getAllFoods() {
        return foodAppRepository.findAll();
    }

    public FoodApp getFoodById(Long id) {
        return foodAppRepository.findById(id).orElse(null);
    }

    public FoodApp updateFood(Long id, FoodApp foodApp) {
        if (foodAppRepository.existsById(id)) {
            foodApp.setId(id);
            return foodAppRepository.save(foodApp);
        } else {
            return null;
        }
    }

    public boolean deleteFood(Long id) {
        if (foodAppRepository.existsById(id)) {
            foodAppRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public List<FoodApp> getFoodsByCategory(String category) {
        return foodAppRepository.findByCategory(category);
    }
}
