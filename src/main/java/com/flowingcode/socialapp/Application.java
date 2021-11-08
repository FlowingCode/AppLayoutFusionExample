package com.flowingcode.socialapp;

import java.util.Arrays;
import com.flowingcode.addons.applayout.AppLayout;
import com.flowingcode.addons.applayout.MenuItem;
import com.flowingcode.addons.applayout.endpoint.MenuItemsProvider;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.vaadin.artur.helpers.LaunchUtil;

/**
 * The entry point of the Spring Boot application.
 *
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 *
 */
@SpringBootApplication(scanBasePackageClasses = {Application.class, AppLayout.class})
@Theme(value = "socialapp")
@PWA(name = "Social App", shortName = "Social App", offlineResources = {"images/logo.png"})
public class Application extends SpringBootServletInitializer implements AppShellConfigurator {

    public static void main(String[] args) {
        LaunchUtil.launchBrowserInDevelopmentMode(SpringApplication.run(Application.class, args));
    }

    @Bean
    public MenuItemsProvider createMenuItems() {
        return () -> Arrays.asList(
            new MenuItem("Forum").setHref("forum"),
            new MenuItem("Administration").add(
                new MenuItem("Contacts").setHref("contacts")),
            new MenuItem("About").setHref("about"));
    }

}
