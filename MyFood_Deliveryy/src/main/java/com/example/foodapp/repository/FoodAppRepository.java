package com.example.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.foodapp.model.FoodApp;
import java.util.List;

@Repository
public interface FoodAppRepository extends JpaRepository<FoodApp, Long> {
    List<FoodApp> findByCategory(String category);
}
