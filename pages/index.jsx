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
        <div className="wrapper">
          <h2>About</h2>
          <div className="content-wrapper">
            <p>小さなサービスを作ったり、小さなツールを作ったりしています。</p>
            <p>
              中の人は東京在住のWebエンジニアです。名古屋のSIerでフルスタックエンジニアとしてWebサービスの開発を経験した後、
              東京でWeb系の企業でフルスタックエンジニア兼フロントエンドエンジニアをやっていました。
              今は自宅警備員をやっています。
            </p>
            <p>
              SIer時代にはJava・Play frameworkを、Web系の企業ではRuby on Railsで開発していました。
              自宅警備員時代は引きこもりながらReactとVueの修行をしていました。
              組織改革にも関心があり、新しいツールを導入したり、新しいプロセスを設計したりするのが好きです。
            </p>
            <p>
              他にもゲームやボドゲにも関心があり、いくらをたくさん集めるバイトをしていたり、ゲームマーケットに出没したりしています。
            </p>
          </div>
        </div>
      </section>

      <section id="products">
        <h2>Products</h2>
        <div className="content-wrapper">
          <div className="product-showcase">
            <div>
              <h3>Alfred-emmet</h3>
              <p>Alfred上でEmmetの変換が使えるAlfred workflowです。</p>
              <a href="https://www.npmjs.com/package/alfred-emmet">visit</a>
            </div>
            <div className="product-showcase__image">
              <img src="/images/alfred-emmet.png" alt="" width="97" />
            </div>
          </div>
          <div className="product-showcase">
            <div>
              <h3>Trello mail</h3>
              <p>
                TrelloのボードをエクスポートできるようにするChrome拡張機能です。
                エクスポートは「メールでエクスポート」か「クリップボードにコピー」を選ぶことができます。
              </p>
              <a href="https://chrome.google.com/webstore/detail/npombkniehmhjlbjnfgjkfnjfmcjnfne">
                visit
              </a>
            </div>
            <div className="product-showcase__image">
              <img src="/images/trello-mail.jpg" alt="" />
            </div>
          </div>
          <div className="product-showcase">
            <div>
              <h3>login_kenpo</h3>
              <p>
                関東ITソフトウェアのMY HEALTH
                WEBにログインしてログインボーナスを稼ぐ自動スクリプトです。
              </p>
              <a href="https://www.npmjs.com/package/@rhythm191/login_kenpo">visit</a>
            </div>
          </div>
          <div className="product-showcase">
            <div>
              <h3>ルーン文字ジェネレータ</h3>
              <p>ルーン文字の画像メーカーを作りました。</p>
              <a href="https://rune-generator.firebaseapp.com/">visit</a>
            </div>
            <div className="product-showcase__image">
              <img src="/images/rune-generator.png" alt="" />
            </div>
          </div>
          <div className="product-showcase">
            <div>
              <h3>1-Day Twit View</h3>
              <p>
                Twitterでつぶやいた一日分のツイートをログメールとして送るサービスです。
                このログメールはあなたのツイートだけでなく、あなたへのリプライも一緒に表示します。
              </p>
              <a href="https://onedaytv.herokuapp.com/">visit</a>
            </div>
            <div className="product-showcase__image">
              <img src="/images/1daytv.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="activities">
        <h2>Activities</h2>
        <div className="content-wrapper">
          <div className="activity-showcase">
            <h3>Rhyztech blog</h3>
            <p>Techブログです。Web開発をしている中で学んだことやゲームの話をしたりします。</p>
            <a href="https://blog.rhyztech.net/">visit</a>
          </div>
          <div className="activity-showcase">
            <h3>Speaker Deck</h3>
            <p>tech系のスライドをあげたり、splatoonのスライドをあげたりしています。</p>
            <a href="https://speakerdeck.com/rhythm191">visit</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>お気軽に話しかけてください。</p>
        <ul>
          <li>
            <a href="https://twitter.com/rhythm191">Twitter</a>
          </li>
          <li>
            <a href="mailto:sac2ndg+develop@gmail.com">Mail</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
