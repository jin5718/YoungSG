package com.d208.AIclerk.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        /**
         * 구독 클라이언트한테 전송
         * sub 이 채팅방 구독합니다!!
             * pub /pub/chat/123/SendMessage [ 이방에 메시지..합니다!]
         * */
        registry.enableSimpleBroker("/sub","/topic");  //수신임

         registry.setApplicationDestinationPrefixes("/pub"); //발신 어미사?임
    }


    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOriginPatterns("http://localhost:3000", "http://localhost:5173") // 구체적인 출처 지정
                .withSockJS();
    }







}
