export default function Loading() {
  return (
    <div className="flex min-h-[60svh] flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="bg-primary h-8 w-1 origin-bottom animate-[pulse_1.4s_ease-in-out_infinite] rounded-full"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
      <p className="text-muted-foreground text-sm tracking-[0.2em]">Loading</p>
    </div>
  )
}
