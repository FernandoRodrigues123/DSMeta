package com.devsuperior.dsmeta.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entitys.Sale;
import com.devsuperior.dsmeta.repository.SalesRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SMSService {

	@Value("${twilio.sid}")
	private String twilioSid ;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired(required = true)
	private SalesRepository salesRepository;

	@Transactional
	public void sendSms(Long id) {

		Sale sale = salesRepository.findById(id).get();
		
	
		String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();

		String msg = "O Vendedor " + sale.getSallerName() + " foi destaque em " + date + " com um total de R$"
				+ String.format("%.2f", sale.getAmount());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
