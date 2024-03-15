
import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
//import ‘./styles/main_styles.css’;
function Md1({ fileName }) {
  //const file_name = ‘react_pinterest_clone.md’;
  const [post, setPost] = useState('');
  useEffect(() => {
    import(`./Markdownfiles/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });
  return (
    <div className='container mx-auto mt-20 px-60 overflow-y-auto h-screen'>
  <Markdown>
    {post}
  </Markdown>
</div>
  );
}
export default Md1;