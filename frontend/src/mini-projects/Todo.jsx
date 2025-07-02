import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const localtask = JSON.parse(localStorage.getItem("task"));
    if (localtask) setTasks(localtask);
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input === "") {
      return alert("Task cannot be empty");
    }
    setTasks([
      ...tasks,
      { id: tasks.length + 1, task: input, completed: false },
    ]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((t) => t.id !== index));
  };

  const completedTask = (index) => {
    setTasks(
      tasks.map((t) => (t.id === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const handlekey = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight={600}>
          📝 Todo List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/nav")}
          sx={{ px: 3, borderRadius: 2 }}
        >
          Back to Projects
        </Button>

        <Stack direction="row" spacing={2} mb={4}>
          <TextField
            fullWidth
            label="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handlekey}
            variant="outlined"
          />
          <Button
            variant="contained"
            onClick={addTask}
            color="primary"
            endIcon={<AddIcon />}
          >
            Add
          </Button>
        </Stack>

        <List>
          {tasks.map((t) => (
            <ListItem
              key={t.id}
              divider
              secondaryAction={
                <IconButton edge="end" onClick={() => deleteTask(t.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              }
            >
              <Checkbox
                edge="start"
                checked={t.completed}
                onChange={() => completedTask(t.id)}
              />
              <ListItemText
                primary={t.task}
                primaryTypographyProps={{
                  sx: {
                    textDecoration: t.completed ? "line-through" : "none",
                    color: t.completed ? "text.disabled" : "text.primary",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Todo;
