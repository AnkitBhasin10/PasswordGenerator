import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordGenerator';

  length=0;
  useLetters=false;
  useNumbers=false;
  useSymbols=false;
  password='';

  onChangeLength(value:string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeLetters(){
    this.useLetters = !this.useLetters;
  }

  onChangeNumbers(){
    this.useNumbers = !this.useNumbers;
  }

  onChangeSymbols(){
    this.useSymbols = !this.useSymbols;
  }

  onGeneratePassword(){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let valueChars = '';
    let generatedPassword = '';
    if(this.useLetters){
      valueChars += letters;
    }

    if(this.useNumbers){
      valueChars += numbers;
    }

    if(this.useSymbols){
      valueChars += symbols;
    }

    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random() * valueChars.length);
      generatedPassword += valueChars[index];
    }

    this.password = generatedPassword;
  }

  getGeneratedPassword(){
    return this.password;
  }
}
