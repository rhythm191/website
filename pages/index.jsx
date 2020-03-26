import Head from "next/head";

export default function Index() {
  return (
    <main>
      <Head>
        <title>Rhyztech</title>
        <meta name="description" content="Rhyztech is tech team powered by rhythm191" />
      </Head>

      <section>
        <h1>Rhyztech</h1>
        <p>powered by rhythm191</p>
      </section>

      <section>
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
    </main>
  );
}
