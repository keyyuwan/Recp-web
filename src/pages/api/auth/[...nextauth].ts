import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        axios.post("http://localhost:3003/api/users", {
          name: user.name,
          email: user.email,
          avatar: user.image,
        })

        return true
      } catch (error) {
        console.log(error)

        return false
      }
    },
  },
})
