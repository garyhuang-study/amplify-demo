import { useRouter } from 'next/router';

const Post = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <p>Post: {id}</p>
      <p>Latest Modified Timestamp: {props.latestModified}</p>
      <p>Latest Modified Locale String: {new Date(props.latestModified).toLocaleString()}</p>
    </>
  )
}

export default Post
export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    mode: 'cors',
    next: { revalidate: 60 },
  };
  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Taipei', options);
  const json = await res.json();
  console.log(json);
  return {
    props: {
      latestModified: json?.unixtime ? (json?.unixtime * 1000) : Date.now()
    },
  };
};
export const getStaticPaths = async () => {
  const paths = ["1", "2", "3"].map((postId) => ({
    params: { id: postId },
  }));

  return {paths, fallback: false};
};