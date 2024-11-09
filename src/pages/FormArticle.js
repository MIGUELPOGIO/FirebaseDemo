import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './create.css';

export default function FormArticle() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const { articleId } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!articleId; // Check if we are in edit mode

  useEffect(() => {
    if (isEditMode) {
      const fetchArticle = async () => {
        const docRef = doc(db, 'articles', articleId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const articleData = docSnap.data();
          setTitle(articleData.title);
          setAuthor(articleData.author);
          setDescription(articleData.description);
        } else {
          console.error('No such document!');
          navigate('/');
        }
      };
      fetchArticle();
    }
  }, [articleId, isEditMode, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const article = { title, author, description };
    if (isEditMode) {
      const docRef = doc(db, 'articles', articleId);
      await updateDoc(docRef, article);
    } else {
      const ref = collection(db, 'articles');
      await addDoc(ref, article);
    }
    navigate('/');
  };

  return (
    <div className="create">
      <h2 className="page-title">{isEditMode ? 'Edit Article' : 'Add a New Article'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Author:</span>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>

        <button className="btn">{isEditMode ? 'Update Article' : 'Submit'}</button>
      </form>
    </div>
  );
}
