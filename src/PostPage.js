import { useParams,useNavigate} from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import api from "./api/posts";


const PostPage = ()=>{
    const {posts,setPosts} =  useContext(DataContext);
    const{id} = useParams();
    const post = posts.find(post =>(post.id).toString()===id);
    const navigate = useNavigate();


    const handleDelete = async(id)=>{
        try{
          await api.delete(`/posts/${id}`);
          const postList = posts.filter(post =>post.id !== id);
          setPosts(postList);
          navigate('/');
        }
        catch(err){
          console.log(`Error: ${err.message}`);  
        }
          
      }
    
    return(
        <main className="PostPage">
            <article className="post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <a href={`${post.id}/edit`}><button className="editButton">Edit Post</button></a>
                        <button className="deleteButton" onClick={()=>handleDelete(post.id)}>Delete Post</button>
                    </>
                }
                {!post&&
                    <>
                        <h2>Post not found</h2>
                        <p>well thats dissapointing in the postpage</p>
                        <p>
                            <a href="/">Visit our HomePage</a>
                        </p>
                    </>
                }
            </article>
            
        </main>
    )
}
export default PostPage;