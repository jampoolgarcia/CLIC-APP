import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

export class SupabaseDB {

    private static supabase: SupabaseClient;
    private static con = 0;

    private constructor(){

    }

    public static getInstance(){
        if(this.supabase === null || this.supabase === undefined) 
            this.con++,
            this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
            
        console.log(`getInstance ${this.con}`)
        return this.supabase;
    }

}