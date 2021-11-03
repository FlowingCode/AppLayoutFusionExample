package com.flowingcode.socialapp.data.service;

import com.flowingcode.socialapp.data.entity.SamplePerson;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vaadin.fusion.Nonnull;
import javax.validation.constraints.Email;
import java.time.LocalDate;

public interface SamplePersonRepository extends JpaRepository<SamplePerson, Integer> {

}