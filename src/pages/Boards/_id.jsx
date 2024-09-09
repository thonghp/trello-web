
import Container from '@mui/material/Container';
import AppBar from '~/components/AppBar';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';

function Board() {
  return (
    /*
     * 100vh là chiều cao màn hình 100%, màn bao nhiêu inch nó cũng kéo dài full chiều cao màn hình
     * disableGutters mặc định là false, khi ta gọi nó không chỉ định gì nó sẽ hiểu là true
     *    padding left và right sẽ bị xoá
     * maxWidth mặc định là true, ta chỉ định false nó sẽ full màn hình
     */
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />

      <BoardBar />

      <BoardContent />
    </Container>
  );
}

export default Board;