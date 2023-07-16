import { FormGroup } from "@angular/forms";
import { Helpers } from "@core/helpers";

export const todayHours = (fg: FormGroup): void => {

      const hourControl = fg.get('hour');
      const { date } = fg.value;
      const err = { 'todayHours': true };    

      if(!hourControl || !date) {
        hourControl?.setErrors(err); 
        return;
      }


      if(date === Helpers.dateNow()){
        const hour = (hourControl?.value as string).substring(0, 2)
    
        if(Number(hour) <= Helpers.hoursNow()) {
          hourControl?.setErrors(err);
          return;
        }
      }

      hourControl?.setErrors(null);

  }