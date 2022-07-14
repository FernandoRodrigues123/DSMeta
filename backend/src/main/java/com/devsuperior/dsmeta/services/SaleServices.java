package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entitys.Sale;
import com.devsuperior.dsmeta.repository.SalesRepository;

@Service
public class SaleServices {
	
	@Autowired
	private SalesRepository repository;
	
	public List<Sale> findSales() {
		return this.repository.findAll();
	}

}
