import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogs } from '../reducers/blogsReducer';
import BlogFormLabel from './BlogFormLabel';
import BlogFilter from './BlogFilter';
import Blog from './Blog';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';

const BlogList = () => {
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // fetch blogs from server
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const blogsToShow = filter
    ? blogs.filter((blog) => {
        if (
          blog.title.toLowerCase().includes(filter.toLowerCase()) ||
          blog.author.toLowerCase().includes(filter.toLowerCase())
        ) {
          return true;
        }
        return false;
      })
    : blogs;

  return (
    <div>
      {user ? <BlogFormLabel /> : null}
      <br></br>
      <BlogFilter />
      <br></br>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {blogsToShow.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <Blog key={blog.id} blog={blog} />
                </TableCell>
                <TableCell>{blog.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BlogList;
