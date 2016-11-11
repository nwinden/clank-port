import { Component, OnInit } from '@angular/core';

import {Card} from './Card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  Deck : Card[] = [
        {
            Name: 'Burgle',
            Effect: [],
            Swords: 0,
            Skill: 1,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Burgle',
            Effect: [],
            Swords: 0,
            Skill: 1,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Burgle',
            Effect: [],
            Swords: 0,
            Skill: 1,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Burgle',
            Effect: [],
            Swords: 0,
            Skill: 1,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Burgle',
            Effect: [],
            Swords: 0,
            Skill: 1,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Burgle',
            Effect: [],
            Swords: 0,
            Skill: 1,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Stumble',
            Effect: [
                '+1 Clank!'
            ],
            Swords: 0,
            Skill: 0,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Stumble',
            Effect: [
                '+1 Clank!'
            ],
            Swords: 0,
            Skill: 0,
            Boots: 0,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Scramble',
            Effect: [],
            Swords: 0,
            Skill: 1,
            Boots: 1,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        },
        {
            Name: 'Sidestep',
            Effect: [],
            Swords: 0,
            Skill: 0,
            Boots: 1,
            VPTot: 0,
            SkillCost: 0,
            DragonAtkSmbl: false
        }
    ];

  ngOnInit() {
  }

}