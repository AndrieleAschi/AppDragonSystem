import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root',
})

export class ErrorService {
 errors: string[] = [];

 add(error: string) {
   this.errors.push(error);
 }

 clear() {
   this.errors = [];
 }
}