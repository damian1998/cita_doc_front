import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cirugia } from '../models/Cirugia';
import { FormularioPacienteCirugia } from '../models/formularios/formularioRegPacCirg';
import { PacienteCirugia } from '../models/Paciente_cirg';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CirugiaService {

  //url='http://citadoc-env-1.eba-tere2tz5.sa-east-1.elasticbeanstalk.com/cirugia' 
  //urlPc='http://citadoc-env-1.eba-tere2tz5.sa-east-1.elasticbeanstalk.com/paciente_cirugia'
  //url='http://www.citasmedicaspepitas.info/cirugia'
  //urlPc='http://www.citasmedicaspepitas.info/paciente_cirugia'

  url='http://localhost:8090/cirugia'
  urlPc='http://localhost:8090/paciente_cirugia'
  constructor(private http: HttpClient, private tokenService: TokenService) { }


  getPacienteCirugia(id: number): Observable<any>{
    return this.http.get<any>(this.urlPc+'/'+id)
  }

  guardarCirugia(cirugia: Cirugia): Observable<any>{
    return this.http.post<any>(this.url, cirugia)
  }
  
  guardarPCirugia(formulario: FormularioPacienteCirugia): Observable<any>{
    return this.http.post<any>(this.urlPc, formulario)
  }

  updateCirugiaPaciente(formulario: FormularioPacienteCirugia): Observable<any>{
    return this.http.post<any>(this.urlPc+'/update',formulario)
  }

  updateCirugia(cirugia: Cirugia): Observable<any>{
    return this.http.post<any>(this.url+'/update',cirugia)
  }

  deleteCirugiaPaciente(id: number): Observable<any>{
    return this.http.post(this.urlPc+'/delete',id)
  }

  deleteCirugia(id: number): Observable<any>{
    return this.http.post<any>(this.url+'/delete',id)
  }
  
}