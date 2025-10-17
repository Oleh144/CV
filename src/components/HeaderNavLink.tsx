import {NavLink} from "react-router";

function HeaderNavLink({children, destination}: { children: string, destination: string }) {
    return (
        <NavLink to={destination} end style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : ""
            };
        }}>{children}</NavLink>
    )
}

export default HeaderNavLink