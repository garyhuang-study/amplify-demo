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
export const getServerSideProps = async () => {
  return {
    props: {
      latestModified: Date.now()
    },
  };
};