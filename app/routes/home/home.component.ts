import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: 'app/routes/home/home.component.html',
})

export class HomeComponent implements  OnInit {
    query: string = "";
    filtered: any[];
    forms: any[] = [
        {formID: "1", name: "dog whisperer", img: "http://lorempixel.com/300/200/abstract/", desc: "talk to dogs"},
        {formID: "2", name: "chef", img: "http://lorempixel.com/300/200/abstract/", desc: "cookin'"},
        {formID: "3", name: "web wizard", img: "http://lorempixel.com/300/200/abstract/", desc: "the best job"},
        {formID: "4", name: "regular wizard", img: "http://lorempixel.com/300/200/abstract/", desc: "another good one"},
        {formID: "5", name: "president", img: "http://lorempixel.com/300/200/abstract/", desc: "of the US? or just ASWWU?"},
        {formID: "6", name: "dog whisperer", img: "http://lorempixel.com/300/200/abstract/", desc: "talk to dogs"},
        {formID: "7", name: "chef", img: "http://lorempixel.com/300/200/abstract/", desc: "cookin'"},
        {formID: "8", name: "web wizard", img: "http://lorempixel.com/300/200/abstract/", desc: "the best job"},
        {formID: "9", name: "regular wizard", img: "http://lorempixel.com/300/200/abstract/", desc: "another good one"},
        {formID: "10", name: "president", img: "http://lorempixel.com/300/200/abstract/", desc: "of the US? or just ASWWU?"},
    ];

    ngOnInit() {
        this.filtered = this.forms;
    }

    filterItems() {
      var self = this;
      this.filtered = this.forms.filter(function(el) {
          var doc = el.name + el.desc;
         return doc.toLowerCase().indexOf(self.query.toLowerCase()) > -1;
      })
    }
}

