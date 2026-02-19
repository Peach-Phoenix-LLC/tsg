import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (!user.email) return false;

            // Check if user exists, if not create them
            const existingUser = await prisma.user.findUnique({
                where: { email: user.email },
            });

            if (!existingUser) {
                await prisma.user.create({
                    data: {
                        email: user.email,
                        name: user.name,
                        googleId: user.id,
                        role: 'CUSTOMER', // Default role
                    },
                });
            }
            return true;
        },
        async session({ session, user, token }) {
            if (session.user) {
                const dbUser = await prisma.user.findUnique({
                    where: { email: session.user.email! },
                });
                if (dbUser) {
                    (session.user as any).role = dbUser.role;
                    (session.user as any).id = dbUser.id;
                }
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST };
