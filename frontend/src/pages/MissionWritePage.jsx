import React, { useState } from "react";
import axios from "axios";
import {
    Container,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";

function MissionWritePage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [totalGroups, setTotalGroups] = useState(1); // default to 1
    const [deadline, setDeadline] = useState('');

    const handleWrite = async () => {
        const createdAt = new Date().toISOString().slice(0, 19);

        const fixedDeadline = deadline.length === 16 ? `${deadline}:00` : deadline;
        
        const requestData = {
            title,
            description,
            totalGroups,
            createdAt,
            deadline: fixedDeadline,
        };

        console.log("보내는 데이터:", requestData);

        try {
            const response = await axios.post("http://localhost:8080/missionWrite", requestData);
            if (response.status === 200) {
                alert("글 작성이 완료되었습니다.");
            } else {
                alert("글 작성에 실패했습니다.");
            }
        } catch (error) {
            console.error("글쓰기 실패:", error);
            alert("글 작성에 실패했습니다.");
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                <b>Mission 글쓰기</b>
            </Typography>

            <TextField
                fullWidth
                label="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
            />

            <TextField
                fullWidth
                multiline
                rows={4}
                label="내용"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="group-select-label">그룹 수</InputLabel>
                <Select
                    labelId="group-select-label"
                    value={totalGroups}
                    label="그룹 수"
                    onChange={(e) => setTotalGroups(Number(e.target.value))} // 숫자 변환
                >
                    {Array.from({ length: 30 }, (_, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                            {i + 1}개
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                fullWidth
                type="datetime-local"
                label="마감일"
                InputLabelProps={{ shrink: true }}
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                sx={{ mb: 2 }}
            />

            <Button variant="contained" color="primary" onClick={handleWrite}>
                글 쓰기
            </Button>
        </Container>
    );
}

export default MissionWritePage;