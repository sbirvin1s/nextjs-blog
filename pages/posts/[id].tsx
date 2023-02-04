/* ========== EXTERNAL MODULES ========== */
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from 'next';


/* ========== INTERNAL MODULES ========== */
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import utilStyles from '../../styles/utils.module.css';

/* ========== EXPORTS ========== */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: {
      postData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export default function Post({
  postData
 } : {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
 }) {

  /* --- RENDERER --- */
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
      </article>
    </Layout>
  )
}