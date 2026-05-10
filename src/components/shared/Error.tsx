import { Link } from '@tanstack/react-router'

interface ErrorProps {
  error: Error
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="flex min-h-[60svh] flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-heading text-primary text-8xl font-bold md:text-9xl">
          Error
        </h1>
        <p className="font-heading mt-4 text-xl font-bold text-black md:text-2xl">
          Something went wrong
        </p>
        <p className="font-heebo text-muted-foreground mt-2 text-sm md:text-base">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <Link
          to="/"
          className="bg-primary font-heading mt-8 inline-block rounded-[5px] px-8 py-3 font-bold text-white transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
