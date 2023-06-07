import { useRouter } from 'next/router';

const Post = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <p>Post: {id}</p>
      <br />
      <p>Latest Modified: {props.latestModified}</p>
    </>
  )
}

export default Post
export const getStaticProps = async () => {
  return {
    props: {
      latestModified: Date.now()
    },
  };
};
export const getStaticPaths = async () => {
  const paths = ["1", "2", "3"].map((postId) => ({
    params: { id: postId },
  }));

  return {paths, fallback: false};
};