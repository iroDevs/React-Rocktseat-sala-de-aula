/* eslint-disable react/prop-types */
import PostStyle from './Post.module.css';


function Post({ autor, conteudo}) {
  console.log('PostStyle:', PostStyle);


  return (
    <div className={PostStyle.box}>
      <h1>{autor}</h1>
      <p>{conteudo}</p>
    </div>
  );
}


export default Post;
