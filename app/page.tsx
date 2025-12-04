//Server Component

export default function Home() {
  return (
    <div >
      <main className="flex flex-col items-center gap-6 bg-[url(/img/space.jpg)] h-screen bg-no-repeat bg-cover">
        <h1>Main Page</h1>
        
        <a href="/about" style={{color: "white"}}>About</a> 
        
      </main>
    </div>
  );
}
