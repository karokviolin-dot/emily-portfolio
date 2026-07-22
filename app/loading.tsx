export default function Loading() {
  return (
    <div className="container flex min-h-screen flex-col justify-center gap-6 py-24">
      <div className="h-6 w-40 animate-pulse rounded-full bg-secondary" />
      <div className="h-14 w-3/4 animate-pulse rounded-2xl bg-secondary" />
      <div className="h-14 w-2/3 animate-pulse rounded-2xl bg-secondary" />
      <div className="mt-4 flex gap-3">
        <div className="h-11 w-40 animate-pulse rounded-full bg-secondary" />
        <div className="h-11 w-40 animate-pulse rounded-full bg-secondary" />
      </div>
    </div>
  );
}
