package com.devsuperior.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entitys.Sale;
import com.devsuperior.dsmeta.services.SMSService;
import com.devsuperior.dsmeta.services.SaleServices;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {


	@Autowired(required = true)
	private SaleServices services;
	
	@Autowired(required = true)
	private SMSService smsservice;

	@GetMapping
	@CrossOrigin(origins ="https://dsmeta-fernando.netlify.app")
	public Page<Sale> findSales(@RequestParam(value = "minDate", defaultValue = "") String minDate,
			@RequestParam(value = "maxDate", defaultValue = "") String maxDate, Pageable pageable) {
		
		return services.findSales(minDate, maxDate, pageable);
	} 

	@GetMapping("/{id}/notification")
	@CrossOrigin("https://dsmeta-fernando.netlify.app")
	public void notifySms(@PathVariable Long id) {
		smsservice.sendSms(id);
	}

}
