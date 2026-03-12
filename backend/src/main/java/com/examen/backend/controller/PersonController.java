package com.examen.backend.controller;

import com.examen.backend.model.Person;
import com.examen.backend.repository.PersonRepository;
import com.examen.backend.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/person")
@CrossOrigin(origins = "*") 
public class PersonController {

    @Autowired
    private PersonRepository repo;

    @GetMapping
    public ResponseDTO list() {
        return new ResponseDTO(true, "Ok", repo.findAll());
    }

    @PostMapping
    public ResponseDTO create(@RequestBody Person p) {
        return new ResponseDTO(true, "Creado", repo.save(p));
    }

    @DeleteMapping("/{id}")
    public ResponseDTO delete(@PathVariable Integer id) {
        repo.deleteById(id);
        return new ResponseDTO(true, "Eliminado", null);
    }
}
