import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Profile/Profile.css";
import Logout from "../Logout/Logout";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    // console.log(user);
    // console.log("esto es user", user);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        isAuthenticated && (
            <div className="container-profile">
                <>
                    <img
                        className="fotito"
                        src={user?.picture}
                        alt="fotito"
                    ></img>
                </>

                <h6 className=" d-flex align-items-center nickname">
                    {user.nickname}
                </h6>

                <Logout />
            </div>
        )
    );
}
