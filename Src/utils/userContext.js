import { createContext } from "react";

const UserContext = createContext({
    user: {
        id: null,
        name: null,
        email: null,
        user_type: null,
        email_verified_at: null
    }
});

export default UserContext;
