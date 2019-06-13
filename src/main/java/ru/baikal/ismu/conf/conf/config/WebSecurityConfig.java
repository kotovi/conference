package ru.baikal.ismu.conf.conf.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import ru.baikal.ismu.conf.conf.service.UserService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder(8);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/", "/login", "/js/navbar.js", "/js/registration.js","/js/bootstrap.min.js", "/css/**","/registration","/userlist", "/nav", "/js/greeting.js" , "/success_unsubscrube", "/unsuccess_unsubscrube", "/unsubscribe", "/unsubscribe/**", "/politic").permitAll()
                .antMatchers("/js/tezis.js", "/tezis", "/upload").hasAnyAuthority("USER","MODERATOR", "ADMIN")
                .antMatchers("/js/tickets.js", "/js/rejectedTickets.js", "/rejectedticket","/tickets", "/agreetickets").hasAnyAuthority("MODERATOR", "ADMIN")
                .antMatchers("/desk","/js/desk.js").hasAnyAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
                .rememberMe()
                .and()
                .logout()
                .permitAll();
        http.csrf().disable();
    }

    @Override
    protected  void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService)
                .passwordEncoder(passwordEncoder);

    }

}
