import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pis-trackform',
  templateUrl: './trackform.component.html',
  styleUrls: ['./trackform.component.css']
})
export class TrackformComponent implements OnInit {

  constructor (private banco: DatabaseService) {}
  
  ngOnInit(): void {
    
  }

  submit (valor: any){
    this.banco.potTrack(valor.value);
  }

}
