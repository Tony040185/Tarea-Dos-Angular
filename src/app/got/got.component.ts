import { Component, OnInit } from '@angular/core';
import { GotService } from '../services/got.service';

@Component({
  selector: 'app-got',
  templateUrl: './got.component.html',
  styleUrls: ['./got.component.css']
})
export class GotComponent implements OnInit {

  got:any;

  constructor(private gs: GotService){}

  ngOnInit(): void{

    this.obtienePersonaje();
  }

  obtienePersonaje(){
    this.gs.getGot().subscribe(resp =>{
      this.got = resp;

      console.log(this.got);
    })

  }

  

}
