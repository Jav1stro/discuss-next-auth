import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing github oauth credentials");
}

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    // Credentials({
    //   name: "Credentials",
    //   credentials: {
    //     phone: {},
    //     password: {},
    //   },
    //   async authorize(credentials) {
    //     const res = await axios.post<LoginResponse>(
    //       process.env.API_BASE_URL + "api/v1/auth/login",
    //       credentials,
    //       {
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (res.status === 200) {
    //       const { name, id, phone, role, picture } = res.data.user;
    //       const user = {
    //         id,
    //         name,
    //         phone,
    //         role,
    //         picture,
    //         token: res.data.token,
    //       };
    //       return user; // User interface we declared in next-auth.d.ts
    //     } else throw new Error("Login failed");
    //   },
    // }),
  ],
  callbacks: {
    // verify who a user is, ussually not needed, here is fixing a bug
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
