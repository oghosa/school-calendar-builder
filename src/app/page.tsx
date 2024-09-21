import AuthView from '@/components/auth-view'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome to School Calendar Builder</h1>
        <AuthView />
      </div>
    </main>
  )
}