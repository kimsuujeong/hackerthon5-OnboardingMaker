import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

function ReplyPage() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, author: "Alice", text: "좋은 미션이네요!", editing: false },
    { id: 2, author: "Bob", text: "재미있을 것 같아요!", editing: false },
  ]);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editText, setEditText] = useState(""); // 수정용 텍스트 상태 추가
  const [editingId, setEditingId] = useState(null); // 수정 중인 댓글의 id

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          author: "나",
          text: comment,
        },
      ]);
      setComment("");
    }
  };

  const confirmDelete = () => {
    setComments((prev) => prev.filter((c) => c.id !== deleteTarget));
    setDeleteTarget(null);
  };

  const handleEditToggle = (id, currentText) => {
    setEditingId(id); // 수정하려는 댓글의 id 설정
    setEditText(currentText); // 해당 댓글의 텍스트를 입력창에 표시
  };

  const handleEditSave = () => {
    setComments(
      comments.map((c) =>
        c.id === editingId ? { ...c, text: editText } : c
      )
    );
    setEditingId(null); // 수정이 끝난 후 수정 상태 해제
    setEditText(""); // 텍스트 초기화
  };

  const handleEditCancel = () => {
    setEditingId(null); // 수정 취소 시 수정 상태 해제
    setEditText(""); // 텍스트 초기화
  };

  return (
    <Box sx={{ maxWidth: '80%', mx: "auto", mt: 4, p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          📝 온보딩 미션: API 연동 과제
        </Typography>
        <Typography variant="body1" color="text.secondary">
          📅 날짜: 2025-05-08
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          👥 3조
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          💬 댓글
        </Typography>

        {/* 댓글 작성 입력창 */}
        <TextField
          fullWidth
          multiline
          minRows={2}
          placeholder="댓글을 입력하세요..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleAddComment();
            }
          }}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleAddComment}>
          댓글 등록
        </Button>

        <List sx={{ mt: 3 }}>
          {comments.map((c) => (
            <React.Fragment key={c.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" color="text.secondary">
                      ✍️ {c.author}
                    </Typography>
                  }
                  secondary={
                    editingId === c.id ? (
                      <TextField
                        fullWidth
                        multiline
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        sx={{ mt: 0.5 }}
                      />
                    ) : (
                      <Typography
                        sx={{ whiteSpace: "pre-wrap", mt: 0.5 }}
                        component="span"
                      >
                        {c.text}
                      </Typography>
                    )
                  }
                />
                <Stack spacing={1} direction="column" ml={2} alignItems="flex-start">
                  {editingId === c.id ? (
                    // 수정 중일 때는 수정 완료, 취소 버튼만 보임
                    <>
                      <Button size="small" onClick={handleEditSave}>
                        수정 완료
                      </Button>
                      <Button size="small" onClick={handleEditCancel}>
                        취소
                      </Button>
                    </>
                  ) : (
                    // 수정 중이 아닐 때는 수정 및 삭제 버튼 보임
                    <>
                      <Button size="small" onClick={() => handleEditToggle(c.id, c.text)}>
                        수정
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        onClick={() => setDeleteTarget(c.id)}
                      >
                        삭제
                      </Button>
                    </>
                  )}
                </Stack>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* 삭제 확인 Dialog */}
      <Dialog
        open={deleteTarget !== null}
        onClose={() => setDeleteTarget(null)}
      >
        <DialogTitle>❗ 댓글 삭제 확인</DialogTitle>
        <DialogContent>
          <DialogContentText>
            해당 댓글을 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)}>취소</Button>
          <Button onClick={confirmDelete}>확인</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ReplyPage;