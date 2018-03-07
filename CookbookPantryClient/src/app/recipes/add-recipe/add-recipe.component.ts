import { Component, OnInit } from '@angular/core';
import { Ingredient } from  '../../model/Ingredient';
import { Instruction } from '../../model/Instruction';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
    ingredients: Array<Ingredient> = [];
    instructions: Array<Instruction> = [];

    constructor() { }

    ngOnInit() {
    }

    addIngredient(name: string, amount: string) {
        this.ingredients.push({'name': name, 'amount': amount});
    }

    addInstruction(instruction: string) {
        this.instructions.push({'instruction': instruction});
    }
}
