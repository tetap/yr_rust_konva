import { Suspense, lazy } from 'react'

export function lazyComponent(func: () => Promise<{ default: React.ComponentType<any> }>) {
  const Element = lazy(func)
  return (
    <Suspense
      fallback={
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}
        >
          Loading...
        </div>
      }
    >
      <Element />
    </Suspense>
  )
}
