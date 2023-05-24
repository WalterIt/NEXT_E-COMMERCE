import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@lib/mongodb";
// import { connectToDB } from "@utils/database";
// import User from "@models/user";

// console.log({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_SECRET,
// });

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),

  //   callbacks: {
  // async session({ session }) {
  //   const sessionUser = await User.findOne({
  //     email: session.user.email,
  //   });
  //   session.user.id = sessionUser._id.toString();
  //   return session;
  // },
  //     async signIn({ profile }) {
  //       try {
  //         await connectToDB();
  //         // check if a user is already exists in the database
  //         const userExists = await User.findOne({ email: profile.email });
  //         // if not, create a new user
  //         if (!userExists) {
  //           await User.create({
  //             username: profile.name.replace(" ", "").toLowerCase(),
  //             email: profile.email,
  //             image: profile.picture,
  //           });
  //         }
  //         return true;
  //       } catch (error) {
  //         console.log(error);
  //         return false;
  //       }
  //     },
  //   },
});

export { handler as GET, handler as POST };
