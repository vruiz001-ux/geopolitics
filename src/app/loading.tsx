export default function Loading() {
  return (
    <div className="container-wide py-10 lg:py-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-9">
          <div className="h-64 animate-pulse rounded-lg bg-rule/60 lg:h-96" />
          <div className="h-6 w-1/3 animate-pulse rounded bg-rule/60" />
          <div className="h-10 w-3/4 animate-pulse rounded bg-rule/60" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-rule/60" />
        </div>
        <div className="space-y-3 lg:col-span-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 animate-pulse rounded bg-rule/60" />
          ))}
        </div>
      </div>
    </div>
  );
}
