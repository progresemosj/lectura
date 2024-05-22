import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  // constructor(private db: AngularFirestore) { }

  // aumentarContador(){
  //   const contadorRef = this.db.collection('contador').doc('visitas');
  //   contadorRef.set({contador: 1}, {merge:true});
  // }

  // obtenerContador():Observable<any>{
  //   return this.db.collection('contador').doc('visitas').valueChanges();
  // }
}
