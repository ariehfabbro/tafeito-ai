import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { TaskInputProps } from "./TaskInput";

const TaskInput = (props: TaskInputProps) => {
  const {
    onSelectCreateTask,
    category
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    onSelectCreateTask(category);
    setIsOpen(true);
  }

  const cancelCreateTask = () => {
    onSelectCreateTask(null);
    setIsOpen(false);
  }

  const createTask = () => {
    onSelectCreateTask(null);
    setIsOpen(false);
  }
  
  return (
    <Box>
      {isOpen === false ? (
        <Box>
          <Button component='label' variant='contained' onClick={onClick} startIcon={<CloudUploadIcon />}>
            Adicionar Tarefa
          </Button>
        </Box>
      ) : (
        <Box>
          <Card>
            <CardContent>
              <TextField id="standard-basic" label="Standard" variant="standard" />
              <CardActions>
                <Button component='label' variant='contained' onClick={cancelCreateTask}>Cancelar</Button>
                <Button component='label' variant='contained' onClick={createTask}>Criar</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  )
}

export default TaskInput;