import { useEffect,useState} from "react";
import{useParams,useNavigate} from 'react-router-dom';
import api from "../api/posts";
import { useContext } from "react";
import DataContext from "./context/DataContext";


const EditPost = () =>{
        // console.log("editTitle");
        const navigate = useNavigate();
        const [editTitle, setEditTitle] = useState('');
        const [editBody, setEditBody] = useState('');
        const{id}= useParams();
        const post = posts.find(post =>(post.id).toString() === id);
        const {posts} =  useContext(DataContext);

        useEffect(()=>{
            if(post){
                setEditTitle(post.title);
                setEditBody(post.body);
            }
        },[post,setEditTitle,setEditBody])
        
        const handleEdit =async(id)=>{
            console.log("handle edit exe");
            const datetime =format(new Date(),'MMMM dd, yyyy pp');
            const updatedPost = {id,title:editTitle,datetime,body:editBody};
            try{
              const response = await api.put(`/posts/${id}`,updatedPost);
              setPosts(posts.map( post=> post.id === id ? {...response.data}: post));
              setEditTitle('');
              setEditBody('');
              navigate('/');
            }
            catch(err){
              console.log(`Error: ${err.message}`);  
            }
          }
        
          return(
            <main className="NewPost">
                {editTitle &&
                   <>
                    <h1>EditPost</h1>
                    <form className="newPostForm" onSubmit = {(e)=>e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                            id="postTitle"
                            type = "text"
                            required
                            value = {editTitle}
                            onChange = {(e)=>setEditTitle(e.target.value)}
                        />
                        <label htmlFor = "postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange = {(e)=>setEditBody(e.target.value)}
                        />
                        <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
                    </form>
                    </>
                }
                {!editTitle &&
                    <>
                        <h2>Post not found</h2>
                        <p>well thats disappointing in the edit post</p>
                        <p>
                            <a href="/"> Visit Our HomePage</a>
                        </p>
                    </>

                }
            </main>
        )
        }

export  default EditPost;