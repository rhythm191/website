import Head from "next/head";

export default function Index() {
  return (
    <main>
      <Head>
        <title>Rhyztech</title>
        <meta name="description" content="Rhyztech is tech team powered by rhythm191" />
      </Head>

      <section id="hero-section">
        <h1>Rhyztech</h1>
        <p>powered by rhythm191</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>
          中の人はWebエンジニアです。名古屋のSIerでフルスタックエンジニアとしてWebサービスの開発を経験した後、
          東京でWeb系の企業でフルスタックエンジニア兼フロントエンドエンジニアをやっていました。
          今は自宅警備員をやっています。
        </p>
        <p>
          SIer時代にはJava・Play frameworkを、Web系の企業ではRuby on Railsで開発していました。
          自宅警備員時代は引きこもりながらReactとVueの修行をしていました。
          組織改革にも関心があって、新しいツールを導入したり、新しいプロセスを設計したりするのが好きです。
        </p>
      </section>

      <section id="products">
        <h2>Products</h2>
        <div>
          <h3>Alfred-emmet</h3>
          <p>Alfred上でEmmetの変換が使えるAlfred workflowです。</p>
          <a href="https://www.npmjs.com/package/alfred-emmet">visit</a>
        </div>
        <div>
          <h3>ルーン文字ジェネレータ</h3>
          <p>ルーン文字の画像メーカーを作りました。</p>
          <a href="https://rune-generator.firebaseapp.com/">visit</a>
        </div>
      </section>

      <section id="activities">
        <h2>Activities</h2>
        <div>
          <h3>Rhyztech blog</h3>
          <p>Techブログです。Web開発をしている中で学んだことやゲームの話をしたりします。</p>
          <a href="https://blog.rhyztech.net/">visit</a>
        </div>
        <div>
          <h3>Speaker Deck</h3>
          <p>tech系のスライドをあげたり、splatoonのスライドをあげたりしています。</p>
          <a href="https://speakerdeck.com/rhythm191">visit</a>
        </div>
      </section>
    </main>
  );
}
