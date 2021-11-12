import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>このサイトはデジタルキューブのメンバーとオフィシャルなブログ記事を収集したサイトです。</p>
						<p>メンバーが日々仕事を通じて知り得た技術情報や Tips を掲載しています。</p>
						<p>お仕事の依頼は、<a href="https://labworks.digitalcube.jp/">WordPress に特化したWebサイト開発会社 - DigitalCube LabWorks</a> まで。</p>
						<p>お待ちしております。</p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
