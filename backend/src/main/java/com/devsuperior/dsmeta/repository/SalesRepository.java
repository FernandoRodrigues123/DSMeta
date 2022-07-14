package com.devsuperior.dsmeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entitys.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long>{
	
	
}
