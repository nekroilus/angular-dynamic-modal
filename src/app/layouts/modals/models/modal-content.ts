import { Type } from "@angular/core";

export interface ModalContent{

}


export interface ComponentType<T> {
    new (...args: any[]): T;
  }