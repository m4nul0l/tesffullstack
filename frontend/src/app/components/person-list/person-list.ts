import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-list.html',
  styleUrls: ['./person-list.css']
})
export class PersonListComponent implements OnInit {
  people: any[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() { this.load(); }

  load() {
    this.personService.getPeople().subscribe(res => this.people = res.data);
  }

  delete(id: number) {
    if(confirm('¿Seguro?')) {
      this.personService.deletePerson(id).subscribe(() => this.load());
    }
  }

  goToCreate() { this.router.navigate(['/person/new']); }
  
  goToEdit(id: number) { this.router.navigate(['/person/edit', id]); }
}