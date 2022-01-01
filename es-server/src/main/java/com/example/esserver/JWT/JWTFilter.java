package com.example.esserver.JWT;


import com.example.esserver.exception.AuthenticationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    private JWTokenUtils tokenUtils;

    private static final Set<String> SECURED_PATHS = Set.of("/scooters");


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        String encodedToken = null;

        try {
            String path = request.getServletPath();

            if (HttpMethod.OPTIONS.matches(request.getMethod()) ||
            SECURED_PATHS.stream().noneMatch(path::startsWith)){
                filterChain.doFilter(request, response);
                return;
            }

            //gets token from header and checks if it exist
            encodedToken = request.getHeader(HttpHeaders.AUTHORIZATION);

            if (encodedToken == null){
                throw new AuthenticationException("Authentication problem");
            }

            //removes bearer form the token
            encodedToken = encodedToken.replace("Bearer ", "");

            JWTokenInfo tokenInfo = tokenUtils.decode(encodedToken, false);

            request.setAttribute(tokenInfo.KEY, tokenInfo);

            filterChain.doFilter(request, response);

        } catch (AuthenticationException e){

            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Authentication error");
        }
    }
}
