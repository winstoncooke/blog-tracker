import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../reducers/commentsReducer';
import CommentForm from './CommentForm';
import {
  TableContainer,
  Table,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const Comments = ({ blogId }) => {
  const user = useSelector((state) => state.user);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(blogId));
  }, [blogId, dispatch]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div>
      <br />
      {user ? <CommentForm blogId={blogId} /> : null}
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Comments</strong>
              </TableCell>
            </TableRow>
            {comments
              .slice()
              .reverse()
              .map((comment) => (
                <TableRow key={comment.id}>
                  {comment.user ? (
                    <TableCell>
                      {/* After a new comment is added, the name appears blank */}
                      <strong>{comment.user.name}</strong>: {comment.text}
                      <br />({formatDate(comment.date)})
                    </TableCell>
                  ) : (
                    <TableCell>
                      {comment.text}
                      <br />({formatDate(comment.date)})
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Comments;
