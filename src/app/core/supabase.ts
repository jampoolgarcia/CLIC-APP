import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

export class SupabaseDB {

    private static supabase: SupabaseClient;

    private constructor(){

    }

    public static getInstance(){
        if(this.supabase === null || this.supabase === undefined) 
            this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
        
        return this.supabase;
    }

}