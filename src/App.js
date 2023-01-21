//  npx json-server -p 3500 -w data/db.json
//  npm i react-icons
import Layout from "./Layout";
import Home from "./Home";    
import Missing from "./Missing";
import NewPost from "./NewPost";
import About from "./About";
import PostPage from "./PostPage";
import {Route,Routes} from "react-router-dom";
// import EditPost from "./EditPost";
// import {useNavigate} from "react-router-dom";
// import {useState, useEffect,} from "react";
// import {format} from "date-fns";
// import api from './api/posts';
// import useWindowSize from "./hooks/useWindowSize";
// import useAxiosFetch from "./hooks/useAxioxFetch";
import {DataProvider} from './context/DataContext';

function App (){
  // const [posts,setPosts] =  useState([]);
  // const [search, setSearch] = useState('');
  // const [postTitle, setPostTitle] = useState('');
  // const [postBody, setPostBody] = useState('');
  // const [searchResults,setSearchResults] = useState([]);
  // const [editTitle, setEditTitle] = useState('');
  // const [editBody, setEditBody] = useState('');
  // const navigate = useNavigate();
  // const {width} = useWindowSize();
  // const {data,fetchError,isLoading} = useAxiosFetch('http://localhost:3500/posts');

  // useEffect(()=>{
  //   setPosts(data)
  // },[data]); 

  // useEffect(()=>{
  //   const filteredResults = posts.filter(post=>
  //      ((post.body).toLowerCase()).includes(search.toLowerCase())
  //   || ((post.title).toLowerCase()).includes(search.toLowerCase()));
  
  //   setSearchResults(filteredResults.reverse());
  // },[posts,search]);

  // const handleEdit =async(id)=>{
  //   console.log("handle edit exe");
  //   const datetime =format(new Date(),'MMMM dd, yyyy pp');
  //   const updatedPost = {id,title:editTitle,datetime,body:editBody};
  //   try{
  //     const response = await api.put(`/posts/${id}`,updatedPost);
  //     setPosts(posts.map( post=> post.id === id ? {...response.data}: post));
  //     setEditTitle('');
  //     setEditBody('');
  //     navigate('/');
  //   }
  //   catch(err){
  //     console.log(`Error: ${err.message}`);  
  //   }

  // }
  // const handleDelete = async(id)=>{
  //   try{
  //     await api.delete(`/posts/${id}`);
  //     const postList = posts.filter(post =>post.id !== id);
  //     setPosts(postList);
  //     navigate('/');
  //   }
  //   catch(err){
  //     console.log(`Error: ${err.message}`);  
  //   }
      
  // }
  // const handleSubmit= async(e)=>{
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id +1 :1;
  //   const datetime =format(new Date(),'MMMM dd, yyyy pp');
  //   const newPost = {id,title:postTitle,datetime,body:postBody};
  //   try{
  //     const response = await api.post('/posts', newPost);
  //     const allPosts = [...posts,response.data];
  //     setPosts(allPosts);
  //     setPostTitle('');
  //     setPostBody('');
  //     navigate('/');
  //   }
  //   catch (err){
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

// useEffect(()=>{
//   const fetchPosts = async ()=>{
//     try{
//       const response = await api.get('/posts');
//       setPosts(response.data);
//     }catch(err){
//        //not in a 200 response range
//        if(err.response){
//       console.log(err.response.data);
//       console.log(err.response.status);
//       console.log(err.response.headers);}
//       else{
//         console.log(`Error: ${err.message}`);
//       }
//     }
//   }
//   fetchPosts();
// },[])
  
return(        
  <DataProvider>
    <Routes>
      <Route path="/" element ={<Layout/>}>
      <Route index element ={<Home/>}/>
      <Route path="post">
        <Route index element={<NewPost/>}/>
        {/* <Route path="id/edit" element={<EditPost/>}/> */}
        <Route path=":id" element={<PostPage />}/>
      </Route>
      <Route path= "/about" element = {<About/>}/>
      <Route path = "*"  element = {<Missing/>} />
      </Route>

    </Routes>
  </DataProvider>    
      
  )
  }
export default App;