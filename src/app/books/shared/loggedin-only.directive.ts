import { Directive, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Directive({
  selector: '[bmLoggedinOnly]'
})
export class LoggedinOnlyDirective implements OnDestroy{
  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private template: TemplateRef<undefined>,
    private viewContainer: ViewContainerRef
    ) {
    this.authService.isAuthenicated$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(isAuthenticated =>{
      console.log('is Authenticated: ' + isAuthenticated);
      if(isAuthenticated){
        this.viewContainer.createEmbeddedView(this.template);
      }else {
        this.viewContainer.clear();
      }
  
    });
   }

   ngOnDestroy(): void {
     this.destroy$.next();
   }

}
