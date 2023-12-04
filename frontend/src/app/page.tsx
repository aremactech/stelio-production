import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-25 ">
      <div className="flex flex-col items-center min-h-[calc(100vh-44px)] justify-center">
        <Image src="/steliologov1s.svg" height={100} width={250} alt={''} />
        <h1 className="text-3xl tracking-tight max-w-3xl font-regular mb-4 mt-10">
        Coming soon.
        </h1>
      </div>
    </main>
  )
}
