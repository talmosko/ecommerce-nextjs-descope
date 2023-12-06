import "next-auth";
import "next-auth/jwt";

type AuthRole = "Admin" | "Client";

declare module "next-auth" {
  interface User {
    roles: AuthRole[];
  }

  interface Session {
    user: User;
  }

  interface Profile {
    roles: AuthRole[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles: AuthRole[];
  }
}
