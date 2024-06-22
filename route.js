import CredentialsProvider from "next-auth/providers/credentials"
import {User} from '../../../../models/User';
import bcrypt from 'bcrypt';
import NextAuth from "next-auth"
import * as mongoose from "mongoose";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from '@/libs/mongoConnect';

 export const authOptions= {
  secret:process.env.SECRET, 
  adapter: MongoDBAdapter(clientPromise),
    providers:[
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
        CredentialsProvider({
          
            name: 'Credentials',
            id: 'Credentials',
            credentials: {
              username:{label: "Username", type: "text", placeholder: "jsmith" },
              email:{label: "Email", type: "email", placeholder: "email@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
             
              const email = credentials?.email;
              const password = credentials?.password;
               mongoose.connect(process.env.MONGO_URL);
               const user = await User.findOne({email});
               const passwordOk = user && bcrypt.compareSync(password,user.password);

               if (passwordOk){
                return user;
               }
            
              return null
            }
          })
    ],
    
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

