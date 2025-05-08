import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
} from "@mui/material";

function MissionDetail() {
  const { id } = useParams();
  const [mission, setMission] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/mission/${id}`)
      .then((res) => setMission(res.data))
      .catch((err) => console.error("미션 불러오기 실패", err));
  }, [id]);

  if (!mission) {
    return (
      <Container sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="body1" color="text.secondary">
          로딩 중...
        </Typography>
      </Container>
    );
  }

  const groups = Array.from({ length: mission.totalGroups }, (_, i) => `${i + 1}조`);

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: "center" }}>
        <Typography variant="h5">{mission.title}</Typography>
      </Paper>

      <Grid container spacing={2}>
        {groups.map((groupName, index) => (
          <Grid item xs={6} key={index}>
            <Box
              sx={{
                backgroundColor: "#ddd",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {groupName}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MissionDetail;