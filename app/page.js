//? app folder içindeki page.js "/" route olan home sayfasıdır

//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
