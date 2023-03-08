import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  response:any;
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    //   Swal.fire({
    //     title: 'هل تريد الاستمرار؟',
    //     icon: 'question',
    //     iconHtml: '؟',
    //     confirmButtonText: 'نعم',
    //     cancelButtonText: 'لا',
    //     showCancelButton: true,
    //     showCloseButton: true
    //   }).then((result:any) =>{
    //     console.log(result)

    //     if(result.isConfirmed === true){
    //       console.log(1)
    //       this.response = true

    //     }else {
    //       console.log(2)
    //       this.response = false
    //     }
    //   },
    //   )

    //  if(this.response){
    //   console.log(3)
    //   return true
    //  }else{
    //   console.log(4)
    //   return false
    //  }
    let response = confirm("are ")
    if (response == true){
      return true
    }else{  
      return false
    }
  }

}
