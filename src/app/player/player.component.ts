import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

    constructor() { }

    Deck: Card[] = [
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

    Hand: Card[] = [];
    Discard: Card[] = [];

    draw(): void {

        this.Hand.forEach(card => {
            this.Discard.push(card);
        });
        console.log(this.Discard);
        this.Hand = [];

        if (this.Deck.length >= 5) {
            console.log('Working');
            for (let i = 0; i < 5; i++) {
                this.Hand.push(this.Deck.shift());
            }
            console.log(this.Hand);
            console.log(this.Deck);
        }
    }

    ngOnInit() {
        this.draw();
    }

}
