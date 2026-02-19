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
        async signIn({ user }) {
            if (!user.email) return false;

            try {
                const adminEmail = process.env.ADMIN_EMAIL?.trim();
                const role = user.email === adminEmail ? 'ADMIN' : 'CUSTOMER';

                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email },
                });

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name,
                            googleId: user.id,
                            role: role,
                        },
                    });
                } else if (existingUser.role !== role) {
                    await prisma.user.update({
                        where: { email: user.email },
                        data: { role: role },
                    });
                }
            } catch (err) {
                // If DB write fails, still allow sign-in (user just won't have DB record yet)
                console.error('[NextAuth] signIn DB error:', err);
            }

            return true;
        },
        async session({ session }) {
            if (session.user?.email) {
                try {
                    const dbUser = await prisma.user.findUnique({
                        where: { email: session.user.email },
                    });
                    if (dbUser) {
                        (session.user as { role?: string; id?: string }).role = dbUser.role;
                        (session.user as { role?: string; id?: string }).id = dbUser.id;
                    }
                } catch (err) {
                    console.error('[NextAuth] session DB error:', err);
                }
            }
            return session;
        },
    },
});

export { handler as GET, handler as POST };
