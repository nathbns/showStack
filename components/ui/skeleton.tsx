function LoadingSkeleton() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Logo/titre skeleton */}
        <div className="w-48 h-12 rounded-lg mx-auto animate-pulse border-1 border-[var(--border)] border-dashed"></div>

        {/* Texte skeleton */}
        <div className="space-y-3">
          <div className="h-6 rounded-lg w-3/4 mx-auto animate-pulse border-1 border-[var(--border)] border-dashed"></div>
          <div className="h-6 rounded-lg w-1/2 mx-auto animate-pulse border-1 border-[var(--border)] border-dashed"></div>
        </div>

        {/* Bouton skeleton */}
        <div className="h-12 rounded-lg w-40 mx-auto animate-pulse border-1 border-[var(--border)] border-dashed"></div>

        {/* Image skeleton */}
        <div className="h-64 rounded-lg w-full mx-auto mt-8 animate-pulse border-1 border-[var(--border)] border-dashed"></div>
      </div>
    </div>
  );
}

export { LoadingSkeleton };
