import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: nanoid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: nanoid(),
      name: 'Vegeta',
      power: 8500,
    },
    {
      id: nanoid(),
      name: 'Trunks',
      power: 10000,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: nanoid(),
    };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
