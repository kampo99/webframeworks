package com.example.esserver.JWT;


import com.example.esserver.exception.AuthenticationException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;

@Component
public class JWTokenUtils {

    public static final String JWT_ADMIN_CLAIM = "admin";

    @Value("${jwt.issuer:MyOrganisation}")
    private String issuer;

    @Value("${jwt.pass-phrase}")
    private String passphrase;

    @Value("${jwt.expiration-seconds}")
    private int expiration;

    @Value("${jwt.refresh-expiration-seconds}")
    private int refreshExpiration;

    //creates the json web token
    public String encode(String id, boolean admin){

        Key key = getKey(passphrase);

        String token = Jwts.builder()
                .claim(Claims.SUBJECT, id)
                .claim(JWT_ADMIN_CLAIM, Boolean.toString(admin))
                .setIssuer(issuer)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration * 1000))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        return token;
    }


    private Key getKey(String passphrase){
        byte hmacKey[] = passphrase.getBytes(StandardCharsets.UTF_8);
        Key key = new SecretKeySpec(hmacKey, SignatureAlgorithm.HS512.getJcaName());
        return key;
    }

    public JWTokenInfo decode(String encodedToken, boolean expirationLenient) throws AuthenticationException {
        try {

            Key key = getKey(passphrase);

            Jws<Claims> jws = Jwts.parserBuilder()
                    .setSigningKey(passphrase.getBytes())
                    .build()
                    .parseClaimsJws(encodedToken);
            Claims claims = jws.getBody();

            return generateTokenInfo(claims);
        } catch (MalformedJwtException |
                UnsupportedJwtException | IllegalArgumentException| SignatureException e){
            throw new AuthenticationException(e.getMessage());
        } catch (ExpiredJwtException e){
            if (!expirationLenient){
                throw new AuthenticationException(e.getMessage());
            } else {
                return generateTokenInfo(e.getClaims());
            }
        }
    }

    private JWTokenInfo generateTokenInfo(Claims claims){
        JWTokenInfo tokenInfo = new JWTokenInfo();
        tokenInfo.setEmail(claims.get(Claims.SUBJECT).toString());

        String isAdmin = claims.get(JWT_ADMIN_CLAIM).toString();
        tokenInfo.setAdmin(Boolean.parseBoolean(isAdmin));

        tokenInfo.setIssuedAt(claims.getIssuedAt());
        tokenInfo.setExpiration(claims.getExpiration());

        return tokenInfo;
    }
}
