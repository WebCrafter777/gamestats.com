import { AuthOptions, Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"; 
import Routes from 'rest-client/src/routes'

declare module "next-auth" {
    interface Session {
      user: {
        id: number;
        username:string;
        email: string;
        profile_image: string | null;
      };
      token: string; 
    }
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "email"},
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            if(!credentials?.email || !credentials.password){
                throw new Error("Incorrect credentials!")
            }
            try {
                const response = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + Routes.Auth.AuthBaseUrl + Routes.Auth.login, {
                  email:credentials.email,
                  password:credentials.password
                });
                const {message,success,...user} = response.data
                if (user) {
                  return user;
                } else {
                  return null; 
    
                }
            } catch (error) {                           
                throw new Error("Incorrect credentials!")
            }
        }
      })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
}

export { authOptions }