"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LoadingSkeleton } from "@/components/ui/skeleton";
// Type User basé sur le schéma Drizzle (simplifié pour l'affichage actuel)
// drizzle/db/schema.ts contient: id, name, email, emailVerified, image, description, createdAt, updatedAt
type User = {
  id: string;
  name: string | null; // name est notNull dans le schéma, mais gardons null pour la flexibilité
  email: string | null; // email est notNull, unique
  image: string | null;
  // emailVerified?: boolean;
  // description?: string | null;
  // createdAt?: Date | string; // Les dates peuvent être des string après sérialisation JSON
  // updatedAt?: Date | string;
};

export default function ExplorePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        if (err instanceof Error) {
          setError(`Could not load users: ${err.message}`);
        } else {
          setError("Could not load users. An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <main className="container max-w-4xl mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center tracking-tight">
        Explore Our Community
      </h1>

      {loading && <LoadingSkeleton />}

      {error && (
        <div className="text-center py-10 text-red-500 bg-red-500/10 p-6 rounded-lg">
          <p className="text-xl font-semibold">Oops! Something went wrong.</p>
          <p className="text-md mt-2">{error}</p>
        </div>
      )}

      {!loading && !error && users.length === 0 && (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">
            No users found at the moment. Be the first to join!
          </p>
        </div>
      )}

      {!loading && !error && users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const displayName = user.name || "Anonymous User";
  const displayEmail = user.email;

  return (
    <Link href={`/profile/${user.id}`} passHref legacyBehavior>
      <a className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center p-6 text-center h-full transform hover:-translate-y-1 no-underline hover:border-primary/50">
        {user.image ? (
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-5 border-2 border-primary/30 shadow-sm">
            <img
              src={user.image}
              alt={`${displayName}'s avatar`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full mb-5 bg-muted flex items-center justify-center text-muted-foreground text-4xl font-semibold border-2 border-primary/30 shadow-sm">
            {displayName.charAt(0).toUpperCase()}
          </div>
        )}
        <h2
          className="text-xl font-semibold mb-1 text-card-foreground w-full truncate"
          title={displayName}
        >
          {displayName}
        </h2>
        {displayEmail && (
          <p
            className="text-sm text-muted-foreground w-full truncate"
            title={displayEmail}
          >
            {displayEmail}
          </p>
        )}
      </a>
    </Link>
  );
}
