import { supabase } from "../lib/supabase"

export const authRepository = {
    async signup(name, email, password) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name } },
        });
        if (error) throw new Error(error.message);
        return {
            ...data.user,
            userName: data.user.user_metadata.name
        };
    },

    async signin(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) throw new Error(error.message);
        return {
            ...data.user,
            userName: data.user.user_metadata.name
        };
    },

    async getCurrentUser() {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw new Error(error.message);
        if (data.session == null) return;

        return {
            ...data.session.user,
            userName: data.session.user.user_metadata.name
        };
    },

    async signout() {
        const { error } = await supabase.auth.signOut();
        if (error) throw new Error(error.message);
        return true;
    }
}