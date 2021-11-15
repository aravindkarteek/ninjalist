import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Hello</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo id,
          possimus delectus ratione quas et illum iure laudantium dolore
          consequatur voluptatum fugiat! Illum eius asperiores tempore in
          sapiente. Commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo id,
          possimus delectus ratione quas et illum iure laudantium dolore
          consequatur voluptatum fugiat! Illum eius asperiores tempore in
          sapiente. Commodi.
        </p>
        <Link href="/ninjas">
          <a>See Ninja listing</a>
        </Link>
      </div>
    </>
  );
}
