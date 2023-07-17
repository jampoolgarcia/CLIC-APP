// variable de entorno
import { environment } from "src/environments/environment";

// supabase
import { REALTIME_POSTGRES_CHANGES_LISTEN_EVENT as EVENT, RealtimePostgresChangesPayload as payload, SupabaseClient, createClient, RealtimeChannel } from '@supabase/supabase-js';


export class SupabaseDB {

    private static supabase: SupabaseClient;
    private static chanel: RealtimeChannel;

    private constructor(){

    }

    public static getInstance(){
        if(this.supabase === null || this.supabase === undefined) 
            this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
        
        return this.supabase;
    }


}