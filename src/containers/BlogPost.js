// eslint-disable-next-line no-unused-vars
import {React, Suspense, useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import Chip from '../components/NewBlog/Chip';
// eslint-disable-next-line no-unused-vars
import EmptyList from '../components/NewBlog/EmptyList';
import '../Assets/css/blog.css';
import { Link, useParams } from 'react-router-dom';
import ParticlesComponent from '../components/Particles';
import { Helmet } from 'react-helmet';
import { usePromise } from '../utils/usePromise';
import { butterFetchSinglePost } from '../utils/API/butterFetchSinglePost';
import Preloader from "../components/Pre";

export const PostPage = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <ArticlePage />
    </Suspense>
    );

}

const ArticlePage = () => {
  const { slug } = useParams();

  const content = usePromise(() => butterFetchSinglePost(slug), [slug]);

  useEffect(() => {
    // Optionally, you can add any additional logic here
    // For example, you can scroll to the top of the page when the content is loaded
    window.scrollTo(0, 0);
  }, [content]);

  if(!content) {
    return <Preloader />
  }

//without it it does not work :clown:
  // if (!content) {
  //   return console.log(butterFetchSinglePost(slug))
  // }

  console.log(content + " TO JEST TO CO ZWROCIŁO")

  // const [promise, setPromise] = useState();

  

  // if (content === null) return (<div>Sorry i broke the code..</div>)

  // useEffect(() => {
  //   setPromise(fetchSinglePost(slug))
  // }, [slug])

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const post = await fetchSinglePost(slug).read();
  //       console.log(post)
  //     } catch (error) {
  //       console.log('Error fetching post: ', error)
  //     }
  //   };
  //   fetchPost();
  // }, [slug]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const fetchPromise = useMemo(() => fetchSinglePost(slug), []);
  // if (promise == null) return (null)
  // const content = promise.read();
  return (
    <container className=".blogContainer">
      <Helmet>
        <title>QAwithPierre | {content.seo_title}</title>
        <meta name="description" content={content.meta_description} />

        {/* Google / Search Engine Tags */}
        <meta name="author" content="Adam Stolarski" />
        <meta itemprop="name" content={content.seo_title} />
        <meta itemprop="description" content={content.meta_description} />
        <meta itemprop="image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://qawithpierre.pl/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.seo_title} />
        <meta property="og:description" content={content.meta_description} />
        <meta property="og:image" content={content.featured_image} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta name="twitter:title" content={content.seo_title} />
        <meta name="twitter:description" content={content.meta_description} />
        <meta name="twitter:image" content={content.featured_image} />
      </Helmet>
      <ParticlesComponent />
      <Link className='blog-goBack' to='/new-blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {content ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {content.created}</p>
            <h1 id='dynamicTitle'>{content.title}</h1>
            <div className='blog-subCategory'>
              
                {/* <div>
                  <Chip label={content.tags[0].name} />
                </div> */}
              
            </div>
          </header>
          <img src={content.featured_image} alt='cover' />
          <div className='blog-content' dangerouslySetInnerHTML={{__html: content.body}}></div>
        </div>
      ) : (
        <EmptyList />
      )}
    </ container>
  );
};


export default ArticlePage;